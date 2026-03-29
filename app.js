// ============================================================================
// app.js — InsuraLens Core Logic
// ============================================================================
const GROQ_API_KEY = "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";
const GSHEET_URL = "https://script.google.com/macros/s/AKfycbzo-N-4dm3tiBkc63TISpQO50QGfNVzJ2nONiCpQbn0SNtgRPDqXAri7D_Tpyox0SI/exec";

const state = {
    currentStep: 1, selfMember: null, familyMembers: [], allMembers: [],
    filteredPlans: [], selectedPlanIds: new Set(), maxSelections: 3,
    pincode: "", coverAmount: 5000000, tenure: 1, payMode: "annual", phone: "",
    currentPlanDetail: null
};

const DOM = {};
function initDOM() {
    DOM.welcomeModal = document.getElementById("welcome-modal");
    DOM.welcomeDismiss = document.getElementById("welcome-dismiss");
    DOM.steps = document.querySelectorAll(".form-step");
    DOM.stepIndicators = document.querySelectorAll(".step-indicator");
    DOM.selfName = document.getElementById("self-name");
    DOM.selfPhone = document.getElementById("self-phone");
    DOM.selfDob = document.getElementById("self-dob");
    DOM.selfGender = document.getElementById("self-gender");
    DOM.selfPincode = document.getElementById("self-pincode");
    DOM.pincodeCity = document.getElementById("pincode-city");
    DOM.selfPedSelector = document.getElementById("self-ped-selector");
    DOM.step1Error = document.getElementById("step1-error");
    DOM.btnNext1 = document.getElementById("btn-next-1");
    DOM.familyMembersList = document.getElementById("family-members-list");
    DOM.btnAddMember = document.getElementById("btn-add-member");
    DOM.addMemberForm = document.getElementById("add-member-form");
    DOM.memberRelation = document.getElementById("member-relation");
    DOM.memberName = document.getElementById("member-name");
    DOM.memberDob = document.getElementById("member-dob");
    DOM.memberGender = document.getElementById("member-gender");
    DOM.memberPedSelector = document.getElementById("member-ped-selector");
    DOM.memberError = document.getElementById("member-error");
    DOM.btnCancelMember = document.getElementById("btn-cancel-member");
    DOM.btnSaveMember = document.getElementById("btn-save-member");
    DOM.btnBack2 = document.getElementById("btn-back-2");
    DOM.btnNext2 = document.getElementById("btn-next-2");
    DOM.membersSummary = document.getElementById("members-summary");
    DOM.coverInput = document.getElementById("cover-input");
    DOM.planType = document.getElementById("plan-type");
    DOM.tenureInput = document.getElementById("tenure-input");
    DOM.modeAnnual = document.getElementById("mode-annual");
    DOM.modeMonthly = document.getElementById("mode-monthly");
    DOM.btnBack3 = document.getElementById("btn-back-3");
    DOM.searchBtn = document.getElementById("search-btn");
    DOM.searchError = document.getElementById("search-error");
    DOM.resultsSection = document.getElementById("results-section");
    DOM.resultsTitle = document.getElementById("results-title");
    DOM.resultsGrid = document.getElementById("results-grid");
    DOM.tenureBadge = document.getElementById("tenure-badge");
    DOM.modeBadge = document.getElementById("mode-badge");
    DOM.compareBar = document.getElementById("compare-bar");
    DOM.compareCount = document.getElementById("compare-count");
    DOM.selectedNames = document.getElementById("selected-names");
    DOM.compareBtn = document.getElementById("compare-btn");
    DOM.aiModal = document.getElementById("ai-modal");
    DOM.aiLoading = document.getElementById("ai-loading");
    DOM.aiOutput = document.getElementById("ai-output");
    DOM.modalClose = document.getElementById("modal-close");
    // Plan detail
    DOM.pdModal = document.getElementById("plan-detail-modal");
    DOM.pdClose = document.getElementById("pd-close");
    DOM.pdPlanName = document.getElementById("pd-plan-name");
    DOM.pdProvider = document.getElementById("pd-provider");
    DOM.pdInfoPanel = document.getElementById("pd-info-panel");
    DOM.chatMessages = document.getElementById("chat-messages");
    DOM.chatInput = document.getElementById("chat-input");
    DOM.chatSend = document.getElementById("chat-send");
}

// ======================== UTILITY ========================
function fmt(a) { if (a >= 10000000) return "₹" + (a / 10000000).toFixed(1) + " Cr"; if (a >= 100000) return "₹" + (a / 100000).toFixed(0) + " L"; return "₹" + a.toLocaleString("en-IN"); }
function csrCls(c) { return c >= 96 ? "good" : c >= 92 ? "warning" : "danger"; }
function solCls(r) { return r >= 2.0 ? "good" : r >= 1.65 ? "warning" : "danger"; }
function esc(t) { var d = document.createElement("div"); d.textContent = t; return d.innerHTML; }

// ======================== WELCOME SCREEN ========================
function showWelcome() {
    if (localStorage.getItem("insuralens_welcomed") === "1") {
        DOM.welcomeModal.style.display = "none";
        return;
    }
    DOM.welcomeModal.style.display = "flex";
}
function dismissWelcome() {
    DOM.welcomeModal.style.display = "none";
    localStorage.setItem("insuralens_welcomed", "1");
}

// ======================== GOOGLE SHEETS (SILENT) ========================
function sendToGoogleSheets(data) {
    try {
        fetch(GSHEET_URL, {
            method: "POST", mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
    } catch (e) { /* silent fail */ }
}

function captureUserData() {
    var members = state.allMembers.map(function (m) {
        return { name: m.name, age: m.age, gender: m.gender, relationship: m.relationship, peds: (m.peds || []).join(", ") };
    });
    return {
        timestamp: new Date().toISOString(),
        name: state.selfMember.name,
        phone: state.phone,
        age: state.selfMember.age,
        gender: state.selfMember.gender,
        pincode: state.pincode,
        city: PremiumEngine.getCityFromPincode(state.pincode) || "",
        zone: PremiumEngine.getZone(state.pincode),
        peds: (state.selfMember.peds || []).join(", "),
        familyMembers: JSON.stringify(members),
        coverAmount: state.coverAmount,
        tenure: state.tenure,
        payMode: state.payMode
    };
}

// ======================== PED SELECTOR ========================
function renderPEDs(container, selected) {
    container.innerHTML = "";
    PremiumEngine.pedList.forEach(function (p) {
        var c = document.createElement("button"); c.type = "button";
        c.className = "ped-chip" + (selected.indexOf(p.id) !== -1 ? " active" : "");
        c.setAttribute("data-ped-id", p.id);
        c.innerHTML = '<span class="ped-icon">' + p.icon + '</span><span>' + esc(p.name) + '</span>';
        c.addEventListener("click", function () { this.classList.toggle("active"); });
        container.appendChild(c);
    });
}
function getPeds(container) {
    var r = []; container.querySelectorAll(".ped-chip.active").forEach(function (c) { r.push(c.getAttribute("data-ped-id")); }); return r;
}

// ======================== STEPS ========================
function goToStep(step) {
    state.currentStep = step;
    DOM.steps.forEach(function (s) { s.classList.remove("active"); });
    DOM.stepIndicators.forEach(function (si) {
        var n = parseInt(si.getAttribute("data-step"));
        si.classList.remove("active", "completed");
        if (n < step) si.classList.add("completed");
        if (n === step) si.classList.add("active");
    });
    document.querySelectorAll(".step-line-fill").forEach(function (f, i) { f.style.width = (i < step - 1) ? "100%" : "0"; });
    document.getElementById("step-" + step).classList.add("active");
    document.querySelector(".search-card").scrollIntoView({ behavior: "smooth", block: "start" });
}

function showErr(el, msg) { el.textContent = msg; el.style.display = "block"; }

function validateStep1() {
    var name = DOM.selfName.value.trim(), dob = DOM.selfDob.value, gender = DOM.selfGender.value,
        pincode = DOM.selfPincode.value.trim(), phone = DOM.selfPhone.value.trim();
    if (!name) { showErr(DOM.step1Error, "Please enter your name."); return false; }
    if (!phone || phone.length !== 10 || !/^\d{10}$/.test(phone)) { showErr(DOM.step1Error, "Please enter a valid 10-digit phone number."); return false; }
    if (!dob) { showErr(DOM.step1Error, "Please select your date of birth."); return false; }
    var age = PremiumEngine.calculateAge(dob);
    if (age < 0 || age > 120) { showErr(DOM.step1Error, "Invalid date of birth."); return false; }
    if (!gender) { showErr(DOM.step1Error, "Please select gender."); return false; }
    if (!pincode || pincode.length !== 6 || !/^\d{6}$/.test(pincode)) { showErr(DOM.step1Error, "Enter a valid 6-digit pincode."); return false; }
    DOM.step1Error.style.display = "none";
    state.selfMember = { name: name, dob: dob, age: age, gender: gender, relationship: "self", peds: getPeds(DOM.selfPedSelector) };
    state.pincode = pincode; state.phone = phone;
    return true;
}

// ======================== FAMILY ========================
function renderFamily() {
    DOM.familyMembersList.innerHTML = "";
    if (state.selfMember) DOM.familyMembersList.appendChild(memberCard(state.selfMember, -1));
    state.familyMembers.forEach(function (m, i) { DOM.familyMembersList.appendChild(memberCard(m, i)); });
}
function memberCard(m, idx) {
    var card = document.createElement("div"); card.className = "member-card";
    var age = m.age || PremiumEngine.calculateAge(m.dob);
    var peds = (m.peds || []).map(function (id) { var p = PremiumEngine.pedList.find(function (x) { return x.id === id; }); return p ? p.icon + " " + p.name : id; });
    var rel = m.relationship.charAt(0).toUpperCase() + m.relationship.slice(1).replace("-", " ");
    card.innerHTML = '<div class="member-card-info"><div class="member-avatar">' + (m.gender === "female" ? "👩" : "👨") + '</div><div class="member-details">' +
        '<div class="member-name">' + esc(m.name) + ' <span class="member-rel-badge">' + rel + '</span></div>' +
        '<div class="member-meta">Age ' + age + ' • ' + (m.gender === "male" ? "Male" : m.gender === "female" ? "Female" : "Other") + '</div>' +
        (peds.length > 0 ? '<div class="member-peds">' + peds.map(function (n) { return '<span class="ped-tag">' + n + '</span>'; }).join("") + '</div>' : '<div class="member-peds"><span class="no-ped">✓ No PEDs</span></div>') +
        '</div></div>' + (idx >= 0 ? '<button class="member-remove-btn" data-idx="' + idx + '">✕</button>' : '');
    if (idx >= 0) card.querySelector(".member-remove-btn").addEventListener("click", function () { state.familyMembers.splice(idx, 1); renderFamily(); });
    return card;
}
function validateMember() {
    var r = DOM.memberRelation.value, n = DOM.memberName.value.trim(), d = DOM.memberDob.value, g = DOM.memberGender.value;
    if (!r) { showErr(DOM.memberError, "Select relationship."); return false; }
    if (!n) { showErr(DOM.memberError, "Enter name."); return false; }
    if (!d) { showErr(DOM.memberError, "Select DOB."); return false; }
    if (!g) { showErr(DOM.memberError, "Select gender."); return false; }
    DOM.memberError.style.display = "none";
    return { name: n, dob: d, age: PremiumEngine.calculateAge(d), gender: g, relationship: r, peds: getPeds(DOM.memberPedSelector) };
}

// ======================== SUMMARY ========================
function renderSummary() {
    state.allMembers = [state.selfMember].concat(state.familyMembers);
    var city = PremiumEngine.getCityFromPincode(state.pincode), zone = PremiumEngine.getZone(state.pincode);
    var zl = zone === "A" ? "Metro" : zone === "B" ? "Tier-1" : "Tier-2/Rural";
    var h = '<div class="summary-header"><div class="summary-stat"><span class="summary-val">' + state.allMembers.length + '</span><span class="summary-label">Members</span></div>' +
        '<div class="summary-stat"><span class="summary-val">' + (city || state.pincode) + '</span><span class="summary-label">' + zl + '</span></div>' +
        '<div class="summary-stat"><span class="summary-val">' + state.pincode + '</span><span class="summary-label">Pincode</span></div></div>';
    h += '<div class="summary-members">';
    state.allMembers.forEach(function (m) {
        var rl = m.relationship.charAt(0).toUpperCase() + m.relationship.slice(1).replace("-", " ");
        h += '<span class="summary-member-chip">' + (m.gender === "female" ? "👩" : "👨") + ' ' + m.name + ' (' + rl + ', ' + m.age + 'y)' + (m.peds && m.peds.length > 0 ? ' <span class="has-ped">⚠️</span>' : '') + '</span>';
    });
    DOM.membersSummary.innerHTML = h + '</div>';
}

// ======================== CALC ========================
function filterCalc() {
    var cover = parseInt(DOM.coverInput.value, 10); state.coverAmount = cover;
    state.tenure = parseInt(DOM.tenureInput.value, 10);
    var eldest = Math.max.apply(null, state.allMembers.map(function (m) { return m.age; }));
    return insuranceDatabase
        .filter(function (p) { return eldest <= p.maxAge; })
        .map(function (p) { var r = PremiumEngine.calculateTotalPremium(p, state.allMembers, cover, state.pincode); return { plan: p, premium: r }; })
        .filter(function (i) { return i.premium.total > 0; })
        .sort(function (a, b) { return a.plan.ranking - b.plan.ranking; });
}

// ======================== CARD RENDERING ========================
function renderCard(item, idx) {
    var plan = item.plan, prem = item.premium, sel = state.selectedPlanIds.has(plan.id);
    var rc = idx === 0 ? "rank-1" : idx === 1 ? "rank-2" : idx === 2 ? "rank-3" : "";
    var td = tenureDiscounts[state.tenure] || 1;
    var annualTotal = Math.round(prem.grandTotal * td);
    var monthlyTotal = Math.round(annualTotal / 12);
    var displayAmt = state.payMode === "monthly" ? monthlyTotal : annualTotal;
    var displayLabel = state.payMode === "monthly" ? "/mo" : "/yr";

    var cov = plan.detailedCoverage ? plan.detailedCoverage.covered : [];
    var ncov = plan.detailedCoverage ? plan.detailedCoverage.notCovered : [];

    // Breakdown
    var bh = '<div class="premium-breakdown">';
    prem.breakdown.forEach(function (b) {
        var rl = b.relationship.charAt(0).toUpperCase() + b.relationship.slice(1).replace("-", " ");
        bh += '<div class="breakdown-row"><span>' + esc(b.name) + ' <small>(' + rl + ', ' + b.age + 'y)</small></span><span>₹' + b.basePremium.toLocaleString("en-IN") + '</span></div>';
        if (b.pedLoading > 0) bh += '<div class="breakdown-row ped-row"><span>↳ PED</span><span class="ped-amt">+₹' + b.pedLoading.toLocaleString("en-IN") + '</span></div>';
    });
    bh += '<div class="breakdown-row total-row"><span>Base</span><span>₹' + prem.total.toLocaleString("en-IN") + '</span></div>';
    bh += '<div class="breakdown-row gst-row"><span>GST 18%</span><span>₹' + prem.gst.toLocaleString("en-IN") + '</span></div>';
    if (td < 1) bh += '<div class="breakdown-row"><span>' + state.tenure + 'yr discount</span><span style="color:var(--success)">-₹' + (prem.grandTotal - annualTotal).toLocaleString("en-IN") + '</span></div>';
    bh += '<div class="breakdown-row grand-total-row"><span>' + (state.payMode === "monthly" ? "Monthly" : "Annual") + '</span><span>₹' + displayAmt.toLocaleString("en-IN") + displayLabel + '</span></div>';
    bh += '</div>';

    // Highlights
    var hlHtml = plan.highlights ? '<div class="card-highlights">' + plan.highlights.map(function (h) { return '<span class="highlight-tag">' + esc(h) + '</span>'; }).join("") + '</div>' : '';

    // Waiting
    var wh = '';
    if (plan.waitingPeriods) {
        var w = plan.waitingPeriods;
        wh = '<div class="card-section-title toggle-section" data-toggle="wait-' + plan.id + '">⏳ WAITING PERIODS <span class="toggle-arrow">▼</span></div>' +
            '<div class="collapsible-content" id="wait-' + plan.id + '" style="display:none"><div class="wait-periods">' +
            '<span class="wait-tag">Initial: ' + w.initial + 'd</span><span class="wait-tag">Specific: ' + w.specificDisease + 'mo</span>' +
            '<span class="wait-tag warn">PED: ' + w.ped + 'mo</span>' +
            (w.maternity ? '<span class="wait-tag">Maternity: ' + w.maternity + 'mo</span>' : '') + '</div></div>';
    }

    // Coverage (collapsed)
    var covHtml = '<div class="card-section-title toggle-section" data-toggle="cov-' + plan.id + '">✅ WHAT\'S COVERED (' + cov.length + ') <span class="toggle-arrow">▼</span></div>' +
        '<div class="collapsible-content" id="cov-' + plan.id + '" style="display:none"><ul class="feature-list">' + cov.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join("") + '</ul></div>';

    var ncovHtml = '<div class="card-section-title toggle-section" data-toggle="nc-' + plan.id + '">❌ NOT COVERED (' + ncov.length + ') <span class="toggle-arrow">▼</span></div>' +
        '<div class="collapsible-content" id="nc-' + plan.id + '" style="display:none"><ul class="feature-list not-covered">' + ncov.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join("") + '</ul></div>';

    // Add-ons (collapsed)
    var aoHtml = '';
    if (plan.addons && plan.addons.length > 0) {
        aoHtml = '<div class="card-section-title toggle-section" data-toggle="ao-' + plan.id + '">🧩 ADD-ONS (' + plan.addons.length + ') <span class="toggle-arrow">▼</span></div>' +
            '<div class="collapsible-content" id="ao-' + plan.id + '" style="display:none">';
        plan.addons.forEach(function (a) {
            aoHtml += '<div class="addon-item"><div class="addon-info"><div class="addon-name">' + esc(a.name) + '</div><div class="addon-desc">' + esc(a.desc) + '</div><div class="addon-why">💡 ' + esc(a.why) + '</div></div><div class="addon-price">+₹' + a.price.toLocaleString("en-IN") + '/yr</div></div>';
        });
        aoHtml += '</div>';
    }

    var card = document.createElement("div");
    card.className = "plan-card" + (sel ? " selected" : "");
    card.setAttribute("data-plan-id", plan.id);
    card.innerHTML =
        '<div class="plan-card-rank ' + rc + '">#' + (idx + 1) + '</div>' +
        '<div class="card-top" style="border-left:3px solid ' + plan.logoColor + '">' +
        '<div class="card-provider" style="color:' + plan.logoColor + '">' + esc(plan.provider) + '</div>' +
        '<div class="card-plan-name plan-name-link" data-plan-id="' + plan.id + '" title="Click to explore details & chat with AI">' + esc(plan.planName) + '</div>' + hlHtml +
        '<div class="card-metrics">' +
        '<div class="metric"><div class="metric-value ' + csrCls(plan.claimSettlementRatio) + '">' + plan.claimSettlementRatio + '%</div><div class="metric-label">CSR</div></div>' +
        '<div class="metric"><div class="metric-value ' + solCls(plan.solvencyRatio) + '">' + plan.solvencyRatio.toFixed(2) + '</div><div class="metric-label">Solvency</div></div>' +
        '<div class="metric"><div class="metric-value">' + (plan.networkHospitals / 1000).toFixed(1) + 'K</div><div class="metric-label">Hospitals</div></div></div></div>' +
        '<div class="card-body">' +
        '<div class="card-premium-section"><div class="premium-header"><span class="premium-label">Your Premium</span>' +
        '<span class="premium-value grand">₹' + displayAmt.toLocaleString("en-IN") + '<small>' + displayLabel + ' (incl. GST)</small></span></div>' +
        (td < 1 ? '<span class="tenure-discount-tag">🎉 ' + Math.round((1 - td) * 100) + '% off</span>' : '') +
        '<button class="breakdown-toggle" data-target="bd-' + plan.id + '">View Breakdown ↓</button>' +
        '<div class="hidden-features" id="bd-' + plan.id + '">' + bh + '</div></div>' +
        wh + covHtml + ncovHtml + aoHtml + '</div>' +
        '<div class="card-footer"><label class="select-checkbox"><input type="checkbox" class="plan-checkbox" data-plan-id="' + plan.id + '"' + (sel ? ' checked' : '') + '>Compare</label>' +
        '<button class="pd-action-btn brochure plan-explore-btn" data-plan-id="' + plan.id + '">💬 Explore & Chat</button>' +
        (plan.buyUrl ? '<a href="' + plan.buyUrl + '" target="_blank" class="buy-link">Provider →</a>' : '') + '</div>';
    return card;
}

function renderResults() {
    DOM.resultsGrid.innerHTML = "";
    if (state.filteredPlans.length === 0) { DOM.resultsGrid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px"><h3 style="color:var(--text-muted)">No plans match</h3></div>'; return; }
    state.filteredPlans.forEach(function (item, idx) { DOM.resultsGrid.appendChild(renderCard(item, idx)); });

    // Checkboxes
    DOM.resultsGrid.querySelectorAll(".plan-checkbox").forEach(function (cb) { cb.addEventListener("change", handleCB); });
    // Breakdown toggles
    DOM.resultsGrid.querySelectorAll(".breakdown-toggle").forEach(function (btn) {
        btn.addEventListener("click", function () {
            var t = document.getElementById(this.getAttribute("data-target"));
            t.classList.toggle("show"); this.textContent = t.classList.contains("show") ? "Hide ↑" : "View Breakdown ↓";
        });
    });
    // Collapsible sections (coverage, not covered, add-ons, waiting)
    DOM.resultsGrid.querySelectorAll(".toggle-section").forEach(function (btn) {
        btn.addEventListener("click", function () {
            var t = document.getElementById(this.getAttribute("data-toggle"));
            var arrow = this.querySelector(".toggle-arrow");
            if (t.style.display === "none") { t.style.display = "block"; arrow.textContent = "▲"; }
            else { t.style.display = "none"; arrow.textContent = "▼"; }
        });
    });
    // Plan name click → detail modal
    DOM.resultsGrid.querySelectorAll(".plan-name-link, .plan-explore-btn").forEach(function (el) {
        el.addEventListener("click", function (e) {
            e.preventDefault(); e.stopPropagation();
            var id = this.getAttribute("data-plan-id");
            openPlanDetail(id);
        });
    });
}

// ======================== SELECTION ========================
function handleCB(e) {
    var id = e.target.getAttribute("data-plan-id");
    if (e.target.checked) { if (state.selectedPlanIds.size >= state.maxSelections) { e.target.checked = false; alert("Max " + state.maxSelections); return; } state.selectedPlanIds.add(id); }
    else { state.selectedPlanIds.delete(id); }
    updateCards(); updateBar();
}
function updateCards() { DOM.resultsGrid.querySelectorAll(".plan-card").forEach(function (c) { c.classList.toggle("selected", state.selectedPlanIds.has(c.getAttribute("data-plan-id"))); }); }
function updateBar() {
    var c = state.selectedPlanIds.size; DOM.compareCount.textContent = c; DOM.compareBar.style.display = c >= 2 ? "block" : "none";
    var names = []; state.selectedPlanIds.forEach(function (id) { var i = state.filteredPlans.find(function (x) { return x.plan.id === id; }); if (i) names.push(i.plan.planName); });
    DOM.selectedNames.textContent = names.join(" vs ");
}

// ======================== PLAN DETAIL + AI CHAT ========================
function openPlanDetail(planId) {
    var item = state.filteredPlans.find(function (i) { return i.plan.id === planId; });
    if (!item) return;
    state.currentPlanDetail = item;
    var plan = item.plan, prem = item.premium;
    var td = tenureDiscounts[state.tenure] || 1;
    var annualTotal = Math.round(prem.grandTotal * td);

    DOM.pdPlanName.textContent = plan.planName;
    DOM.pdProvider.textContent = plan.provider;

    // Build info panel
    var h = '';
    // Premium
    h += '<div class="pd-premium-box"><div class="pd-premium-val">₹' + annualTotal.toLocaleString("en-IN") + '/yr</div><div class="pd-premium-sub">incl. 18% GST' + (td < 1 ? ' • ' + Math.round((1 - td) * 100) + '% tenure discount' : '') + '</div></div>';
    // Metrics
    h += '<div class="pd-metrics"><div class="pd-metric"><div class="pd-metric-val ' + csrCls(plan.claimSettlementRatio) + '">' + plan.claimSettlementRatio + '%</div><div class="pd-metric-label">CSR</div></div>' +
        '<div class="pd-metric"><div class="pd-metric-val ' + solCls(plan.solvencyRatio) + '">' + plan.solvencyRatio.toFixed(2) + '</div><div class="pd-metric-label">Solvency</div></div>' +
        '<div class="pd-metric"><div class="pd-metric-val">' + (plan.networkHospitals / 1000).toFixed(1) + 'K</div><div class="pd-metric-label">Hospitals</div></div>' +
        '<div class="pd-metric"><div class="pd-metric-val warn">' + plan.waitingPeriods.ped + 'mo</div><div class="pd-metric-label">PED Wait</div></div></div>';
    // Actions
    h += '<div class="pd-actions">';
    if (plan.buyUrl) h += '<a href="' + plan.buyUrl + '" target="_blank" class="pd-action-btn provider">🌐 Visit Provider & Download Brochure</a>';
    h += '<a href="https://www.google.com/search?q=' + encodeURIComponent(plan.planName + ' brochure PDF download') + '" target="_blank" class="pd-action-btn brochure">📄 Search Brochure PDF</a>';
    h += '</div>';

    // Collapsible sections
    function section(title, icon, id, content, open) {
        return '<div class="pd-section"><div class="pd-section-title' + (open ? '' : ' collapsed') + '" data-toggle-pd="' + id + '">' + icon + ' ' + title + ' <span class="toggle-arrow">▼</span></div>' +
            '<div class="pd-section-content' + (open ? '' : ' collapsed') + '" id="' + id + '">' + content + '</div></div>';
    }

    // Covered
    if (plan.detailedCoverage) {
        h += section('What\'s Covered (' + plan.detailedCoverage.covered.length + ')', '✅', 'pd-cov-' + plan.id,
            '<ul class="pd-list">' + plan.detailedCoverage.covered.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join("") + '</ul>', true);
        h += section('Not Covered (' + plan.detailedCoverage.notCovered.length + ')', '❌', 'pd-nc-' + plan.id,
            '<ul class="pd-list not-covered">' + plan.detailedCoverage.notCovered.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join("") + '</ul>', false);
        if (plan.detailedCoverage.claimProcess) {
            h += section('Claim Process', '📋', 'pd-cp-' + plan.id, '<p style="font-size:12px;color:var(--text-secondary)">' + esc(plan.detailedCoverage.claimProcess) + '</p>', false);
        }
    }
    // Waiting
    if (plan.waitingPeriods) {
        var wp = plan.waitingPeriods;
        h += section('Waiting Periods', '⏳', 'pd-wp-' + plan.id,
            '<div class="wait-periods"><span class="wait-tag">Initial: ' + wp.initial + 'd</span><span class="wait-tag">Specific Disease: ' + wp.specificDisease + 'mo</span><span class="wait-tag warn">PED: ' + wp.ped + 'mo</span>' +
            (wp.maternity ? '<span class="wait-tag">Maternity: ' + wp.maternity + 'mo</span>' : '') +
            (wp.moratorium ? '<span class="wait-tag">Moratorium: ' + wp.moratorium + 'yr</span>' : '') + '</div>', true);
    }
    // Addons
    if (plan.addons && plan.addons.length > 0) {
        var aoHtml = '';
        plan.addons.forEach(function (a) {
            aoHtml += '<div class="pd-addon"><div class="pd-addon-info"><div class="pd-addon-name">' + esc(a.name) + '</div><div class="pd-addon-desc">' + esc(a.desc) + '</div><div class="pd-addon-why">💡 ' + esc(a.why) + '</div></div><div class="pd-addon-price">+₹' + a.price.toLocaleString("en-IN") + '/yr</div></div>';
        });
        h += section('Available Add-Ons (' + plan.addons.length + ')', '🧩', 'pd-ao-' + plan.id, aoHtml, false);
    }
    // Fine print
    h += section('Fine Print & Policy Wording', '📝', 'pd-fp-' + plan.id, '<p style="font-size:12px;color:var(--warning);line-height:1.6">' + esc(plan.policyWordingText) + '</p>', false);

    DOM.pdInfoPanel.innerHTML = h;

    // Attach section toggles
    DOM.pdInfoPanel.querySelectorAll(".pd-section-title").forEach(function (t) {
        t.addEventListener("click", function () {
            var id = this.getAttribute("data-toggle-pd");
            var content = document.getElementById(id);
            this.classList.toggle("collapsed");
            content.classList.toggle("collapsed");
        });
    });

    // Reset chat
    DOM.chatMessages.innerHTML = '<div class="chat-msg ai-msg"><div class="chat-avatar">🤖</div><div class="chat-bubble">Hi! I\'m your AI advisor for <strong>' + esc(plan.planName) + '</strong>. Ask me anything — coverage details, exclusions, claim process, fine print, add-ons, or comparisons. I answer from official policy wordings.</div></div>';

    DOM.pdModal.style.display = "flex";
}

function closePlanDetail() { DOM.pdModal.style.display = "none"; state.currentPlanDetail = null; }

// Chat functionality
async function sendChatMessage() {
    var msg = DOM.chatInput.value.trim();
    if (!msg || !state.currentPlanDetail) return;
    DOM.chatInput.value = "";

    // User message
    var userDiv = document.createElement("div"); userDiv.className = "chat-msg user-msg";
    userDiv.innerHTML = '<div class="chat-avatar">👤</div><div class="chat-bubble">' + esc(msg) + '</div>';
    DOM.chatMessages.appendChild(userDiv);

    // Typing indicator
    var typingDiv = document.createElement("div"); typingDiv.className = "chat-msg ai-msg";
    typingDiv.innerHTML = '<div class="chat-avatar">🤖</div><div class="chat-typing"><span></span><span></span><span></span></div>';
    DOM.chatMessages.appendChild(typingDiv);
    DOM.chatMessages.scrollTop = DOM.chatMessages.scrollHeight;

    var plan = state.currentPlanDetail.plan;
    var prem = state.currentPlanDetail.premium;
    var context = "PLAN: " + plan.provider + " — " + plan.planName + "\n" +
        "Premium: ₹" + prem.grandTotal.toLocaleString("en-IN") + "/yr | CSR: " + plan.claimSettlementRatio + "% | Solvency: " + plan.solvencyRatio + "\n" +
        "COVERED: " + (plan.detailedCoverage ? plan.detailedCoverage.covered.join("; ") : "") + "\n" +
        "NOT COVERED: " + (plan.detailedCoverage ? plan.detailedCoverage.notCovered.join("; ") : "") + "\n" +
        "ADD-ONS: " + (plan.addons ? plan.addons.map(function (a) { return a.name + " ₹" + a.price + " - " + a.why; }).join("; ") : "None") + "\n" +
        "FINE PRINT: " + plan.policyWordingText + "\n" +
        "WAITING: Initial " + plan.waitingPeriods.initial + "d, Specific " + plan.waitingPeriods.specificDisease + "mo, PED " + plan.waitingPeriods.ped + "mo\n" +
        (plan.detailedCoverage && plan.detailedCoverage.claimProcess ? "CLAIM PROCESS: " + plan.detailedCoverage.claimProcess + "\n" : "") +
        "USER: " + state.selfMember.name + ", age " + state.selfMember.age + ", " + state.selfMember.gender + ", PEDs: " + (state.selfMember.peds.length > 0 ? state.selfMember.peds.join(", ") : "None");

    try {
        var r = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST", headers: { "Content-Type": "application/json", "Authorization": "Bearer " + GROQ_API_KEY },
            body: JSON.stringify({
                model: "llama-3.1-8b-instant",
                messages: [
                    { role: "system", content: "You are a helpful Indian Health Insurance advisor. Answer ONLY from the plan data provided. Be specific, mention ₹ amounts, and warn about gotchas. Keep answers concise (2-4 paragraphs max). If unsure, say so. Do NOT invent features not in the data." },
                    { role: "user", content: "PLAN DATA:\n" + context + "\n\nUSER QUESTION: " + msg }
                ],
                temperature: 0.3, max_tokens: 1000, stream: false
            })
        });
        var d = await r.json();
        typingDiv.remove();
        var aiDiv = document.createElement("div"); aiDiv.className = "chat-msg ai-msg";
        aiDiv.innerHTML = '<div class="chat-avatar">🤖</div><div class="chat-bubble">' + (d.choices ? d.choices[0].message.content.replace(/\n/g, '<br>') : 'Sorry, I couldn\'t process that.') + '</div>';
        DOM.chatMessages.appendChild(aiDiv);
    } catch (err) {
        typingDiv.remove();
        var errDiv = document.createElement("div"); errDiv.className = "chat-msg ai-msg";
        errDiv.innerHTML = '<div class="chat-avatar">🤖</div><div class="chat-bubble" style="color:var(--danger)">Sorry, something went wrong. Try again.</div>';
        DOM.chatMessages.appendChild(errDiv);
    }
    DOM.chatMessages.scrollTop = DOM.chatMessages.scrollHeight;
}

// ======================== AI COMPARISON ========================
function doCompare() {
    if (state.selectedPlanIds.size < 2) return;
    var items = []; state.selectedPlanIds.forEach(function (id) { var i = state.filteredPlans.find(function (x) { return x.plan.id === id; }); if (i) items.push(i); });
    DOM.aiModal.style.display = "flex"; DOM.aiLoading.style.display = "flex"; DOM.aiOutput.innerHTML = "";
    var info = "CUSTOMER: " + state.selfMember.name + ", age " + state.selfMember.age + ", " + state.selfMember.gender + "\n";
    state.allMembers.forEach(function (m) {
        info += "- " + m.name + " (" + m.relationship + ", " + m.age + "y, " + m.gender + ")";
        if (m.peds && m.peds.length > 0) { var pn = m.peds.map(function (id) { var p = PremiumEngine.pedList.find(function (x) { return x.id === id; }); return p ? p.name : id; }); info += " PEDs: " + pn.join(", "); }
        info += "\n";
    });
    info += "Pincode: " + state.pincode + " Zone " + PremiumEngine.getZone(state.pincode) + " | Cover: " + fmt(state.coverAmount) + "\n\n";
    var prompt = info + "Compare:\n\n";
    items.forEach(function (item, idx) {
        var p = item.plan, pr = item.premium;
        prompt += "PLAN " + (idx + 1) + ": " + p.provider + " — " + p.planName + " | ₹" + pr.grandTotal.toLocaleString("en-IN") + "/yr | CSR " + p.claimSettlementRatio + "% | Solvency " + p.solvencyRatio + " | " + p.networkHospitals + " hosp | PED " + p.waitingPeriods.ped + "mo\n";
        if (p.detailedCoverage) prompt += "COVERED: " + p.detailedCoverage.covered.join("; ") + "\nNOT: " + p.detailedCoverage.notCovered.join("; ") + "\n";
        if (p.addons) prompt += "ADDONS: " + p.addons.map(function (a) { return a.name + " ₹" + a.price; }).join(", ") + "\n";
        prompt += "FINE PRINT: " + p.policyWordingText + "\n\n";
    });
    callAPI(prompt, items);
}

async function callAPI(userPrompt, items) {
    var planNames = items.map(function(i) { return i.plan.planName; }).join(" vs ");
    var sys = `You are an EXPERT Indian Health Insurance Analyst, like those at PolicyBazaar or Ditto Insurance. You speak directly, use specific ₹ amounts, and never use filler words.

OUTPUT: Clean, well-structured HTML that is mobile-friendly (no wide tables). Use these exact inline-styled sections:

SECTION 1 — QUICK VERDICT (show first!)
<div style="background:linear-gradient(135deg,#064e3b,#065f46);border:2px solid #10b981;border-radius:12px;padding:20px;margin:16px 0">
<h3 style="color:#34d399;margin:0 0 8px">🏆 Winner: [Plan Name]</h3>
<p style="color:#a7f3d0;font-size:14px;margin:0">[1-line reason why this wins for THIS specific customer]</p>
</div>

SECTION 2 — SIDE-BY-SIDE COMPARISON
Use a clean <div> grid layout (NOT wide tables). For each plan, create a card:
<div style="background:#1e293b;border:1px solid #334155;border-radius:10px;padding:16px;margin:10px 0">
<h4 style="color:#f1f5f9;margin:0 0 10px">[Plan Name]</h4>
<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:10px">
  <span style="background:#0f172a;padding:4px 10px;border-radius:6px;font-size:12px;color:#94a3b8">CSR: X%</span>
  ...similar spans for premium, solvency, hospitals, PED wait
</div>
<p style="color:#cbd5e1;font-size:13px;margin:0">[2-line summary of what makes this plan good/bad for THIS customer]</p>
</div>

SECTION 3 — 🚨 HIDDEN TRAPS & FINE PRINT
For EACH plan, list 2-3 specific gotchas the customer WILL face. Be brutal:
<div style="border-left:4px solid #dc2626;background:#1a0505;padding:14px;margin:10px 0;border-radius:0 8px 8px 0">
<strong style="color:#fca5a5">⚠️ [Plan Name] — [Trap Title]</strong>
<p style="color:#fecaca;font-size:13px;margin:6px 0 0">Specific scenario: "If you [situation], you'll pay ₹X out of pocket because [reason]."</p>
</div>

SECTION 4 — ⛔ REAL CLAIM SCENARIOS
Create 3-4 realistic scenarios (e.g., "₹3L hospital bill for dengue", "₹8L heart surgery").
Show what EACH plan pays and what the customer pays out of pocket:
<div style="background:#0f172a;border:1px solid #1e293b;border-radius:10px;padding:14px;margin:10px 0">
<strong style="color:#e2e8f0;font-size:14px">Scenario: [Description]</strong>
<div style="margin-top:8px">
<div style="color:#10b981;font-size:13px">✅ [Plan A]: Pays ₹X — You pay ₹Y</div>
<div style="color:#ef4444;font-size:13px">❌ [Plan B]: Pays ₹X — You pay ₹Y because [reason]</div>
</div>
</div>

SECTION 5 — 💰 VALUE FOR MONEY
Show cost per ₹1 lakh cover. Compare what you GET per rupee spent. Be specific with numbers.

SECTION 6 — 🧩 ADD-ON ADVICE
For THIS customer specifically, which add-ons to buy and which to skip. Mention ₹ prices.

SECTION 7 — FINAL RECOMMENDATION
<div style="background:linear-gradient(135deg,#064e3b,#065f46);border:2px solid #10b981;border-radius:12px;padding:20px;margin:16px 0">
<h3 style="color:#34d399;margin:0 0 8px">✅ Buy: [Plan Name]</h3>
<p style="color:#a7f3d0;font-size:14px;margin:0 0 8px">Top 3 reasons why.</p>
</div>
<div style="background:#1a0505;border:2px solid #dc2626;border-radius:12px;padding:20px;margin:16px 0">
<h3 style="color:#fca5a5;margin:0 0 8px">❌ Avoid: [Plan Name]</h3>
<p style="color:#fecaca;font-size:14px;margin:0">Top 3 reasons why not.</p>
</div>

RULES:
- NEVER use filler like "In conclusion" or "It's important to note".
- ALL numbers must have ₹ symbol with Indian comma format.
- Be SPECIFIC to the customer's age, PEDs, city, and family.
- If a plan has room rent limits, co-payments, or sub-limits — SCREAM about it.
- Keep total output under 1500 words. Clarity > length.
- Do NOT use <table> tags — use div-based cards that work on mobile.`;
    try {
        var r = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST", headers: { "Content-Type": "application/json", "Authorization": "Bearer " + GROQ_API_KEY },
            body: JSON.stringify({ model: "llama-3.1-8b-instant", messages: [{ role: "system", content: sys }, { role: "user", content: userPrompt }], temperature: 0.3, max_tokens: 6000, top_p: 0.9, stream: false })
        });
        if (!r.ok) throw new Error("API " + r.status);
        var d = await r.json(), content = d.choices[0].message.content;
        content = content.replace(/^```html?\s*/i, '').replace(/```\s*$/i, '').trim();
        DOM.aiLoading.style.display = "none"; DOM.aiOutput.innerHTML = content;
    } catch (err) {
        DOM.aiLoading.style.display = "none";
        DOM.aiOutput.innerHTML = '<div style="text-align:center;padding:40px"><h3 style="color:#ef4444">⚠️ AI Analysis Failed</h3><p style="color:#94a3b8">' + esc(err.message) + '</p><p style="color:#64748b;font-size:12px">Try again or select different plans.</p></div>';
    }
}

function closeModal() { DOM.aiModal.style.display = "none"; DOM.aiLoading.style.display = "none"; DOM.aiOutput.innerHTML = ""; }

function handlePincode() {
    var p = DOM.selfPincode.value.trim();
    if (p.length === 6 && /^\d{6}$/.test(p)) {
        var city = PremiumEngine.getCityFromPincode(p), z = PremiumEngine.getZone(p);
        DOM.pincodeCity.textContent = (city || "") + " — " + (z === "A" ? "Metro" : z === "B" ? "Tier-1" : "Tier-2/Rural");
        DOM.pincodeCity.style.display = "block";
    } else { DOM.pincodeCity.style.display = "none"; }
}

// ======================== INIT ========================
(function init() {
    initDOM();
    showWelcome();
    DOM.welcomeDismiss.addEventListener("click", dismissWelcome);
    var today = new Date().toISOString().split("T")[0];
    DOM.selfDob.setAttribute("max", today);
    renderPEDs(DOM.selfPedSelector, []); renderPEDs(DOM.memberPedSelector, []);
    DOM.selfPincode.addEventListener("input", handlePincode);

    DOM.btnNext1.addEventListener("click", function () { if (validateStep1()) { renderFamily(); goToStep(2); } });
    DOM.btnBack2.addEventListener("click", function () { goToStep(1); });
    DOM.btnNext2.addEventListener("click", function () { renderSummary(); goToStep(3); });
    DOM.btnBack3.addEventListener("click", function () { renderFamily(); goToStep(2); });

    DOM.btnAddMember.addEventListener("click", function () {
        DOM.addMemberForm.style.display = "block"; DOM.btnAddMember.style.display = "none";
        DOM.memberRelation.value = ""; DOM.memberName.value = ""; DOM.memberDob.value = ""; DOM.memberGender.value = "";
        DOM.memberError.style.display = "none"; renderPEDs(DOM.memberPedSelector, []);
    });
    DOM.btnCancelMember.addEventListener("click", function () { DOM.addMemberForm.style.display = "none"; DOM.btnAddMember.style.display = ""; });
    DOM.btnSaveMember.addEventListener("click", function () { var m = validateMember(); if (m) { state.familyMembers.push(m); renderFamily(); DOM.addMemberForm.style.display = "none"; DOM.btnAddMember.style.display = ""; } });

    DOM.modeAnnual.addEventListener("click", function () { state.payMode = "annual"; DOM.modeAnnual.classList.add("active"); DOM.modeMonthly.classList.remove("active"); if (state.filteredPlans.length) renderResults(); });
    DOM.modeMonthly.addEventListener("click", function () { state.payMode = "monthly"; DOM.modeMonthly.classList.add("active"); DOM.modeAnnual.classList.remove("active"); if (state.filteredPlans.length) renderResults(); });

    DOM.searchBtn.addEventListener("click", function () {
        DOM.searchError.style.display = "none"; state.selectedPlanIds.clear(); updateBar();
        state.filteredPlans = filterCalc();
        // Silently send to Google Sheets
        sendToGoogleSheets(captureUserData());
        var city = PremiumEngine.getCityFromPincode(state.pincode), mc = state.allMembers.length;
        DOM.resultsTitle.textContent = state.filteredPlans.length + " Plans • " + mc + " Member" + (mc > 1 ? "s" : "") + " • " + (city || state.pincode) + " • " + fmt(state.coverAmount);
        DOM.tenureBadge.textContent = state.tenure + " Year" + (state.tenure > 1 ? "s" : "");
        DOM.modeBadge.textContent = state.payMode === "monthly" ? "Monthly EMI" : "Annual Pay";
        renderResults();
        DOM.resultsSection.style.display = "block";
        DOM.resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    DOM.compareBtn.addEventListener("click", doCompare);
    DOM.modalClose.addEventListener("click", closeModal);
    DOM.aiModal.addEventListener("click", function (e) { if (e.target === DOM.aiModal) closeModal(); });

    // Plan detail modal
    DOM.pdClose.addEventListener("click", closePlanDetail);
    DOM.pdModal.addEventListener("click", function (e) { if (e.target === DOM.pdModal) closePlanDetail(); });

    // Chat
    DOM.chatSend.addEventListener("click", sendChatMessage);
    DOM.chatInput.addEventListener("keydown", function (e) { if (e.key === "Enter") sendChatMessage(); });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            if (DOM.pdModal.style.display === "flex") closePlanDetail();
            else if (DOM.aiModal.style.display === "flex") closeModal();
        }
    });
})();
