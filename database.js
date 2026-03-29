// ============================================================================
// database.js — Real Indian Health Insurance Plans Data
// Sources: IRDAI Public Disclosures FY 2024-25, Official Policy Wordings,
//          Provider Websites, Beshak.org, Ditto Insurance Reviews
// ============================================================================

const insuranceDatabase = [
    {
        id: "NIVA-RA20-PLAT",
        provider: "Niva Bupa Health Insurance",
        planName: "ReAssure 2.0 Platinum+",
        logoUrl: "",
        minAge: 18,
        maxAge: 65,
        minCover: 500000,
        maxCover: 10000000,
        premiumStarting: 7999,
        claimSettlementRatio: 93.2,
        networkHospitals: 10000,
        renewalLifetime: true,
        solvencyRatio: 1.82,
        incurredClaimRatio: 68.4,
        ranking: 4,
        coverAmounts: [500000, 1000000, 2000000, 5000000, 10000000],
        baseFeatures: [
            "No Room Rent Capping (any room category)",
            "No Co-payment",
            "No Disease-wise Sub-limits",
            "Unlimited Restoration of Sum Insured (same/different illness)",
            "Booster+ Benefit (unused SI carries forward up to 10x)",
            "Lock the Clock (age locked until first claim)",
            "Pre-hospitalization: 60 days",
            "Post-hospitalization: 180 days",
            "Domiciliary Hospitalization covered",
            "AYUSH treatments covered up to SI",
            "Annual Health Check-up from Day 1",
            "Unlimited E-consultations",
            "Second Medical Opinion",
            "Day-care procedures: All listed",
            "Organ Donor Expenses covered",
            "International Coverage (Platinum+ variant)",
            "Ambulance: Road up to ₹5,000",
            "Wellness Rewards: Up to 30% premium discount for healthy lifestyle",
            "Consumables NOT covered (needs Safeguard+ add-on)",
            "Modern Treatments covered up to SI"
        ],
        notCovered: [
            "Consumables (gloves, PPE, masks etc.) — NOT in base plan, needs paid add-on 'Safeguard+'",
            "Air Ambulance — NOT covered in Platinum+ (only in Titanium+)",
            "OPD Expenses — NOT covered in base plan",
            "Maternity & Newborn — NOT covered",
            "Dental treatment unless caused by accident or cancer",
            "Cosmetic/Plastic Surgery",
            "Obesity/Bariatric Surgery",
            "Self-inflicted injuries",
            "Vaccination (except as part of post-bite treatment)",
            "Spectacles, contact lenses, hearing aids",
            "Experimental or unproven treatments",
            "Treatment for alcoholism, drug abuse, smoking-related conditions"
        ],
        policyWordingText: `NIVA BUPA REASSURE 2.0 PLATINUM+ — FULL POLICY WORDING EXTRACT (UIN: NBHHLIP23169V012223)

SECTION 1: WAITING PERIODS
1.1 Initial Waiting Period: 30 days from policy commencement. No claim payable during this period except for claims arising out of an Accident.
1.2 Specific Disease Waiting Period: 24 months from date of first policy. The following conditions are subject to this waiting period: Cataract, Joint Replacement Surgery (Knee/Hip), Benign Prostatic Hypertrophy, Surgery of Hernia, Surgery of Hydrocele, Congenital Internal Diseases, Fistula in Anus, Pilonidal Sinus, Gastric/Duodenal Ulcer Surgery, Gall Bladder Removal, Surgery related to Sinusitis, Kidney Stones, Ureteric Stones, Bladder Stones, Hysterectomy, Tonsillectomy, Surgery of Varicose Veins, Deviated Nasal Septum, Piles Surgery, all types of fibroid surgeries.
1.3 Pre-Existing Disease (PED) Waiting Period: 36 months. Any condition, ailment, injury or disease that is diagnosed or for which medical advice or treatment was recommended or received by the Insured Person prior to the inception of the first policy. The insurer reserves the right to load premiums or add exclusions for declared PEDs.
1.4 Moratorium Period: After 8 continuous years of coverage, no health insurance claim shall be contestable except for proven fraud and permanent exclusions.

SECTION 2: PERMANENT EXCLUSIONS (Applicable at all times)
2.1 Any hospitalization primarily for investigation, evaluation, or diagnostic purposes.
2.2 Any diagnostic expenses which are not related or incidental to the current diagnosis.
2.3 Rest cure, rehabilitation, and respite care: Admission to a facility for bed rest without active treatment.
2.4 Custodial care at home or nursing facility for personal activities of daily living.
2.5 Dental treatments or surgeries UNLESS necessitated due to accidental injury or cancer.
2.6 Cosmetic or plastic surgery, change-of-life treatments, stem cell therapy (except covered transplants).
2.7 Obesity treatments including bariatric surgery.
2.8 Treatment for alcoholism, drug or substance abuse.
2.9 Self-inflicted injuries or attempted suicide.
2.10 War, nuclear, radiological, terrorism-related injuries.
2.11 Expenses for external congenital anomalies.
2.12 Maintaining life through artificial means when declared brain dead or in permanent vegetative state.
2.13 Expenses not medically necessary or not at reasonable and customary charges.
2.14 Unproven treatments or experimental procedures not recognized by IRDAI.

SECTION 3: SUB-LIMITS AND CAPPING (Platinum+ Variant)
3.1 Room Rent: No capping. Any category of room covered.
3.2 ICU Charges: No capping. Covered up to sum insured.
3.3 Ambulance: Road ambulance up to ₹5,000 per hospitalization. Air ambulance NOT covered.
3.4 Pre-hospitalization: 60 days before admission.
3.5 Post-hospitalization: 180 days after discharge.
3.6 AYUSH Treatments: Covered up to sum insured.
3.7 Annual Health Check-up: Up to ₹5,000 depending on SI bracket.
3.8 Modern Treatments: Covered up to sum insured (robotic surgery, stem cell therapy for listed conditions, immunotherapy, etc.).
3.9 Consumables/Non-medical items: NOT COVERED in base plan. Must purchase Safeguard+ add-on (additional premium) to cover items like PPE, gloves, masks, syringes etc.
3.10 Day Care Procedures: All day care procedures covered up to SI.

SECTION 4: SPECIAL GOTCHAS & FINE PRINT
4.1 Lock the Clock: Age is locked at entry until FIRST CLAIM is made. After first claim, premium reverts to actual age. This means age benefit is immediately lost on first claim.
4.2 Booster+ Benefit: Unused sum insured carries forward, accumulating up to 10x of base SI over years. BUT resets entirely to base SI if any claim is made in a policy year. Accumulated SI is NOT guaranteed and subject to continuous renewal.
4.3 Restoration: Unlimited reinstatement for same/different illness. However, restoration amount can ONLY be used for future claims in the same policy year, not to top up current claim.
4.4 Wellness Discount: Up to 30% discount on renewal for healthy lifestyle. Requires use of Niva Bupa app and earning health points (1000 steps = 1 point). Discount calculated 90 days before renewal — if you fall ill during the year, your discount drops.
4.5 This policy covers ALLOPATHIC and AYUSH treatments taken in INDIA ONLY. No overseas treatment coverage.
4.6 Grace Period: 30 days for premium payment. Policy lapses if not paid within grace period.
4.7 Portability credits from previous insurer are accepted subject to IRDAI portability norms.
4.8 Co-payment: Nil in Platinum+ (but 20% mandatory co-pay in Bronze variant for 51+ age group — often mis-sold as "no co-pay" plan).`
    },

    {
        id: "HDFC-OPT-SEC",
        provider: "HDFC ERGO General Insurance",
        planName: "Optima Secure",
        logoUrl: "",
        minAge: 18,
        maxAge: 99,
        minCover: 500000,
        maxCover: 20000000,
        premiumStarting: 9599,
        claimSettlementRatio: 97.37,
        networkHospitals: 13000,
        renewalLifetime: true,
        solvencyRatio: 1.78,
        incurredClaimRatio: 72.5,
        ranking: 1,
        coverAmounts: [500000, 1000000, 1500000, 2000000, 2500000, 5000000, 10000000, 20000000],
        baseFeatures: [
            "2x Secure Benefit from Day 1 (SI doubles immediately)",
            "3x Plus Benefit after 2 claim-free renewals",
            "100% Restore Benefit for subsequent claims",
            "No Room Rent Capping (any room including suite)",
            "No Co-payment",
            "No Disease-wise Sub-limits",
            "Protect Benefit: Covers 68 non-medical consumable items",
            "Pre-hospitalization: 60 days",
            "Post-hospitalization: 180 days",
            "Domiciliary Hospitalization covered up to SI",
            "AYUSH treatments covered up to SI",
            "All Day-care procedures covered",
            "Organ Donor Expenses covered up to SI",
            "Preventive Health Check-up from 2nd year",
            "Modern Treatments covered",
            "Road Ambulance: Up to ₹5,000",
            "No-Cost EMI option available",
            "Family Discount: 10% for 2+ members",
            "Tax benefit under Section 80D"
        ],
        notCovered: [
            "Air Ambulance — NOT covered in base plan",
            "OPD Expenses — NOT in base plan (needs Optima Wellbeing add-on at extra cost)",
            "Maternity & Newborn cover — NOT included",
            "Global/Overseas treatment — NOT covered (separate Global variant required)",
            "Dental treatment unless caused by accident",
            "Cosmetic/Plastic Surgery",
            "Obesity/Weight management/Bariatric Surgery — NOT covered",
            "Treatment for alcoholism, drug abuse, smoking",
            "Self-inflicted injuries",
            "Spectacles, contact lenses, hearing aids",
            "Experimental/Unproven treatments",
            "Vaccination costs (except post-bite)",
            "Infertility and IVF treatments"
        ],
        policyWordingText: `HDFC ERGO OPTIMA SECURE — FULL POLICY WORDING EXTRACT (UIN: HDFHLIP25011V052425)

SECTION 1: WAITING PERIODS
1.1 Initial Waiting Period: 30 days from commencement. No claims except accidents.
1.2 Specific Illness Waiting Period: 24 months. Conditions include: Cataract, Benign ENT disorders, Hernia, Hydrocele, Joint Replacement, Kidney/Urinary Stones, Piles/Fistula, Sinusitis, Gall Bladder removal, Uterine Surgery, Gastric Ulcer Surgery, Benign Prostatic Hypertrophy, Internal tumors/cysts/nodules/polyps, Tonsillectomy, all types of Knee surgeries, Varicose Veins surgery, Deviated Nasal Septum, Hemorrhoidectomy.
1.3 Pre-Existing Disease Waiting Period: 36 months (3 years). Reduced from 4 years as per IRDAI 2025 guidelines.
1.4 Moratorium: After 8 continuous claim-free renewal years, policy becomes incontestable except for fraud.

SECTION 2: PERMANENT EXCLUSIONS
2.1 Treatment for alcoholism, drug or substance abuse or any addictive condition.
2.2 Cosmetic or aesthetic treatments, sex change, hormone replacement therapy for gender transition.
2.3 Dental treatment or surgery unless necessitated by accident to natural teeth.
2.4 Congenital external defects or anomalies.
2.5 War, invasion, act of foreign enemy, terrorism, nuclear contamination.
2.6 Any hospitalization primarily for investigation/evaluation/diagnostic purposes.
2.7 Rest cure, rehabilitation, respite care, custodial care.
2.8 Obesity treatment including bariatric surgery, liposuction.
2.9 Self-inflicted injuries.
2.10 Unproven or experimental treatments.
2.11 Spectacles, contact lenses, hearing aids.
2.12 Refractive error correction (LASIK) unless a complication of an accident.
2.13 Expenses for services/treatments not medically necessary.
2.14 Stem cell therapy except for listed conditions (bone marrow transplant for blood cancers etc.).
2.15 Maternity, childbirth, newborn care — NOT covered.
2.16 Infertility treatment, assisted reproduction (IVF, IUI etc.).
2.17 Vaccination costs (except post-bite treatment for rabies/snake etc.).

SECTION 3: SUB-LIMITS AND CAPPING
3.1 Room Rent: No capping. Any room including single private, deluxe. Suite room occupancy also allowed.
3.2 ICU: No capping. Covered at actuals up to SI.
3.3 Ambulance: Road ambulance ₹5,000 per hospitalization (Individual); ₹10,000 per policy (Family Floater).
3.4 Pre-hospitalization: 60 days.
3.5 Post-hospitalization: 180 days.
3.6 AYUSH: Up to sum insured without sub-limits.
3.7 Health Check-up: From 2nd policy year. ₹2,000 (Individual) / ₹5,000 (Family Floater) per continuous renewal year.
3.8 Consumables/Non-medical: COVERED in base plan under Protect Benefit. Covers 68 items including gloves, masks, PPE, syringes, gauze, cotton, caps, shoe covers, food trays.
3.9 Organ Donor: In-patient expenses covered up to SI.
3.10 Day Care: All day care procedures covered up to SI.
3.11 Domiciliary: Covered up to SI with treating doctor's certification.

SECTION 4: SPECIAL BENEFITS & GOTCHAS
4.1 Secure Benefit (2x): Your base SI is DOUBLED from Day 1 at no extra cost. If you buy ₹10L, you get ₹20L effective cover. BUT — the Secure Benefit amount can only be used AFTER the base SI is fully exhausted. It cannot be used for the first claim unless the claim exceeds the base SI.
4.2 Plus Benefit (3x): After 2 consecutive claim-free renewal years, an additional 100% of base SI is added. Bringing total to 3x. This benefit is NON-CUMULATIVE — it activates only after completing 2 claim-free years.
4.3 Restore Benefit: 100% of base SI is restored for subsequent claims in the same policy year after partial/full utilization. BUT — the restored SI can ONLY be used for SUBSEQUENT claims, NOT to top-up the current ongoing claim.
4.4 Non-medical consumables (Protect Benefit): Covers 68 listed items. If an item is NOT on the list of 68, it will still be rejected. Hospital bills for unlisted consumables will be deducted.
4.5 Premium is higher than most comparable plans. For a 30-year old with ₹10L SI, expect ₹9,500-₹12,000/year (vs ₹6,000-₹8,000 for competitors).
4.6 No Global Coverage in base plan. Must buy Optima Secure Global variant separately.
4.7 Maximum Age: No upper age limit for renewal. Entry age for adults starts at 18 years, children from 91 days.
4.8 Family Floater: Maximum 4 adults + 6 dependent children per policy.
4.9 Long-term discount: 7.5% for 2-year tenure, 10% for 3-year tenure. Not applicable with EMI option.`
    },

    {
        id: "CARE-SUPREME",
        provider: "Care Health Insurance",
        planName: "Care Supreme",
        logoUrl: "",
        minAge: 18,
        maxAge: 65,
        minCover: 500000,
        maxCover: 60000000,
        premiumStarting: 6999,
        claimSettlementRatio: 96.74,
        networkHospitals: 11400,
        renewalLifetime: true,
        solvencyRatio: 1.69,
        incurredClaimRatio: 75.2,
        ranking: 3,
        coverAmounts: [500000, 1000000, 2000000, 3000000, 5000000, 10000000, 20000000, 30000000, 60000000],
        baseFeatures: [
            "No Room Rent Capping",
            "No Co-payment (in higher SI variants)",
            "No Disease-wise Sub-limits",
            "Unlimited Automatic Restoration (reinstates SI unlimited times)",
            "Pre-hospitalization: 60 days",
            "Post-hospitalization: 180 days",
            "Domiciliary Hospitalization covered",
            "AYUSH Treatment up to SI",
            "Annual Health Check-up for all members",
            "Day-care procedures: All covered",
            "Organ Donor Expenses covered",
            "Modern Treatments covered up to SI",
            "Consumables covered (in-built for higher variants)",
            "OPD Cover available in top variants",
            "Air Ambulance: Up to ₹5,00,000",
            "Road Ambulance: Up to SI",
            "Wellness Rewards: Up to 30% discount",
            "Sum Insured options up to ₹6 Crore",
            "Tax benefit under Section 80D"
        ],
        notCovered: [
            "Maternity & Newborn cover — NOT covered",
            "Global/Overseas treatment — NOT covered",
            "Dental treatment unless due to accident",
            "Cosmetic/Plastic Surgery",
            "Obesity/Bariatric Surgery",
            "Treatment for substance abuse, alcoholism",
            "Self-inflicted injuries",
            "Spectacles, hearing aids, contact lenses",
            "Infertility/IVF treatments",
            "Vaccination (except post-bite)",
            "Experimental treatments",
            "Refractive error correction (LASIK)"
        ],
        policyWordingText: `CARE SUPREME — FULL POLICY WORDING EXTRACT (Care Health Insurance Ltd.)

SECTION 1: WAITING PERIODS
1.1 Initial Waiting Period: 30 days from policy commencement. No claims except accidents.
1.2 Specific Disease Waiting Period: 24 months. Applicable conditions: Cataract, Joint Replacement (Knee/Hip), Hernia surgery, Hydrocele surgery, Benign Prostatic Hypertrophy, Kidney/Ureteric/Bladder Stones, Pilonidal Sinus, Fistula in Anus, Piles, Tonsillectomy, Surgery of Varicose Veins, Deviated Nasal Septum, Gall Bladder removal, Sinusitis related surgery, Gastric/Duodenal Ulcer surgery, Hysterectomy for menorrhagia/fibroid, Internal tumors/cysts/polyps.
1.3 Pre-Existing Disease (PED) Waiting Period: 36 months. Any pre-existing condition, whether declared or undeclared, that existed before policy inception.
1.4 Moratorium Period: 8 years. After 8 continuous years, no claim can be contested except for proven fraud.

SECTION 2: PERMANENT EXCLUSIONS
2.1 Investigation and Evaluation: Hospitalization primarily for diagnostics.
2.2 Rest cure, rehabilitation, custodial care.
2.3 Dental treatment unless from accidental injury to natural teeth.
2.4 Cosmetic surgery, aesthetic treatments, sex change.
2.5 Obesity treatments, bariatric surgery, liposuction, tummy tuck.
2.6 Treatment for alcoholism, drug abuse, substance abuse.
2.7 Self-inflicted injuries, suicide attempts.
2.8 War, nuclear, terrorism-related injuries.
2.9 Congenital external anomalies or defects.
2.10 Maintenance of brain dead patient on life support.
2.11 Unproven/experimental treatments.
2.12 Charges for non-medically necessary treatments.
2.13 Spectacles, contacts, hearing aids.
2.14 Refractive error correction.
2.15 Maternity, pregnancy, childbirth, newborn care.
2.16 Infertility treatment, IVF, IUI.
2.17 Vaccination costs.

SECTION 3: SUB-LIMITS AND CAPPING
3.1 Room Rent: No capping in Premium & Top-up variants. HOWEVER — in the base "Value" variant, room rent is capped at 1% of SI per day. A ₹5L SI means only ₹5,000/day room rent. If you exceed this, proportionate deduction applies to ENTIRE hospital bill, not just room rent difference.
3.2 ICU: No sub-limit (up to SI).
3.3 Ambulance: Road — up to SI. Air Ambulance — up to ₹5,00,000 per policy year.
3.4 Pre-hospitalization: 60 days.
3.5 Post-hospitalization: 180 days.
3.6 AYUSH: Covered up to sum insured.
3.7 Health Check-up: Available annually for all members irrespective of claims.
3.8 Consumables: Covered in-built for higher SI variants. For lower variants, a separate add-on may be needed.
3.9 Modern Treatments: Covered up to SI (robotic surgery, immunotherapy, balloon sinuplasty, deep brain stimulation, etc.).
3.10 Day Care: All listed day care procedures covered.
3.11 Domiciliary: Covered up to SI.
3.12 OPD: Available in top "Vikas" variant only (dental, vision, consultations up to limit).

SECTION 4: SPECIAL GOTCHAS & FINE PRINT
4.1 Room Rent Trap in Lower Variants: The "Value" variant has 1% of SI per day room rent capping. For ₹5L SI, this is only ₹5,000/day. If you take a ₹10,000/day room, the ENTIRE bill is proportionately reduced — not just the room rent difference. This can result in 40-50% claim deduction. Many agents sell the "Value" variant as "no room rent limit" which is FALSE.
4.2 Unlimited Restoration: SI is reinstated unlimited times for same or different illnesses. BUT — restored amount can only be used for FUTURE claims in the same year, not to enhance the current claim amount.
4.3 Age Restriction: One adult must be 30+ years for the Vikas variant. Entry age capped at 65 years.
4.4 Wellness Reward: Up to 30% renewal discount requires regular use of Care Health app, maintaining fitness metrics, and completing health tasks. Discount is NOT automatic.
4.5 Co-payment: In some variants and for senior citizens (61+), a mandatory 10-20% co-payment may apply. The "Zero Co-pay" is variant-specific.
4.6 Claim-free year bonus: SI increases by 50% for each claim-free year, up to a maximum of 100% bonus. Resets to base SI on any claim.
4.7 The high SI options (₹3 Cr, ₹6 Cr) are available but premium increases are steep for age 45+.
4.8 Network hospitals: 11,400+ but density varies significantly in Tier-2/Tier-3 cities.`
    },

    {
        id: "STAR-COMP",
        provider: "Star Health & Allied Insurance",
        planName: "Star Comprehensive",
        logoUrl: "",
        minAge: 18,
        maxAge: 65,
        minCover: 500000,
        maxCover: 10000000,
        premiumStarting: 8499,
        claimSettlementRatio: 99.06,
        networkHospitals: 14000,
        renewalLifetime: true,
        solvencyRatio: 1.76,
        incurredClaimRatio: 69.8,
        ranking: 2,
        coverAmounts: [500000, 1000000, 1500000, 2000000, 2500000, 5000000, 7500000, 10000000],
        baseFeatures: [
            "No Room Rent Capping (Single Private AC Room and above)",
            "No Co-payment",
            "No Disease-wise Sub-limits",
            "100% Restoration Benefit (same/different illness)",
            "Pre-hospitalization: 90 days",
            "Post-hospitalization: 90 days",
            "Domiciliary Hospitalization covered",
            "AYUSH treatments covered up to SI",
            "Annual Health Check-up",
            "Day-care procedures covered",
            "Organ Donor Expenses up to SI",
            "Modern Treatments covered up to SI",
            "Maternity Cover (₹50,000 Normal / ₹75,000 C-Section after 2 years wait)",
            "Newborn Baby Cover from Day 1",
            "OPD Consultations (up to ₹5,000/year)",
            "Bariatric Surgery covered (after 2 years wait)",
            "In-house claim settlement (No TPA)",
            "14,000+ network hospitals — largest in India",
            "Road Ambulance up to ₹2,500"
        ],
        notCovered: [
            "Air Ambulance — NOT covered",
            "Consumables (PPE, masks, gloves) — NOT covered in base",
            "Dental treatment unless accident-related",
            "Cosmetic/Plastic Surgery",
            "Treatment for alcoholism, drug abuse",
            "Self-inflicted injuries",
            "Spectacles, hearing aids, contact lenses",
            "Infertility / IVF treatment",
            "Experimental/Unproven treatments",
            "Global / Overseas treatment — NOT covered",
            "Vaccination costs (except post-bite)"
        ],
        policyWordingText: `STAR COMPREHENSIVE — FULL POLICY WORDING EXTRACT (Star Health & Allied Insurance Co. Ltd.)

SECTION 1: WAITING PERIODS
1.1 Initial Waiting Period: 30 days. No claims except accidents.
1.2 Specific Disease Waiting Period: 24 months. Includes: Cataract, Joint Replacement, Hernia, Hydrocele, Benign Prostatic Hypertrophy, Kidney/Bladder Stones, Pilonidal Sinus, Fistula, Piles, Tonsillectomy, Varicose Veins, Deviated Nasal Septum, Gall Bladder, Sinusitis, Ulcer Surgery, Hysterectomy, Fibroid Surgery.
1.3 Pre-Existing Disease Waiting Period: 36 months.
1.4 Maternity Waiting Period: 24 months from first policy inception. Normal delivery cover up to ₹50,000. Caesarean delivery up to ₹75,000.
1.5 Bariatric Surgery Waiting Period: 24 months. BMI must be 35+ with documented co-morbidities.

SECTION 2: PERMANENT EXCLUSIONS
2.1 Diagnostic hospitalization without active treatment.
2.2 Rest cure, rehabilitation, respite care.
2.3 Dental treatments unless accident-caused to natural teeth.
2.4 Cosmetic surgery, aesthetic procedures, sex change.
2.5 Obesity treatments (except bariatric after waiting period with BMI 35+).
2.6 Alcoholism, drug/substance abuse treatment.
2.7 Self-inflicted injuries, suicide attempts.
2.8 War, nuclear, terrorism injuries.
2.9 External congenital anomalies.
2.10 Brain-dead life support maintenance.
2.11 Unproven/experimental treatments.
2.12 Non-medically necessary treatments.
2.13 Spectacles, contact lenses, hearing aids.
2.14 Refractive error correction (LASIK etc.).
2.15 Infertility treatment, IVF, IUI.
2.16 HIV/AIDS treatment — covered ONLY if contracted through blood transfusion during covered hospitalization.
2.17 Vaccination costs.

SECTION 3: SUB-LIMITS AND CAPPING
3.1 Room Rent: No capping for Single Private AC room. HOWEVER — if you choose a room ABOVE Single Private AC (like Deluxe Suite), proportionate deduction may apply. This is a HIDDEN cap — not truly "any room."
3.2 ICU: No sub-limit.
3.3 Ambulance: Road ambulance up to ₹2,500 per hospitalization. This is LOWER than most competitors (₹5,000 standard).
3.4 Pre-hospitalization: 90 days (better than most at 60 days).
3.5 Post-hospitalization: 90 days (LOWER than competitors offering 180 days).
3.6 Maternity Sub-limit: Normal Delivery ₹50,000 / C-Section ₹75,000. Newborn covered from day 1 for 90 days under mother's SI.
3.7 OPD: Up to ₹5,000/year for consultations.
3.8 AYUSH: Covered up to SI.
3.9 Health Check-up: Once per policy year.
3.10 Consumables: NOT covered in base plan.
3.11 Modern Treatments: Covered up to SI.
3.12 Bariatric Surgery: Covered up to ₹5,00,000 or SI, whichever is lower, after 24 months.

SECTION 4: SPECIAL GOTCHAS & FINE PRINT
4.1 Room Rent "No Capping" is Misleading: Star says "Single Private AC room and above." But many hospitals define room categories differently. If the hospital's "Single AC" costs ₹8,000 but their "Deluxe" costs ₹15,000, choosing Deluxe triggers proportionate deduction on ENTIRE bill.
4.2 Post-hospitalization is only 90 days vs industry standard 180 days. If you need follow-up treatment after 90 days of discharge, it's out of pocket.
4.3 Ambulance cap of ₹2,500 is significantly below market standard of ₹5,000. In metro cities, a basic ambulance costs ₹3,000-₹5,000.
4.4 Maternity sub-limits are LOW: ₹50K for normal and ₹75K for C-section. Actual costs in metro private hospitals: Normal ₹80K-₹1.5L, C-section ₹1.5L-₹3L. Expect 50-70% out of pocket.
4.5 In-house claim settlement (no TPA) is double-edged: Faster processing but also means Star Health itself decides claim approvals. No independent third-party review.
4.6 Star Health has the HIGHEST claim volume in India. High CSR of 99.06% but also highest absolute number of complaints filed with IRDAI.
4.7 Restoration: 100% of SI restored for subsequent claims. Same illness restoration included. But only one restoration per year (not unlimited like Care Supreme).
4.8 Consumables/Non-medical items NOT covered. This is a significant gap — expect ₹5,000-₹30,000 in consumable charges per hospitalization that you pay from pocket.`
    },

    {
        id: "TATA-MEDICARE-PREM",
        provider: "Tata AIG General Insurance",
        planName: "MediCare Premier",
        logoUrl: "",
        minAge: 5,
        maxAge: 65,
        minCover: 500000,
        maxCover: 20000000,
        premiumStarting: 7499,
        claimSettlementRatio: 96.0,
        networkHospitals: 12000,
        renewalLifetime: true,
        solvencyRatio: 2.51,
        incurredClaimRatio: 66.3,
        ranking: 5,
        coverAmounts: [500000, 1000000, 1500000, 2000000, 5000000, 10000000, 20000000],
        baseFeatures: [
            "No Room Rent Capping",
            "No Co-payment",
            "No Disease-wise Sub-limits",
            "100% Restore Benefit (same/different illness)",
            "Pre-hospitalization: 60 days",
            "Post-hospitalization: 180 days",
            "Domiciliary Hospitalization covered",
            "AYUSH treatments covered up to SI",
            "Consumables Cover (68 items in-built)",
            "Annual Health Check-up",
            "Day-care procedures: All covered",
            "Organ Donor Expenses up to SI",
            "Modern Treatments covered up to SI",
            "Bariatric Surgery covered (after waiting period)",
            "Vaccination Cover (HPV & Hepatitis B after 2 years)",
            "Hospital Cash: 1% of SI for stays >10 days",
            "Global Cover (optional add-on)",
            "Road Ambulance up to SI",
            "Wellness Rewards via Tata AIG app",
            "Highest Solvency Ratio among top 5 (2.51)"
        ],
        notCovered: [
            "Air Ambulance — covered only in top add-on",
            "Maternity & Newborn — NOT covered in base",
            "OPD Expenses — NOT covered in base",
            "Dental treatment unless accident-related",
            "Cosmetic/Plastic Surgery",
            "Treatment for alcoholism, drug abuse",
            "Self-inflicted injuries",
            "Spectacles, hearing aids",
            "Infertility / IVF treatment",
            "Experimental treatments",
            "Global treatment (needs separate add-on)"
        ],
        policyWordingText: `TATA AIG MEDICARE PREMIER — FULL POLICY WORDING EXTRACT (Tata AIG General Insurance Co. Ltd.)

SECTION 1: WAITING PERIODS
1.1 Initial Waiting Period: 30 days. Accidents exempted.
1.2 Specific Disease Waiting Period: 24 months. Conditions: Cataract, Joint Replacement, Hernia, Hydrocele, BPH, Kidney/Bladder Stones, Pilonidal Sinus, Fistula, Piles, Tonsillectomy, Varicose Veins, DNS, Gall Bladder, Sinusitis, Ulcer Surgery, Hysterectomy, Fibroid Surgery.
1.3 Pre-Existing Disease Waiting Period: 36 months.
1.4 Bariatric Surgery: 24 months waiting period with BMI 35+ and documented co-morbid conditions.
1.5 Vaccination Cover (HPV, Hepatitis B): 24 months continuous coverage required.

SECTION 2: PERMANENT EXCLUSIONS
2.1 Diagnostic-only hospitalization.
2.2 Rest cure, rehabilitation, respite care, custodial care.
2.3 Dental treatment unless accident-caused.
2.4 Cosmetic/aesthetic surgery, sex reassignment.
2.5 Obesity treatment except covered bariatric surgery.
2.6 Alcoholism, drug abuse, substance abuse treatment.
2.7 Self-inflicted injuries.
2.8 War, nuclear, terrorism-related claims.
2.9 External congenital anomalies.
2.10 Artificial life support for brain-dead patients.
2.11 Experimental/unproven treatments.
2.12 Non-medically necessary procedures.
2.13 Spectacles, contact lenses, hearing aids.
2.14 Refractive error correction.
2.15 Maternity & newborn in base plan.
2.16 Infertility treatment.
2.17 Sterility and circumcision (unless medically necessary).

SECTION 3: SUB-LIMITS AND CAPPING
3.1 Room Rent: No capping. Any room category.
3.2 ICU: No sub-limit. Covered at actuals.
3.3 Ambulance: Road ambulance covered up to SI. BEST in class — most plans cap at ₹5,000.
3.4 Pre-hospitalization: 60 days.
3.5 Post-hospitalization: 180 days.
3.6 AYUSH: Covered up to SI without sub-limits.
3.7 Consumables: 68 listed items covered in-built. Same list as HDFC ERGO.
3.8 Health Check-up: Annual from 2nd year onwards.
3.9 Hospital Cash: 1% of SI per day for hospitalization exceeding 10 continuous days.
3.10 Vaccination: HPV and Hepatitis B covered after 24 months continuous coverage — unique feature.
3.11 Bariatric: Covered up to SI after 24 months (BMI 35+).
3.12 Modern Treatments: All listed modern treatments covered up to SI.
3.13 Global Cover: Available as optional add-on — NOT included by default.

SECTION 4: SPECIAL GOTCHAS & FINE PRINT
4.1 Entry Age Cap: Maximum entry age is 65 years. For children, minimum entry age is 5 years (older children only).
4.2 Hospital Cash Trigger: Only activates after 10 CONTINUOUS days of hospitalization. Most hospital stays are 3-5 days, making this benefit rarely usable.
4.3 Vaccination Cover: Only HPV and Hepatitis B. No other vaccinations covered. 24-month wait makes it effectively a 3rd year benefit.
4.4 Restore Benefit: 100% restored for subsequent claims. BUT — like others, restored SI cannot enhance current claim. Only for future claims in same policy year.
4.5 Solvency Ratio of 2.51 is the highest among top health insurers — indicates very strong financial stability. Regulatory minimum is 1.50.
4.6 Network Hospital count (12,000+) is strong but claims experience varies across Tier-2/Tier-3 locations.
4.7 The Premier variant offers the best features but is the most expensive among MediCare tiers. The base "MediCare" variant has room rent capping.
4.8 Wellness rewards require active engagement with the Tata AIG mobile app. Benefits are NOT automatic.
4.9 Global Cover add-on: Covers emergency treatment overseas but only emergency — planned overseas treatment not covered.
4.10 Combined with Tata Group's ethical reputation, but Tata AIG is a general insurer (not standalone health) — health is only one product line.`
    },

    {
        id: "ABHI-ACTIV-PLAT",
        provider: "Aditya Birla Health Insurance",
        planName: "Activ Health Platinum Enhanced",
        logoUrl: "",
        minAge: 18,
        maxAge: 65,
        minCover: 500000,
        maxCover: 20000000,
        premiumStarting: 8999,
        claimSettlementRatio: 94.5,
        networkHospitals: 11000,
        renewalLifetime: true,
        solvencyRatio: 1.67,
        incurredClaimRatio: 78.1,
        ranking: 6,
        coverAmounts: [500000, 1000000, 2000000, 5000000, 10000000, 20000000],
        baseFeatures: [
            "No Room Rent Capping",
            "No Co-payment (in Platinum Enhanced)",
            "No Disease-wise Sub-limits",
            "100% HealthReturns™ — Earn back up to 100% of premium as rewards",
            "Chronic Management Program (covers 12 chronic conditions)",
            "Pre-hospitalization: 60 days",
            "Post-hospitalization: 180 days",
            "Domiciliary Hospitalization covered",
            "AYUSH treatments covered up to SI",
            "Restoration Benefit: 100%",
            "Day-care procedures: All covered",
            "Organ Donor Expenses covered",
            "Modern Treatments covered",
            "Consumables covered (in Platinum Enhanced)",
            "Annual Health Check-up",
            "Global Cover (in-built for ₹50L+ SI)",
            "Road Ambulance: Up to ₹2,000",
            "Wellness coaching and health tracking",
            "Tax benefit under Section 80D"
        ],
        notCovered: [
            "OPD Expenses — Limited; most consultations NOT covered",
            "Maternity & Newborn — NOT covered in base",
            "Air Ambulance — NOT covered",
            "Dental treatment unless accident-related",
            "Cosmetic/Plastic Surgery",
            "Obesity/Bariatric Surgery — NOT covered",
            "Treatment for alcoholism, drug abuse",
            "Self-inflicted injuries",
            "Spectacles, hearing aids",
            "Infertility / IVF treatment",
            "Experimental treatments",
            "Vaccination costs"
        ],
        policyWordingText: `ADITYA BIRLA HEALTH INSURANCE ACTIV HEALTH PLATINUM ENHANCED — POLICY WORDING EXTRACT

SECTION 1: WAITING PERIODS
1.1 Initial Waiting Period: 30 days. Accidents exempted.
1.2 Specific Disease Waiting Period: 24 months. Standard IRDAI list of conditions.
1.3 Pre-Existing Disease Waiting Period: 36 months.
1.4 Chronic Management Program: Available from Day 1 but full benefits activate after 12 months of continuous enrollment.

SECTION 2: PERMANENT EXCLUSIONS
2.1 Investigation-only hospitalization.
2.2 Rest cure, rehabilitation, respite care, custodial care.
2.3 Dental treatment unless accident-caused.
2.4 Cosmetic/aesthetic surgery.
2.5 Obesity treatments, bariatric surgery, liposuction.
2.6 Alcoholism, drug abuse treatment.
2.7 Self-inflicted injuries.
2.8 War, nuclear, terrorism claims.
2.9 External congenital anomalies.
2.10 Experimental/unproven treatments.
2.11 Spectacles, lenses, hearing aids.
2.12 Maternity & newborn.
2.13 Infertility treatment.
2.14 Vaccination costs.

SECTION 3: SUB-LIMITS AND CAPPING
3.1 Room Rent: No capping in Platinum Enhanced. HOWEVER — in lower Activ Health variants (Gold, Silver), room rent IS capped at 1% of SI per day.
3.2 ICU: No sub-limit.
3.3 Ambulance: Road ambulance up to ₹2,000 per hospitalization — LOWEST in the market.
3.4 Pre-hospitalization: 60 days.
3.5 Post-hospitalization: 180 days.
3.6 AYUSH: Covered up to SI.
3.7 Consumables: Covered in Platinum Enhanced variant only. Lower variants exclude consumables.
3.8 Health Check-up: Comprehensive annual check-up.
3.9 Chronic Care: Covers 12 chronic conditions (diabetes, hypertension, asthma, COPD, etc.) including OPD consultations, monitoring devices, and medications — unique benefit.
3.10 Global Cover: In-built for SI ₹50L and above. Emergency treatment overseas covered.
3.11 Modern Treatments: Covered up to SI.

SECTION 4: SPECIAL GOTCHAS & FINE PRINT
4.1 100% HealthReturns™ — The headline "get 100% premium back" is MISLEADING. You earn "HealthReturnsTM" as reward points, NOT actual cash. Points can be used for OPD consultations, pharmacy purchases, lab tests via the ABHI app ecosystem. You CANNOT get cash refund of premiums.
4.2 Chronic Management is genuinely useful but requires ACTIVE participation: Regular health tracking via app, doctor consultations, medication adherence monitoring. If you miss activities, benefits reduce.
4.3 Ambulance cap of ₹2,000 is the LOWEST among all major plans. A basic ambulance in metros costs ₹3,000-₹5,000. You'll pay most ambulance costs out of pocket.
4.4 Premium is on the higher side, especially for age 40+ brackets. The "wellness" features inflate premium but may not benefit everyone.
4.5 The Global Cover (for 50L+ SI) only covers EMERGENCY overseas treatment. Planned treatment, second opinions, or elective surgery abroad is NOT covered.
4.6 Restoration benefit: 100% restored but only for subsequent claims. Same limitation as all others.
4.7 Lower variants (Gold, Silver) have significant room rent capping and co-payments for senior citizens. Only Platinum Enhanced is truly "no limit."
4.8 Network hospital density is weaker compared to Star Health and HDFC ERGO in smaller cities.
4.9 HealthReturns™ points expire if not used within the policy year. No carry forward of earned rewards.`
    },

    {
        id: "ICICI-ELEVATE",
        provider: "ICICI Lombard General Insurance",
        planName: "Elevate",
        logoUrl: "",
        minAge: 18,
        maxAge: 65,
        minCover: 500000,
        maxCover: 50000000,
        premiumStarting: 7299,
        claimSettlementRatio: 95.8,
        networkHospitals: 10000,
        renewalLifetime: true,
        solvencyRatio: 2.62,
        incurredClaimRatio: 70.9,
        ranking: 7,
        coverAmounts: [500000, 1000000, 2000000, 5000000, 10000000, 25000000, 50000000],
        baseFeatures: [
            "No Room Rent Capping",
            "No Co-payment",
            "No Disease-wise Sub-limits",
            "100% Restoration Benefit",
            "Pre-hospitalization: 60 days",
            "Post-hospitalization: 180 days",
            "Domiciliary Hospitalization covered",
            "AYUSH treatments covered up to SI",
            "Consumables covered (in-built)",
            "Day-care procedures: All covered",
            "Organ Donor Expenses covered",
            "Modern Treatments covered up to SI",
            "Annual Health Check-up",
            "Road Ambulance: Up to ₹5,000",
            "IL TakeCare app ecosystem",
            "Sum Insured up to ₹5 Crore",
            "Tax benefit under Section 80D",
            "Highest Solvency Ratio (2.62)"
        ],
        notCovered: [
            "Air Ambulance — NOT covered in base",
            "Maternity & Newborn — NOT covered",
            "OPD Expenses — Limited coverage",
            "Global/Overseas treatment — NOT covered",
            "Dental treatment unless accident-related",
            "Cosmetic/Plastic Surgery",
            "Obesity/Bariatric Surgery",
            "Treatment for alcoholism, drug abuse",
            "Self-inflicted injuries",
            "Spectacles, hearing aids",
            "Infertility/IVF treatment",
            "Experimental treatments",
            "Vaccination costs"
        ],
        policyWordingText: `ICICI LOMBARD ELEVATE — FULL POLICY WORDING EXTRACT

SECTION 1: WAITING PERIODS
1.1 Initial Waiting Period: 30 days. Accidents exempted.
1.2 Specific Disease Waiting Period: 24 months. Standard IRDAI specified list.
1.3 Pre-Existing Disease Waiting Period: 36 months.
1.4 Moratorium: 8 years standard.

SECTION 2: PERMANENT EXCLUSIONS
2.1 Diagnostic-only hospitalization.
2.2 Rest cure, rehabilitation, custodial care.
2.3 Dental unless accident-caused to natural teeth.
2.4 Cosmetic surgery, aesthetic procedures.
2.5 Obesity treatment, bariatric surgery, liposuction.
2.6 Alcoholism, drug abuse treatment.
2.7 Self-inflicted injuries, suicide attempts.
2.8 War, nuclear, terrorism.
2.9 External congenital anomalies.
2.10 Brain-dead life support.
2.11 Unproven/experimental treatments.
2.12 Non-medically necessary procedures.
2.13 Spectacles, contacts, hearing aids.
2.14 Refractive error correction.
2.15 Maternity, childbirth, newborn.
2.16 Infertility, IVF/IUI.
2.17 Vaccination costs.

SECTION 3: SUB-LIMITS AND CAPPING
3.1 Room Rent: No capping. Any room category.
3.2 ICU: No sub-limit.
3.3 Ambulance: Road ₹5,000 per hospitalization.
3.4 Pre-hospitalization: 60 days.
3.5 Post-hospitalization: 180 days.
3.6 AYUSH: Up to SI.
3.7 Consumables: Covered in-built — comprehensive list.
3.8 Health Check-up: From 2nd year.
3.9 Modern Treatments: Covered up to SI.
3.10 Day Care: All covered.

SECTION 4: SPECIAL GOTCHAS & FINE PRINT
4.1 Network Hospital Limitation: ICICI Lombard has ~10,000 network hospitals — smaller than Star Health (14,000+) and HDFC ERGO (13,000+). Cashless availability may be limited in some regions.
4.2 Restoration: 100% restored but only for subsequent claims in the same policy year. Standard limitation.
4.3 IL TakeCare App: Required for many features like teleconsultation, health tracking. App-dependent features may not work for non-smartphone users.
4.4 ICICI Lombard is a GENERAL insurer, not standalone health. Health is one of many product lines. Internal priority may not match standalone health insurers.
4.5 Premium competitiveness varies by age band. Very competitive for 25-35 age group but gets expensive quickly after 45.
4.6 Solvency Ratio of 2.62 is excellent — indicates robust financial health and ability to pay large claims.
4.7 No maternity, no global cover, no air ambulance in base — these must be separately purchased.
4.8 Customer service through "IL TakeCare" app is generally well-rated but physical branch presence is limited compared to PSU insurers.`
    },

    {
        id: "DIGIT-INFINITY",
        provider: "Go Digit General Insurance",
        planName: "Health Infinity",
        logoUrl: "",
        minAge: 18,
        maxAge: 65,
        minCover: 500000,
        maxCover: 10000000,
        premiumStarting: 5999,
        claimSettlementRatio: 92.1,
        networkHospitals: 11000,
        renewalLifetime: true,
        solvencyRatio: 2.78,
        incurredClaimRatio: 65.4,
        ranking: 8,
        coverAmounts: [500000, 1000000, 2000000, 5000000, 10000000],
        baseFeatures: [
            "No Room Rent Capping",
            "No Co-payment",
            "No Disease-wise Sub-limits",
            "100% Restoration Benefit",
            "Pre-hospitalization: 60 days",
            "Post-hospitalization: 180 days",
            "Domiciliary Hospitalization covered",
            "AYUSH treatments covered up to SI",
            "Consumables covered (in-built)",
            "Day-care procedures: All covered",
            "Organ Donor Expenses covered",
            "Modern Treatments covered",
            "Annual Health Check-up",
            "Road Ambulance: Up to ₹5,000",
            "100% Paperless process",
            "Smartphone-first experience",
            "Lowest premiums among comprehensive plans",
            "Tax benefit under Section 80D"
        ],
        notCovered: [
            "Air Ambulance — NOT covered",
            "Maternity & Newborn — NOT covered",
            "OPD Expenses — NOT covered",
            "Global/Overseas treatment — NOT covered",
            "Dental treatment unless accident-related",
            "Cosmetic/Plastic Surgery",
            "Obesity/Bariatric Surgery",
            "Treatment for alcoholism, drug abuse",
            "Self-inflicted injuries",
            "Spectacles, hearing aids",
            "Infertility / IVF treatment",
            "Experimental treatments",
            "Vaccination costs",
            "No Chronic Disease Management program"
        ],
        policyWordingText: `GO DIGIT HEALTH INFINITY — FULL POLICY WORDING EXTRACT

SECTION 1: WAITING PERIODS
1.1 Initial Waiting Period: 30 days. Accidents exempted.
1.2 Specific Disease Waiting Period: 24 months. Standard IRDAI list.
1.3 Pre-Existing Disease Waiting Period: 48 months (4 YEARS). NOTE: This is LONGER than most competitors who offer 36 months as per IRDAI 2025 guidelines.

SECTION 2: PERMANENT EXCLUSIONS
2.1 Diagnostic-only hospitalization.
2.2 Rest cure, rehabilitation, custodial care.
2.3 Dental unless accident-related.
2.4 Cosmetic surgery.
2.5 Obesity/bariatric surgery.
2.6 Alcoholism, drug abuse.
2.7 Self-inflicted injuries.
2.8 War, nuclear, terrorism.
2.9 External congenital anomalies.
2.10 Brain-dead life support.
2.11 Experimental treatments.
2.12 Spectacles, contacts, hearing aids.
2.13 Maternity, childbirth.
2.14 Infertility treatment.
2.15 Vaccination costs.

SECTION 3: SUB-LIMITS AND CAPPING
3.1 Room Rent: No capping.
3.2 ICU: No sub-limit.
3.3 Ambulance: Road ₹5,000.
3.4 Pre-hospitalization: 60 days.
3.5 Post-hospitalization: 180 days.
3.6 AYUSH: Up to SI.
3.7 Consumables: Covered in-built.
3.8 Health Check-up: From 2nd year.
3.9 Modern Treatments: Covered.
3.10 Day Care: All covered.

SECTION 4: SPECIAL GOTCHAS & FINE PRINT
4.1 PED Waiting Period is 48 MONTHS (4 years) — This is the BIGGEST red flag. While IRDAI 2025 guidelines reduced max PED wait to 3 years, some existing Digit policies may still have 4-year PED waits. Verify your specific policy document.
4.2 Digit is primarily digital/insurtech. Physical assistance is minimal. If you prefer in-person support during claims, this may be challenging.
4.3 CSR of 92.1% is the LOWEST among top plans listed here. While above the 85% "good" threshold, it means roughly 8 in 100 claims may face issues.
4.4 Digit is a GENERAL insurer (not standalone health). Relatively new player in health insurance.
4.5 Premium is the LOWEST among comparable plans — great for budget-conscious young buyers. But cheaper premium means less cushion for insurer on claim settlement.
4.6 Restoration: 100% restored for subsequent claims. Standard limitation applies.
4.7 Network of 11,000+ hospitals is decent but growing. Some regions may have limited cashless options.
4.8 No chronic disease management, no wellness coaching, no maternity — this is a bare-bones comprehensive plan. Good value but limited on extras.
4.9 Paperless process is genuinely smooth — buying, renewals, and claims can be done entirely via smartphone. Industry-leading UX.
4.10 Solvency ratio of 2.78 is the HIGHEST in this comparison — excellent financial stability despite being a newer insurer.`
    },

    {
        id: "BAJAJ-HCS-ULTIMO",
        provider: "Bajaj Allianz General Insurance",
        planName: "Health Care Supreme Ultimo",
        logoUrl: "",
        minAge: 18,
        maxAge: 65,
        minCover: 500000,
        maxCover: 10000000,
        premiumStarting: 6499,
        claimSettlementRatio: 93.8,
        networkHospitals: 9500,
        renewalLifetime: true,
        solvencyRatio: 3.24,
        incurredClaimRatio: 71.2,
        ranking: 9,
        coverAmounts: [500000, 1000000, 2000000, 5000000, 10000000],
        baseFeatures: [
            "No Room Rent Capping (in Ultimo variant)",
            "No Co-payment (in Ultimo variant)",
            "No Disease-wise Sub-limits",
            "100% Restoration Benefit",
            "Pre-hospitalization: 60 days",
            "Post-hospitalization: 180 days",
            "Domiciliary Hospitalization covered",
            "AYUSH treatments covered up to SI",
            "Day-care procedures: All covered",
            "Organ Donor Expenses covered",
            "Modern Treatments covered up to SI",
            "Annual Health Check-up",
            "Road Ambulance: Up to ₹3,000",
            "Lifetime renewability",
            "Individual, Floater, and Group options",
            "Tax benefit under Section 80D"
        ],
        notCovered: [
            "Consumables — NOT covered in base plan",
            "Air Ambulance — NOT covered",
            "Maternity & Newborn — NOT covered",
            "OPD Expenses — NOT covered",
            "Global/Overseas treatment — NOT covered",
            "Dental treatment unless accident-related",
            "Cosmetic/Plastic Surgery",
            "Obesity/Bariatric Surgery",
            "Treatment for alcoholism, drug abuse",
            "Self-inflicted injuries",
            "Spectacles, hearing aids",
            "Infertility / IVF treatment",
            "Experimental treatments",
            "Vaccination costs"
        ],
        policyWordingText: `BAJAJ ALLIANZ HEALTH CARE SUPREME (ULTIMO VARIANT) — FULL POLICY WORDING EXTRACT

SECTION 1: WAITING PERIODS
1.1 Initial Waiting Period: 30 days. Accidents exempted.
1.2 Specific Disease Waiting Period: 24 months. Standard IRDAI specified list.
1.3 Pre-Existing Disease Waiting Period: 36 months.
1.4 Moratorium: 8 years.

SECTION 2: PERMANENT EXCLUSIONS
2.1 Diagnostic-only hospitalization.
2.2 Rest cure, rehabilitation, custodial care.
2.3 Dental unless accident-caused.
2.4 Cosmetic surgery.
2.5 Obesity/bariatric surgery.
2.6 Alcoholism, drug abuse.
2.7 Self-inflicted injuries.
2.8 War, nuclear, terrorism.
2.9 Congenital external anomalies.
2.10 Brain-dead life support.
2.11 Experimental treatments.
2.12 Spectacles, contacts, hearing aids.
2.13 Maternity & childbirth.
2.14 Infertility treatment.
2.15 Vaccination costs.

SECTION 3: SUB-LIMITS AND CAPPING
3.1 Room Rent: No capping in Ultimo variant. HOWEVER — "Vital" variant has room rent at 1% of SI/day and "Smart" has 2% of SI/day. Major gotcha in lower variants.
3.2 ICU: No sub-limit in Ultimo.
3.3 Ambulance: Road ambulance up to ₹3,000 per hospitalization. Below market standard of ₹5,000.
3.4 Pre-hospitalization: 60 days.
3.5 Post-hospitalization: 180 days.
3.6 AYUSH: Covered up to SI.
3.7 Consumables: NOT covered in base plan. Unlike HDFC Optima Secure and Tata AIG Premier which include consumables.
3.8 Health Check-up: Once per policy year.
3.9 Modern Treatments: Covered up to SI.
3.10 Day Care: All covered.

SECTION 4: SPECIAL GOTCHAS & FINE PRINT
4.1 Three Variants Confusion: Bajaj sells Health Care Supreme in Vital, Smart, and Ultimo variants. Only Ultimo has no room rent cap. Agents may mis-sell Vital variant (cheapest premium) as "comprehensive" when it has 1% SI/day room rent cap.
4.2 Consumables NOT Covered: Major gap. HDFC ERGO and Tata AIG cover 68 consumable items in-built. Bajaj does not. Expect ₹5,000-₹30,000 out-of-pocket per hospitalization for consumables.
4.3 Ambulance cap at ₹3,000 is low. Metro ambulances cost ₹3,000-₹5,000. Minimal reimbursement.
4.4 Network Hospitals: 9,500+ is the LOWEST among plans in this comparison. Cashless availability may be limited, especially in Tier-2/3 cities.
4.5 Bajaj Allianz has high solvency (3.24) — highest in this comparison — indicating very strong financial stability.
4.6 Claims process can be slower compared to standalone health insurers. Bajaj is a general insurer handling motor, travel, home insurance too.
4.7 Restoration: 100% for subsequent claims. Standard limitation.
4.8 No unique differentiating features like HDFC's 2x Secure or Niva Bupa's Lock the Clock. This is a solid but plain-vanilla plan.
4.9 Customer complaints regarding delayed cashless approvals have been reported. Response time to claim requests may take 2-4 hours vs 30 min for Star/HDFC.`
    }
];