---
title: "Registering Minors in Spain Guest Reports: Children, Teenagers, and Parentesco"
description: "How RD 933/2021 applies to children and teenagers in Spanish vacation rentals. Children under 14 exempt, ages 14 to 17 require relationship to an adult, and which documents are accepted in each case."
date: 2026-04-18
updated: 2026-05-01
author: "RegistroViajero"
lang: "en"
translationKey: "minors"
---

A family with children walks into the apartment.

The same questions come up every time. Do we register the baby? What data do I ask from a 15-year-old travelling with their parents? Does a minor need a DNI? And what's that "relationship" field on the form?

**Royal Decree 933/2021** has specific rules for minors. Designed to balance compliance with common sense. Here they are, case by case.

## The general rule: three age brackets

| Age | Is registration required? | Required data |
|------|--------------|----------------|
| **Under 14** | Exempt from individual registration | Only listed as accompanied persons |
| **14 to 17** | Mandatory | Full data + **relationship** to an accompanying adult |
| **18 or older** | Mandatory | Full data (same as any adult) |

This gradation appears directly in the technical specifications the Ministry publishes for the SES.HOSPEDAJES platform. In practice, every compliance software has to request different data depending on the guest's age.

## Spain guest registration: children under 14 exempt

Children under 14 do not need an individual guest report. They aren't invisible to the system: they still count toward the **total number of occupied spaces** in the lodging reservation. But no ID, address, phone number, or signature is requested for them.

In practice, the reservation holder indicates that they are travelling with them, and the accommodation records the correct **total occupancy** for the night.

### What about babies? Do I have to register a baby?

No. The exemption covers ages 0 to 13 inclusive. A three-month-old baby counts as a companion, the same as a ten-year-old.

### Why the exemption?

For two reasons:

1. **Many minors don't have a DNI** until they turn 14. Requiring an official document from a baby or a 5-year-old makes no operational sense.
2. **Minors travel under the responsibility of an adult**, who is already identified and registered. Public-safety oversight of the group is exercised through the responsible adult.

## Ages 14 to 17: full registration plus parentesco

Teenagers aged 14 to 17 do get registered like any adult, with one particularity. The **relationship** (parentesco) to an accompanying adult on the same reservation must be declared.

This is where most mistakes happen.

### Which documents are accepted?

In Spain, the DNI is mandatory from age 14. So the vast majority of Spanish minors in this bracket have a DNI and register with it.

The values accepted by the Ministry are:

- **DNI** (also requires the **support number** — the identifier that appears on the back of the DNI below the IDESP code).
- **NIE** (foreign resident ID for foreigners with residence in Spain aged 14+).
- **Passport** (common for foreign travellers in this age group).
- **ID document** from the country of origin, if it's a recognised official document.

If the minor has a DNI or NIE, the **second surname** must also be entered.

### SES.HOSPEDAJES minor without ID document: what to do

Real case: a foreign 15-year-old without an individual passport, travelling with a family book or a national ID document.

Options in order of preference:

1. **Passport** if they have one. Even if their country doesn't issue them at 14, many do, and parents often have one for the child anyway.
2. **National ID document** from the country of origin, if it's an official individual ID.
3. If no individual document exists, the case is documented within the reservation by linking the minor to the accompanying adult's document and declaring the relationship. For edge cases, check with the competent authority.

The **family book** (libro de familia) is not a personal ID for the minor. It evidences family relationship. It does not identify.

### What is the relationship field?

The family or guardianship relationship between the minor and the accompanying adult. The values supported by SES.HOSPEDAJES include:

- Father / Mother
- Guardian
- Grandfather / Grandmother
- Uncle / Aunt
- Brother / Sister
- Other

The check-in form must allow one of these to be selected and linked to the **specific adult** acting as companion. It's not enough to say "travelling with an adult". You have to say which one.

### A 16-year-old with their own DNI: is parentesco still required?

Yes. As long as the guest is a minor (until the day before they turn 18), declaring relationship is mandatory. It doesn't matter that the teenager has their own DNI and travels without their direct parents. You still indicate the relationship to the adult on the same reservation.

### What if they travel without a direct relative?

Typical cases: school trips, summer camps, youth sports teams. The companion is usually the **monitor, teacher, or group leader** acting as a temporary guardian. The declared relationship is "guardian" or "other" depending on the documentation provided.

If the minor travels alone (uncommon in this age bracket but not impossible), the competent authority should be consulted. Admission of unaccompanied minors to tourist accommodations is generally subject to explicit parental authorisation and may raise concerns from the accommodation, regardless of the registration regulations.

## From age 18: standard regime

From the age of majority, registration is identical to that of any adult. No relationship is declared. No mandatory companion. Data is collected in full. The signer of the accuracy declaration is the guest themselves.

## The case of "Guest 1" (the reservation holder)

A particularity of the flow. The first registered guest of each reservation is, by convention, the reservation holder. The person who contracts the accommodation. The one who bears primary responsibility for the rest of the guests' data being correct.

The holder is **always of legal age** in practice. Minors never appear as holders.

## Common mistakes when registering minors in Spanish vacation rentals

After processing thousands of check-ins, these are the most common ones in this area:

### 1. Registering a minor under 14 as an adult

Out of habit, some operators fill out a report for each person on the reservation, young children included. Not necessary. And it can trigger rejections from the Ministry if the DNI data is invalid (because the child has none).

**Fix**: mark the minor as a companion. Let the system count them toward total occupancy without requesting a document.

### 2. Forgetting parentesco for ages 14 to 17

If a teenager is registered without declaring a relationship to an adult on the same reservation, the Ministry returns a validation error. The communication is not considered complete.

**Fix**: the form should force the selection of a relationship when the guest's date of birth falls in this bracket.

### 3. Confusing DNI and support number

The **support number** is an additional identifier on the Spanish DNI (alphanumeric format like "AAA123456"). It's different from the DNI number. It's required when the document type is DNI.

**Fix**: the form should explicitly ask for it with a visual example of where it appears on the document.

### 4. Second surname missing on DNI/NIE

Spanish documents always have two surnames. If the form doesn't require it and you submit with one, the Ministry's validation fails.

**Fix**: the "second surname" field should be mandatory whenever the document type is DNI or NIE.

## Data protection and minors

Often overlooked. **GDPR** and the Spanish **LOPDGDD** provide enhanced protection for minors' data.

The legal basis for processing in guest registration is **compliance with a legal obligation** (RD 933/2021), not consent. Even so, some good practices to keep in mind:

- **Minimisation**: don't collect more data than the Ministry requires.
- **Limited retention**: the rule sets **3 years**. After that period, data must be deleted or anonymised.
- **Restricted access**: only authorised accommodation staff should see personal data.
- **Signature by the responsible adult**: the accuracy declaration about a minor's data is signed by the accompanying adult, not by the minor.

## How RegistroViajero handles this

At [RegistroViajero](https://registroviajero.com) the minor registration flow is ready out of the box:

- **Automatic detection by age**. The form detects whether the guest is under 14, between 14 and 17, or an adult, and adapts the required fields in real time.
- **Relationship required** when applicable, linked to the specific accompanying adult on the reservation.
- **Chained validations**. If you choose DNI, it asks for the second surname and the support number. If you choose passport, it doesn't.
- **Companion's signature** for minors, with the corresponding accuracy declaration.
- **Configurable retention** in line with GDPR and RD 933/2021. Automatic deletion after 3 years by default.

You can get more context in [what RD 933/2021 requires](/en/blog/royal-decree-933-2021-guide/), [how to automate guest registration](/en/blog/automate-guest-registration/) when family groups repeat, [the penalties provided for by the law](/en/blog/royal-decree-933-2021-penalties/), and [how to obtain SES.HOSPEDAJES credentials](/en/blog/ses-hospedajes-credentials/).

If you manage an accommodation with high family turnover, [creating a free account](https://app.registroviajero.com/register) lets you try the full flow for 15 days without a credit card.

---

*This article is informational. For specific cases (unaccompanied minors, judicial guardianship, emergency accommodation, etc.), consult your legal advisor or the competent authority.*
