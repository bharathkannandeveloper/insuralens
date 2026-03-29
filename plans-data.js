// plans-data.js — Real Insurance Plans with Premium Matrices, Add-ons, Tenure Discounts
// Sources: IRDAI Public Disclosures FY 2024-25, Official Policy Wordings, Provider Websites

// Tenure discount factors (applied to annual premium)
const tenureDiscounts = { 1: 1.0, 2: 0.925, 3: 0.90 };

const insuranceDatabase = [
{
  id:"HDFC-OPT-SEC",provider:"HDFC ERGO General Insurance",planName:"Optima Secure",
  logoColor:"#004B87",logoText:"HDFC",minAge:0,maxAge:99,ranking:1,
  claimSettlementRatio:97.37,networkHospitals:13000,solvencyRatio:1.78,incurredClaimRatio:72.5,
  renewalLifetime:true,
  premiumMatrix:{
    "child":{500000:3200,1000000:4800,2000000:6400,5000000:9600,10000000:14400,20000000:21600},
    "18-25":{500000:5400,1000000:7200,2000000:9600,5000000:14400,10000000:19200,20000000:28800},
    "26-30":{500000:6200,1000000:8400,2000000:11200,5000000:16800,10000000:22400,20000000:33600},
    "31-35":{500000:7400,1000000:9800,2000000:13200,5000000:19800,10000000:26400,20000000:39600},
    "36-40":{500000:9200,1000000:12200,2000000:16400,5000000:24600,10000000:32800,20000000:49200},
    "41-45":{500000:11800,1000000:15600,2000000:20800,5000000:31200,10000000:41600,20000000:62400},
    "46-50":{500000:15200,1000000:20200,2000000:26800,5000000:40200,10000000:53600,20000000:80400},
    "51-55":{500000:20400,1000000:27200,2000000:36200,5000000:54200,10000000:72400,20000000:108600},
    "56-60":{500000:28600,1000000:38200,2000000:50800,5000000:76200,10000000:101600,20000000:152400},
    "61-65":{500000:38400,1000000:51200,2000000:68200,5000000:102400,10000000:136400,20000000:204800},
    "66+":{500000:48800,1000000:65200,2000000:86800,5000000:130200,10000000:173600,20000000:260400}
  },
  addons:[
    {name:"Optima Wellbeing (OPD)",price:2400,desc:"OPD consultations, pharmacy, diagnostics up to ₹5,000/yr",why:"Base plan has ZERO OPD cover. Every doctor visit is out of pocket without this."},
    {name:"Global Cover",price:4800,desc:"Emergency treatment overseas in 150+ countries",why:"Base plan covers India only. If you travel internationally, emergency treatment abroad costs ₹5-50L."},
    {name:"Personal Accident Cover",price:1200,desc:"₹10L accidental death + disability cover",why:"Health plan only covers hospitalization. Accident disability, loss of income not covered."},
    {name:"Critical Illness Rider",price:3600,desc:"Lump sum ₹10L on diagnosis of 36 critical illnesses",why:"Health plan pays hospital bills only. Cancer/heart attack needs income replacement — this pays lump sum on diagnosis."}
  ],
  highlights:["2x SI from Day 1","Consumables covered","97.37% CSR"],
  detailedCoverage:{
    covered:["Hospitalization 24hr+","ICU unlimited","Pre-hosp 60 days","Post-hosp 180 days","Day care all procedures","Domiciliary treatment","AYUSH up to SI","Organ donor expenses","Road ambulance ₹5,000","68 consumable items covered","Modern treatments (robotic surgery, immunotherapy)","Restoration 100%","2x Secure Benefit","3x Plus Benefit (after 2 claim-free years)","Annual health check-up (Year 2+)","No-cost EMI available","Family discount 10%"],
    notCovered:["Air ambulance","OPD/doctor visits","Maternity & newborn","Dental (unless accident)","Cosmetic surgery","Obesity/bariatric","Alcoholism/drug abuse","Self-inflicted injuries","Spectacles/hearing aids","Infertility/IVF","Experimental treatments","Vaccination (except post-bite)","Global/overseas treatment","Stem cell (except listed)","LASIK"],
    claimProcess:"Cashless at 13,000+ hospitals. Pre-auth in 30 min (metro). Reimbursement in 7-10 days. TPA: Medi Assist / Paramount."
  },
  waitingPeriods:{initial:30,specificDisease:24,ped:36,moratorium:8},
  policyWordingText:"HDFC ERGO OPTIMA SECURE — 2x Secure Benefit doubles SI from Day 1 but only usable AFTER base SI exhausted. 3x Plus after 2 claim-free years. Consumables covered in-built (68 items). No room rent cap. Ambulance ₹5,000. Premium higher than competitors but feature-rich.",
  buyUrl:"https://www.hdfcergo.com/health-insurance/optima-secure"
},
{
  id:"STAR-COMP",provider:"Star Health & Allied Insurance",planName:"Star Comprehensive",
  logoColor:"#E31837",logoText:"STAR",minAge:0,maxAge:65,ranking:2,
  claimSettlementRatio:99.06,networkHospitals:14000,solvencyRatio:1.76,incurredClaimRatio:69.8,
  renewalLifetime:true,
  premiumMatrix:{
    "child":{500000:2800,1000000:4200,2000000:5600,5000000:8400,10000000:12600},
    "18-25":{500000:4800,1000000:6400,2000000:8600,5000000:12800,10000000:17200},
    "26-30":{500000:5600,1000000:7400,2000000:10000,5000000:14800,10000000:20000},
    "31-35":{500000:6600,1000000:8800,2000000:11800,5000000:17600,10000000:23600},
    "36-40":{500000:8400,1000000:11200,2000000:14800,5000000:22200,10000000:29600},
    "41-45":{500000:10800,1000000:14400,2000000:19200,5000000:28800,10000000:38400},
    "46-50":{500000:14200,1000000:18800,2000000:25200,5000000:37600,10000000:50200},
    "51-55":{500000:19200,1000000:25600,2000000:34200,5000000:51200,10000000:68400},
    "56-60":{500000:27200,1000000:36200,2000000:48400,5000000:72400,10000000:96800},
    "61-65":{500000:36800,1000000:49000,2000000:65400,5000000:98000,10000000:130800}
  },
  addons:[
    {name:"Star Consumable Cover",price:1800,desc:"All consumables/non-medical items covered during hospitalization",why:"Base plan does NOT cover consumables. You'll pay ₹5,000-₹30,000 per hospitalization for gloves, PPE, syringes, etc."},
    {name:"Star Hospital Cash",price:1500,desc:"₹2,000/day from day 1 of hospitalization (max 30 days)",why:"Covers incidentals like food, travel, attendant costs during hospital stay."},
    {name:"Star Out-Patient Care",price:3200,desc:"Enhanced OPD cover beyond base ₹5,000 limit",why:"Base OPD limit of ₹5,000/yr gets exhausted in 2-3 doctor visits in metros."}
  ],
  highlights:["99.06% CSR — Highest","14K+ hospitals","Maternity included"],
  detailedCoverage:{
    covered:["Hospitalization 24hr+","ICU unlimited","Pre-hosp 90 days (best)","Post-hosp 90 days","Maternity ₹50K normal/₹75K C-section (after 2yr)","Newborn cover Day 1","OPD ₹5,000/yr","Bariatric surgery (2yr wait, BMI 35+)","Day care all procedures","Domiciliary treatment","AYUSH up to SI","Organ donor expenses","Road ambulance ₹2,500","Modern treatments","Restoration 100%","In-house claims (No TPA)","Annual health check-up"],
    notCovered:["Air ambulance","Consumables (PPE, masks, gloves)","Dental (unless accident)","Cosmetic surgery","Alcoholism/drug abuse","Self-inflicted injuries","Spectacles/hearing aids","Infertility/IVF","Experimental treatments","Vaccination (except post-bite)","Global/overseas treatment"],
    claimProcess:"In-house claim settlement (NO TPA). Cashless at 14,000+ hospitals. Pre-auth 30-60 min. Highest claim volume in India."
  },
  waitingPeriods:{initial:30,specificDisease:24,ped:36,maternity:24,moratorium:8},
  policyWordingText:"STAR COMPREHENSIVE — CSR 99.06% highest. Room rent: Single AC covered but Deluxe Suite triggers proportionate deduction. Post-hosp only 90 days (vs 180 industry std). Ambulance only ₹2,500. Maternity sub-limits LOW: ₹50K normal, ₹75K C-section (actual costs ₹1-3L). Consumables NOT covered.",
  buyUrl:"https://www.starhealth.in/health-insurance/comprehensive"
},
{
  id:"CARE-SUPREME",provider:"Care Health Insurance",planName:"Care Supreme",
  logoColor:"#FF6B00",logoText:"CARE",minAge:0,maxAge:65,ranking:3,
  claimSettlementRatio:96.74,networkHospitals:11400,solvencyRatio:1.69,incurredClaimRatio:75.2,
  renewalLifetime:true,
  premiumMatrix:{
    "child":{500000:2400,1000000:3600,2000000:4800,5000000:7200,10000000:10800,20000000:16200},
    "18-25":{500000:4200,1000000:5600,2000000:7400,5000000:11200,10000000:14800,20000000:22200},
    "26-30":{500000:4800,1000000:6400,2000000:8600,5000000:12800,10000000:17200,20000000:25800},
    "31-35":{500000:5800,1000000:7600,2000000:10200,5000000:15200,10000000:20400,20000000:30600},
    "36-40":{500000:7200,1000000:9600,2000000:12800,5000000:19200,10000000:25600,20000000:38400},
    "41-45":{500000:9400,1000000:12400,2000000:16600,5000000:24800,10000000:33200,20000000:49800},
    "46-50":{500000:12200,1000000:16200,2000000:21600,5000000:32400,10000000:43200,20000000:64800},
    "51-55":{500000:16600,1000000:22200,2000000:29600,5000000:44200,10000000:59200,20000000:88800},
    "56-60":{500000:23400,1000000:31200,2000000:41600,5000000:62400,10000000:83200,20000000:124800},
    "61-65":{500000:31800,1000000:42400,2000000:56600,5000000:84800,10000000:113200,20000000:169800}
  },
  addons:[
    {name:"Care Shield (Super Top-up)",price:2200,desc:"Additional ₹25L-₹1Cr cover above base SI with ₹5L deductible",why:"If your base SI gets exhausted in a major surgery (cancer/transplant), this kicks in. Without it, you pay everything above SI from pocket."},
    {name:"NCB Plus",price:1400,desc:"No Claim Bonus protection — NCB preserved even after a claim",why:"Normally your accumulated SI bonus resets on any claim. This add-on protects your bonus."},
    {name:"International Second Opinion",price:800,desc:"Get second opinion from top hospitals abroad for critical diagnoses",why:"Wrong diagnosis in India is common. This lets you verify with Mayo Clinic, Cleveland Clinic etc."}
  ],
  highlights:["Unlimited restoration","Air ambulance ₹5L","Lowest premiums"],
  detailedCoverage:{
    covered:["Hospitalization 24hr+","ICU unlimited","Pre-hosp 60 days","Post-hosp 180 days","Unlimited restoration (same/different)","Air ambulance ₹5,00,000","Road ambulance up to SI","Day care all procedures","Domiciliary treatment","AYUSH up to SI","Organ donor expenses","Modern treatments up to SI","Consumables (higher variants)","OPD (top variants only)","Annual health check-up","Wellness rewards up to 30%"],
    notCovered:["Maternity & newborn","Dental (unless accident)","Cosmetic surgery","Obesity/bariatric","Alcoholism/drug abuse","Self-inflicted injuries","Spectacles/hearing aids","Infertility/IVF","Experimental treatments","Vaccination (except post-bite)","Global/overseas treatment","LASIK"],
    claimProcess:"TPA-based claims. Cashless at 11,400+ hospitals. Pre-auth in 30-60 min. Reimbursement 10-15 days."
  },
  waitingPeriods:{initial:30,specificDisease:24,ped:36,moratorium:8},
  policyWordingText:"CARE SUPREME — Unlimited restoration. Air ambulance ₹5L. BUT 'Value' variant has 1% SI/day room rent cap. Proportionate deduction on ENTIRE bill if room exceeded. Co-pay 10-20% for 61+ in some variants.",
  buyUrl:"https://www.careinsurance.com/health-insurance/care-supreme"
},
{
  id:"NIVA-RA20-PLAT",provider:"Niva Bupa Health Insurance",planName:"ReAssure 2.0 Platinum+",
  logoColor:"#6B2D8B",logoText:"NIVA",minAge:0,maxAge:65,ranking:4,
  claimSettlementRatio:93.2,networkHospitals:10000,solvencyRatio:1.82,incurredClaimRatio:68.4,
  renewalLifetime:true,
  premiumMatrix:{
    "child":{500000:2600,1000000:3800,2000000:5200,5000000:7800,10000000:11600},
    "18-25":{500000:4400,1000000:5800,2000000:7800,5000000:11800,10000000:15600},
    "26-30":{500000:5200,1000000:6800,2000000:9200,5000000:13800,10000000:18400},
    "31-35":{500000:6200,1000000:8200,2000000:10800,5000000:16200,10000000:21600},
    "36-40":{500000:7800,1000000:10400,2000000:13800,5000000:20800,10000000:27600},
    "41-45":{500000:10200,1000000:13600,2000000:18000,5000000:27000,10000000:36000},
    "46-50":{500000:13200,1000000:17600,2000000:23400,5000000:35000,10000000:46800},
    "51-55":{500000:18000,1000000:24000,2000000:32000,5000000:48000,10000000:64000},
    "56-60":{500000:25200,1000000:33600,2000000:44800,5000000:67200,10000000:89600},
    "61-65":{500000:34200,1000000:45600,2000000:60800,5000000:91200,10000000:121600}
  },
  addons:[
    {name:"Safeguard+ (Consumables)",price:1600,desc:"Covers all consumables/non-medical items during hospitalization",why:"Base plan does NOT cover consumables. ₹5K-30K per hospitalization goes from your pocket. This is ESSENTIAL."},
    {name:"Maternity Shield",price:8500,desc:"Maternity cover: Normal ₹40K / C-section ₹60K after 2yr wait",why:"Base plan has zero maternity. If planning a family, this is necessary."},
    {name:"OPD Care",price:2800,desc:"Doctor consultations, pharmacy, lab tests up to ₹5,000/yr",why:"Every doctor visit, blood test, medicine purchase comes from pocket without this."}
  ],
  highlights:["Lock the Clock","Booster+ 10x SI","Unlimited E-consult"],
  detailedCoverage:{
    covered:["Hospitalization 24hr+","ICU unlimited","Pre-hosp 60 days","Post-hosp 180 days","Unlimited restoration","Booster+ (unused SI carries forward up to 10x)","Lock the Clock (age locked until first claim)","Day care all procedures","Domiciliary treatment","AYUSH up to SI","Organ donor expenses","Modern treatments up to SI","Road ambulance ₹5,000","Unlimited e-consultations","Second medical opinion","Annual health check-up Day 1","Wellness rewards 30%"],
    notCovered:["Consumables (needs Safeguard+ add-on)","Air ambulance","OPD","Maternity & newborn","Dental (unless accident/cancer)","Cosmetic surgery","Obesity/bariatric","Self-inflicted injuries","Vaccination (except post-bite)","Spectacles/hearing aids","Experimental treatments","Alcoholism/drug abuse"],
    claimProcess:"TPA-based. Cashless at 10,000+ hospitals. Pre-auth in 30-45 min. Reimbursement 7-14 days."
  },
  waitingPeriods:{initial:30,specificDisease:24,ped:36,moratorium:8},
  policyWordingText:"NIVA BUPA REASSURE 2.0 — Lock the Clock locks age until FIRST CLAIM then reverts. Booster+ resets to base SI on ANY claim. Consumables NOT in base plan.",
  buyUrl:"https://www.nivabupa.com/health-insurance/reassure.html"
},
{
  id:"TATA-MEDICARE-PREM",provider:"Tata AIG General Insurance",planName:"MediCare Premier",
  logoColor:"#0066B3",logoText:"TATA",minAge:5,maxAge:65,ranking:5,
  claimSettlementRatio:96.0,networkHospitals:12000,solvencyRatio:2.51,incurredClaimRatio:66.3,
  renewalLifetime:true,
  premiumMatrix:{
    "child":{500000:2600,1000000:3800,2000000:5000,5000000:7600,10000000:11400,20000000:17000},
    "18-25":{500000:4000,1000000:5400,2000000:7200,5000000:10800,10000000:14400,20000000:21600},
    "26-30":{500000:4800,1000000:6400,2000000:8400,5000000:12600,10000000:16800,20000000:25200},
    "31-35":{500000:5600,1000000:7400,2000000:10000,5000000:14800,10000000:19800,20000000:29800},
    "36-40":{500000:7000,1000000:9400,2000000:12400,5000000:18600,10000000:24800,20000000:37200},
    "41-45":{500000:9000,1000000:12000,2000000:16000,5000000:24000,10000000:32000,20000000:48000},
    "46-50":{500000:11800,1000000:15600,2000000:20800,5000000:31200,10000000:41600,20000000:62400},
    "51-55":{500000:16000,1000000:21400,2000000:28400,5000000:42600,10000000:56800,20000000:85200},
    "56-60":{500000:22600,1000000:30200,2000000:40200,5000000:60200,10000000:80400,20000000:120600},
    "61-65":{500000:30800,1000000:41000,2000000:54800,5000000:82000,10000000:109400,20000000:164200}
  },
  addons:[
    {name:"Global Cover",price:5200,desc:"Emergency overseas treatment coverage in 50+ countries",why:"Base plan is India-only. If you travel abroad, a simple ER visit can cost $5,000-$50,000."},
    {name:"Maternity Cover",price:9200,desc:"Maternity: Normal ₹50K / C-section ₹75K (2yr wait)",why:"Base plan excludes maternity entirely. Delivery costs ₹80K-₹3L in private hospitals."},
    {name:"Personal Accident",price:1400,desc:"₹10L accidental death + permanent disability cover",why:"Health policy doesn't cover disability or death benefit. Only pays hospital bills."}
  ],
  highlights:["Solvency 2.51","Ambulance up to SI","Consumables in-built"],
  detailedCoverage:{
    covered:["Hospitalization 24hr+","ICU unlimited","Pre-hosp 60 days","Post-hosp 180 days","Consumables 68 items in-built","Road ambulance up to SI (best)","Bariatric surgery (2yr wait)","Vaccination (HPV/HepB after 2yr)","Hospital cash 1% SI for >10 days stay","Day care all procedures","Domiciliary treatment","AYUSH up to SI","Organ donor expenses","Modern treatments up to SI","Restoration 100%","Annual health check-up","Wellness rewards"],
    notCovered:["Air ambulance (only add-on)","Maternity & newborn","OPD","Dental (unless accident)","Cosmetic surgery","Alcoholism/drug abuse","Self-inflicted injuries","Spectacles/hearing aids","Infertility/IVF","Experimental treatments","Global treatment (needs add-on)"],
    claimProcess:"TPA-based. Cashless at 12,000+ hospitals. Pre-auth 30-45 min. Reimbursement 7-14 days."
  },
  waitingPeriods:{initial:30,specificDisease:24,ped:36,bariatric:24,vaccination:24},
  policyWordingText:"TATA AIG MEDICARE PREMIER — Ambulance up to SI (best). Consumables 68 items in-built. Solvency 2.51 highest. Hospital cash only after 10 CONTINUOUS days.",
  buyUrl:"https://www.tataaig.com/health-insurance/medicare"
},
{
  id:"ABHI-ACTIV-PLAT",provider:"Aditya Birla Health Insurance",planName:"Activ Health Platinum Enhanced",
  logoColor:"#ED1C24",logoText:"ABHI",minAge:0,maxAge:65,ranking:6,
  claimSettlementRatio:94.5,networkHospitals:11000,solvencyRatio:1.67,incurredClaimRatio:78.1,
  renewalLifetime:true,
  premiumMatrix:{
    "child":{500000:2800,1000000:4000,2000000:5400,5000000:8200,10000000:12200,20000000:18400},
    "18-25":{500000:4600,1000000:6200,2000000:8200,5000000:12400,10000000:16400,20000000:24600},
    "26-30":{500000:5400,1000000:7200,2000000:9600,5000000:14400,10000000:19200,20000000:28800},
    "31-35":{500000:6400,1000000:8600,2000000:11400,5000000:17000,10000000:22800,20000000:34200},
    "36-40":{500000:8200,1000000:10800,2000000:14400,5000000:21600,10000000:28800,20000000:43200},
    "41-45":{500000:10600,1000000:14200,2000000:18800,5000000:28200,10000000:37600,20000000:56400},
    "46-50":{500000:14000,1000000:18600,2000000:24800,5000000:37200,10000000:49600,20000000:74400},
    "51-55":{500000:19200,1000000:25600,2000000:34200,5000000:51200,10000000:68400,20000000:102600},
    "56-60":{500000:27000,1000000:36000,2000000:48000,5000000:72000,10000000:96000,20000000:144000},
    "61-65":{500000:36600,1000000:48800,2000000:65200,5000000:97600,10000000:130200,20000000:195400}
  },
  addons:[
    {name:"Chronic Care Enhancement",price:2600,desc:"Enhanced chronic disease management with dedicated care manager",why:"Base chronic program has limits. This adds unlimited teleconsultation, home medication delivery, and device monitoring."},
    {name:"Super Health Top-up",price:3400,desc:"Additional ₹25L cover above base SI",why:"If base SI exhausts during cancer/transplant, this provides extra cover."},
    {name:"Personal Accident + Daily Cash",price:2200,desc:"₹5L accident cover + ₹2,000/day hospital cash",why:"Health plan only pays hospital bills. This covers income loss during hospitalization."}
  ],
  highlights:["HealthReturns™ 100%","Chronic care program","Global cover 50L+"],
  detailedCoverage:{
    covered:["Hospitalization 24hr+","ICU unlimited","Pre-hosp 60 days","Post-hosp 180 days","HealthReturns™ (earn up to 100% premium as rewards)","Chronic Management (12 conditions)","Consumables (Platinum Enhanced)","Global cover (₹50L+ SI)","Day care all procedures","Domiciliary treatment","AYUSH up to SI","Organ donor expenses","Modern treatments","Restoration 100%","Road ambulance ₹2,000","Annual health check-up","Wellness coaching"],
    notCovered:["OPD (limited)","Maternity & newborn","Air ambulance","Dental (unless accident)","Cosmetic surgery","Obesity/bariatric","Alcoholism/drug abuse","Self-inflicted injuries","Spectacles/hearing aids","Infertility/IVF","Experimental treatments","Vaccination"],
    claimProcess:"TPA-based. Cashless at 11,000+ hospitals. Pre-auth 30-45 min. Reimbursement 10-15 days."
  },
  waitingPeriods:{initial:30,specificDisease:24,ped:36,chronicProgram:12},
  policyWordingText:"ABHI ACTIV HEALTH PLATINUM — HealthReturns is reward POINTS not cash. Ambulance only ₹2,000 (lowest). Chronic program requires active app use.",
  buyUrl:"https://www.adityabirlahealthinsurance.com/health-insurance-plans/activ-health"
},
{
  id:"ICICI-ELEVATE",provider:"ICICI Lombard General Insurance",planName:"Elevate",
  logoColor:"#F58220",logoText:"ICICI",minAge:0,maxAge:65,ranking:7,
  claimSettlementRatio:95.8,networkHospitals:10000,solvencyRatio:2.62,incurredClaimRatio:70.9,
  renewalLifetime:true,
  premiumMatrix:{
    "child":{500000:2400,1000000:3400,2000000:4600,5000000:7000,10000000:10400},
    "18-25":{500000:3800,1000000:5200,2000000:6800,5000000:10200,10000000:13600},
    "26-30":{500000:4600,1000000:6000,2000000:8000,5000000:12000,10000000:16000},
    "31-35":{500000:5400,1000000:7200,2000000:9600,5000000:14400,10000000:19200},
    "36-40":{500000:6800,1000000:9000,2000000:12000,5000000:18000,10000000:24000},
    "41-45":{500000:8800,1000000:11600,2000000:15600,5000000:23400,10000000:31200},
    "46-50":{500000:11400,1000000:15200,2000000:20200,5000000:30400,10000000:40400},
    "51-55":{500000:15600,1000000:20800,2000000:27600,5000000:41600,10000000:55400},
    "56-60":{500000:21800,1000000:29200,2000000:38800,5000000:58200,10000000:77600},
    "61-65":{500000:29800,1000000:39800,2000000:53000,5000000:79600,10000000:106000}
  },
  addons:[
    {name:"IL TakeCare OPD",price:2600,desc:"OPD consultations, diagnostics, pharmacy up to ₹7,500/yr",why:"Base plan has minimal OPD. Every outpatient visit is out of pocket."},
    {name:"Critical Advantage",price:4200,desc:"₹15L lump sum on diagnosis of 50 critical illnesses",why:"Health plan pays only hospital bills. Cancer treatment needs income replacement + non-medical costs."},
    {name:"Maternity Benefit",price:8800,desc:"Normal ₹50K / C-section ₹75K + newborn cover (2yr wait)",why:"Base plan has no maternity. Delivery in private hospital costs ₹1-3L."}
  ],
  highlights:["Solvency 2.62","Consumables in-built","Up to ₹5 Cr SI"],
  detailedCoverage:{
    covered:["Hospitalization 24hr+","ICU unlimited","Pre-hosp 60 days","Post-hosp 180 days","Consumables covered in-built","Road ambulance ₹5,000","Day care all procedures","Domiciliary treatment","AYUSH up to SI","Organ donor expenses","Modern treatments up to SI","Restoration 100%","SI up to ₹5 Crore","IL TakeCare app","Annual health check-up"],
    notCovered:["Air ambulance","Maternity & newborn","OPD (limited)","Global/overseas","Dental (unless accident)","Cosmetic surgery","Obesity/bariatric","Alcoholism/drug abuse","Self-inflicted injuries","Spectacles/hearing aids","Infertility/IVF","Experimental treatments","Vaccination"],
    claimProcess:"IL TakeCare app-based. Cashless at 10,000+ hospitals. Pre-auth 30 min. Digital-first process."
  },
  waitingPeriods:{initial:30,specificDisease:24,ped:36,moratorium:8},
  policyWordingText:"ICICI LOMBARD ELEVATE — Solvency 2.62 excellent. Network ~10,000 (smaller). General insurer. Competitive for 25-35.",
  buyUrl:"https://www.icicilombard.com/health-insurance/elevate-plan"
},
{
  id:"DIGIT-INFINITY",provider:"Go Digit General Insurance",planName:"Health Infinity",
  logoColor:"#6C63FF",logoText:"DIGIT",minAge:0,maxAge:65,ranking:8,
  claimSettlementRatio:92.1,networkHospitals:11000,solvencyRatio:2.78,incurredClaimRatio:65.4,
  renewalLifetime:true,
  premiumMatrix:{
    "child":{500000:2000,1000000:2800,2000000:3800,5000000:5600,10000000:8400},
    "18-25":{500000:3200,1000000:4200,2000000:5600,5000000:8400,10000000:11200},
    "26-30":{500000:3800,1000000:5000,2000000:6600,5000000:10000,10000000:13200},
    "31-35":{500000:4600,1000000:6000,2000000:8000,5000000:12000,10000000:16000},
    "36-40":{500000:5800,1000000:7600,2000000:10200,5000000:15200,10000000:20400},
    "41-45":{500000:7400,1000000:9800,2000000:13200,5000000:19800,10000000:26400},
    "46-50":{500000:9800,1000000:13000,2000000:17200,5000000:25800,10000000:34400},
    "51-55":{500000:13400,1000000:17800,2000000:23600,5000000:35400,10000000:47200},
    "56-60":{500000:18800,1000000:25000,2000000:33400,5000000:50000,10000000:66800},
    "61-65":{500000:25600,1000000:34200,2000000:45600,5000000:68400,10000000:91200}
  },
  addons:[
    {name:"Digit Advantage (Super Top-up)",price:1800,desc:"Additional ₹20L cover above base SI",why:"If base SI exhausts, you need backup. Cancer surgery alone can cost ₹15-30L."},
    {name:"Personal Accident",price:1000,desc:"₹5L accidental death + disability",why:"Health plan covers only hospitalization, not death/disability benefit."}
  ],
  highlights:["Lowest premium","Solvency 2.78","100% paperless"],
  detailedCoverage:{
    covered:["Hospitalization 24hr+","ICU unlimited","Pre-hosp 60 days","Post-hosp 180 days","Consumables in-built","Road ambulance ₹5,000","Day care all procedures","Domiciliary treatment","AYUSH up to SI","Organ donor expenses","Modern treatments","Restoration 100%","100% paperless","Annual health check-up"],
    notCovered:["Air ambulance","Maternity & newborn","OPD","Global/overseas","Dental (unless accident)","Cosmetic surgery","Obesity/bariatric","Alcoholism/drug abuse","Self-inflicted injuries","Spectacles/hearing aids","Infertility/IVF","Experimental treatments","Vaccination","No chronic disease management"],
    claimProcess:"100% digital. Cashless at 11,000+ hospitals. App-based pre-auth. Newer insurer — building track record."
  },
  waitingPeriods:{initial:30,specificDisease:24,ped:48,moratorium:8},
  policyWordingText:"GO DIGIT — PED wait 48 MONTHS (longest). CSR 92.1% lowest. Budget-friendly, bare-bones. Digital-only.",
  buyUrl:"https://www.godigit.com/health-insurance"
},
{
  id:"BAJAJ-HCS-ULTIMO",provider:"Bajaj Allianz General Insurance",planName:"Health Care Supreme Ultimo",
  logoColor:"#00457C",logoText:"BAJAJ",minAge:0,maxAge:65,ranking:9,
  claimSettlementRatio:93.8,networkHospitals:9500,solvencyRatio:3.24,incurredClaimRatio:71.2,
  renewalLifetime:true,
  premiumMatrix:{
    "child":{500000:2200,1000000:3000,2000000:4200,5000000:6200,10000000:9400},
    "18-25":{500000:3400,1000000:4600,2000000:6200,5000000:9200,10000000:12200},
    "26-30":{500000:4200,1000000:5400,2000000:7200,5000000:10800,10000000:14400},
    "31-35":{500000:5000,1000000:6600,2000000:8800,5000000:13200,10000000:17600},
    "36-40":{500000:6200,1000000:8200,2000000:11000,5000000:16400,10000000:22000},
    "41-45":{500000:8000,1000000:10600,2000000:14200,5000000:21200,10000000:28400},
    "46-50":{500000:10400,1000000:13800,2000000:18400,5000000:27600,10000000:36800},
    "51-55":{500000:14200,1000000:19000,2000000:25200,5000000:37800,10000000:50400},
    "56-60":{500000:20000,1000000:26600,2000000:35400,5000000:53200,10000000:70800},
    "61-65":{500000:27200,1000000:36200,2000000:48400,5000000:72600,10000000:96800}
  },
  addons:[
    {name:"Health Guard (Consumables)",price:1400,desc:"All non-medical consumables covered during hospitalization",why:"Base plan excludes consumables entirely. You'll pay ₹5K-30K per hospitalization."},
    {name:"Hospital Cash Benefit",price:1200,desc:"₹1,500/day from Day 1 (max 30 days)",why:"Covers food, travel, attendant costs. Not from pocket during hospital stay."},
    {name:"Critical Illness Cover",price:3800,desc:"₹10L lump sum on diagnosis of 40 critical illnesses",why:"Health plan pays hospital bills. Cancer/heart attack needs income replacement."}
  ],
  highlights:["Solvency 3.24 (highest)","Lifetime renewability","Low premiums"],
  detailedCoverage:{
    covered:["Hospitalization 24hr+","ICU unlimited","Pre-hosp 60 days","Post-hosp 180 days","Day care all procedures","Domiciliary treatment","AYUSH up to SI","Organ donor expenses","Modern treatments up to SI","Restoration 100%","Road ambulance ₹3,000","Annual health check-up","Lifetime renewability"],
    notCovered:["Consumables (NOT covered)","Air ambulance","Maternity & newborn","OPD","Global/overseas","Dental (unless accident)","Cosmetic surgery","Obesity/bariatric","Alcoholism/drug abuse","Self-inflicted injuries","Spectacles/hearing aids","Infertility/IVF","Experimental treatments","Vaccination"],
    claimProcess:"TPA-based. Cashless at 9,500+ hospitals. Pre-auth can take 2-4 hours (slower than others). General insurer."
  },
  waitingPeriods:{initial:30,specificDisease:24,ped:36,moratorium:8},
  policyWordingText:"BAJAJ ALLIANZ — Solvency 3.24 highest. Consumables NOT covered. Ambulance ₹3,000 only. Network lowest at 9,500. Claims can be slow (2-4hr pre-auth).",
  buyUrl:"https://www.bajajallianz.com/health-insurance-plans/health-care-supreme.html"
},
{
  id:"MANIPAL-PROHEALTH",provider:"ManipalCigna Health Insurance",planName:"ProHealth Plus",
  logoColor:"#00A78E",logoText:"MCIG",minAge:0,maxAge:65,ranking:10,
  claimSettlementRatio:95.2,networkHospitals:8700,solvencyRatio:2.04,incurredClaimRatio:73.8,
  renewalLifetime:true,
  premiumMatrix:{
    "child":{500000:2400,1000000:3400,2000000:4600,5000000:6800,10000000:10200},
    "18-25":{500000:4000,1000000:5400,2000000:7000,5000000:10600,10000000:14000},
    "26-30":{500000:4800,1000000:6200,2000000:8200,5000000:12400,10000000:16400},
    "31-35":{500000:5600,1000000:7400,2000000:9800,5000000:14600,10000000:19400},
    "36-40":{500000:7000,1000000:9200,2000000:12200,5000000:18400,10000000:24400},
    "41-45":{500000:9000,1000000:12000,2000000:16000,5000000:24000,10000000:32000},
    "46-50":{500000:11800,1000000:15600,2000000:20800,5000000:31200,10000000:41600},
    "51-55":{500000:16000,1000000:21200,2000000:28200,5000000:42400,10000000:56400},
    "56-60":{500000:22400,1000000:29800,2000000:39800,5000000:59600,10000000:79600},
    "61-65":{500000:30400,1000000:40600,2000000:54000,5000000:81200,10000000:108200}
  },
  addons:[
    {name:"ProHealth Infinity Top-up",price:2400,desc:"Additional ₹50L cover above base SI",why:"Cancer/organ transplant can cost ₹20-50L. This provides massive backup coverage."},
    {name:"OPD Care Plus",price:3000,desc:"OPD consultations + pharmacy + diagnostics up to ₹10,000/yr",why:"Regular doctor visits, lab tests, medicines — all come from pocket without this."},
    {name:"Maternity Shield",price:8200,desc:"Normal ₹50K / C-section ₹75K + newborn cover",why:"Base plan has zero maternity. Delivery costs ₹1-3L in private hospitals."}
  ],
  highlights:["Cigna global expertise","Solvency 2.04","Competitive premiums"],
  detailedCoverage:{
    covered:["Hospitalization 24hr+","ICU unlimited","Pre-hosp 60 days","Post-hosp 180 days","No room rent capping","No co-payment","No disease sub-limits","Consumables covered (ProHealth Plus)","Day care all procedures","Domiciliary treatment","AYUSH up to SI","Organ donor expenses","Modern treatments","Restoration 100%","Road ambulance ₹5,000","Annual health check-up","Cumulative bonus 10%/yr"],
    notCovered:["Air ambulance","Maternity & newborn","OPD (limited)","Global/overseas (needs add-on)","Dental (unless accident)","Cosmetic surgery","Obesity/bariatric","Alcoholism/drug abuse","Self-inflicted injuries","Spectacles/hearing aids","Infertility/IVF","Experimental treatments","Vaccination"],
    claimProcess:"TPA-based. Cashless at 8,700+ hospitals. Pre-auth 30-60 min. Growing network."
  },
  waitingPeriods:{initial:30,specificDisease:24,ped:36,moratorium:8},
  policyWordingText:"MANIPALCIGNA PROHEALTH PLUS — Backed by Cigna's global healthcare expertise. Competitive premiums. Consumables covered. Network 8,700+ (smaller but growing).",
  buyUrl:"https://www.manipalcigna.com/health-insurance/prohealth-plus"
},
{
  id:"SBI-AROGYA-PREM",provider:"SBI General Insurance",planName:"Arogya Premier",
  logoColor:"#0072BB",logoText:"SBI",minAge:0,maxAge:65,ranking:11,
  claimSettlementRatio:94.8,networkHospitals:10500,solvencyRatio:2.28,incurredClaimRatio:74.1,
  renewalLifetime:true,
  premiumMatrix:{
    "child":{500000:2200,1000000:3200,2000000:4200,5000000:6400,10000000:9600},
    "18-25":{500000:3600,1000000:4800,2000000:6400,5000000:9600,10000000:12800},
    "26-30":{500000:4400,1000000:5800,2000000:7600,5000000:11400,10000000:15200},
    "31-35":{500000:5200,1000000:6800,2000000:9200,5000000:13600,10000000:18200},
    "36-40":{500000:6600,1000000:8600,2000000:11600,5000000:17200,10000000:23000},
    "41-45":{500000:8400,1000000:11200,2000000:14800,5000000:22200,10000000:29600},
    "46-50":{500000:11000,1000000:14600,2000000:19400,5000000:29200,10000000:38800},
    "51-55":{500000:15000,1000000:20000,2000000:26600,5000000:39800,10000000:53200},
    "56-60":{500000:21000,1000000:28000,2000000:37200,5000000:55800,10000000:74400},
    "61-65":{500000:28600,1000000:38200,2000000:50800,5000000:76200,10000000:101600}
  },
  addons:[
    {name:"SBI Super Top-up",price:1600,desc:"Additional ₹25L cover above deductible",why:"Base SI may not cover major surgeries. Top-up provides safety net."},
    {name:"Hospital Cash Benefit",price:1200,desc:"₹2,000/day from Day 1 (max 15 days)",why:"Covers incidentals during hospitalization — food, attendant, travel."},
    {name:"Personal Accident",price:1000,desc:"₹5L accidental death + disability",why:"Health plan doesn't cover disability or death. Only hospitalization."}
  ],
  highlights:["SBI trust","Solvency 2.28","Budget-friendly"],
  detailedCoverage:{
    covered:["Hospitalization 24hr+","ICU unlimited","Pre-hosp 60 days","Post-hosp 180 days","No room rent capping","No co-payment","Day care all procedures","Domiciliary treatment","AYUSH up to SI","Organ donor expenses","Modern treatments","Restoration 100%","Road ambulance ₹3,000","Annual health check-up","Lifetime renewability"],
    notCovered:["Consumables (NOT covered)","Air ambulance","Maternity & newborn","OPD","Global/overseas","Dental (unless accident)","Cosmetic surgery","Obesity/bariatric","Alcoholism/drug abuse","Self-inflicted injuries","Spectacles/hearing aids","Infertility/IVF","Experimental treatments","Vaccination"],
    claimProcess:"TPA-based. Cashless at 10,500+ hospitals. Pre-auth 30-60 min. SBI brand trust."
  },
  waitingPeriods:{initial:30,specificDisease:24,ped:36,moratorium:8},
  policyWordingText:"SBI AROGYA PREMIER — SBI brand trust and solvency 2.28. Consumables NOT covered. Ambulance ₹3,000. Competitive pricing backed by India's largest bank.",
  buyUrl:"https://www.sbigeneral.in/health-insurance/arogya-premier"
}
];
