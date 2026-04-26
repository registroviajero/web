---
title: "Minors in guest registration: what data to collect and who is exempt"
description: "How RD 933/2021 applies to children and teenagers: exemption for those under 14, requirement to declare the relationship for ages 14 to 17, and which documents are accepted in each case."
date: 2026-04-18
author: "RegistroViajero"
lang: "en"
translationKey: "minors"
---

When a family with children arrives at an apartment or hotel, the same questions come up every time at check-in: do we need to register the baby? What data do I ask from a 15-year-old traveling with their parents? Does a minor need a DNI (Spanish national ID)? And what is that "relationship" field the form is asking for?

**Royal Decree 933/2021** has specific rules for minors, designed to balance regulatory compliance with common sense. In this article we walk through them case by case.

## The general rule: three age brackets

The regulation distinguishes three situations based on the guest's age:

| Age | Is registration required? | Required data |
|------|--------------|----------------|
| **Under 14** | Exempt from individual registration | Only listed as accompanied persons |
| **14 to 17** | Mandatory | Full data + **relationship** to an accompanying adult |
| **18 or older** | Mandatory | Full data (same as any adult) |

This gradation appears directly in the technical specifications the Ministry publishes for the SES.HOSPEDAJES platform and, in practice, means that every compliance software has to request different data depending on the guest's age.

## Under 14: exempt

Children under 14 **do not need an individual guest report**. This does not mean they are invisible to the system: they still count toward the **total number of occupied spaces** in the lodging reservation, but no ID, address, phone number, or signature is requested for them.

In practice, the reservation holder indicates that they are traveling with them, and the accommodation records the correct **total occupancy** for the night.

### Why this exemption?

For two main reasons:

1. **Many minors do not have a DNI** until they turn 14. Requiring an official document from a baby or a 5-year-old makes no operational sense.
2. **Minors travel under the responsibility of an adult**, who is already identified and registered. Public safety oversight of the group is exercised through the responsible adult.

## Ages 14 to 17: full registration + relationship

Teenagers aged 14 to 17 **do get registered** like any adult, with one particularity: the **relationship** to an accompanying adult on the same reservation must be declared.

### Which documents are accepted?

In Spain, the DNI is mandatory from age 14. Therefore, the vast majority of Spanish minors in this bracket have a DNI and register with it.

The values accepted by the Ministry are:

- **DNI** (also requires the **support number** — the identifier that appears on the back of the DNI below the IDESP code).
- **NIE (foreign resident ID)** (for foreigners with residence in Spain aged 14+).
- **Passport** (common for foreign travelers in this age group).
- **ID document** from the country of origin, if it is a recognized official document.

If the minor has a DNI or NIE, the **second surname** must also be entered.

### What is the relationship field?

It is the family or guardianship relationship between the minor and the accompanying adult. The values supported by the SES.HOSPEDAJES platform include:

- Father / Mother
- Guardian
- Grandfather / Grandmother
- Uncle / Aunt
- Brother / Sister
- Other

The check-in form must allow one of these values to be selected and linked to the **specific adult** acting as companion (it is not enough to say "traveling with an adult"; you must say **which one**).

### What if they travel without a direct relative?

Typical cases: school trips, summer camps, youth sports teams. In these cases the companion is usually the **monitor, teacher, or group leader**, acting as a temporary guardian. The declared relationship is "guardian" or "other" depending on the documentation provided.

If the minor travels **alone** (uncommon in this age bracket but not impossible), the competent authority should be consulted. In general, admission of unaccompanied minors to tourist accommodations is subject to explicit parental authorization and may raise concerns from the accommodation, regardless of the registration regulations.

## From age 18: standard regime

From the age of majority, registration is identical to that of any adult. No relationship is declared, no mandatory companion, data is collected in full, and the signer of the accuracy declaration is the guest themselves.

## The case of "Guest 1" (the reservation holder)

A particularity of the flow: the **first registered guest** of each reservation is, by convention, the **reservation holder**. This is the person who contracts the accommodation and bears primary responsibility for ensuring the rest of the guests' data is correct.

The holder is **always of legal age** in practice, because they sign the lodging contract. Minors never appear as holders.

## Common mistakes when registering minors

After processing thousands of check-ins, these are the most common mistakes we see in this area:

### 1. Registering a minor under 14 as an adult

Out of habit, some operators fill out a report for each person on the reservation, including young children. This is not necessary and may trigger rejections from the Ministry if the DNI data is not valid (because the child does not have one).

**Solution**: mark the minor as a companion and let the system count them toward total occupancy without requesting a document.

### 2. Forgetting the relationship field for ages 14 to 17

If a teenager is registered without declaring a relationship to an adult on the same reservation, the Ministry returns a validation error and the communication is not considered complete.

**Solution**: the form should force the selection of a relationship when the guest's date of birth falls in this bracket.

### 3. Confusing DNI and support number

The **support number** is an additional identifier that appears on the Spanish DNI (alphanumeric format like "AAA123456"). It is different from the DNI number and is **required** when the document type is DNI.

**Solution**: the form should explicitly ask for it with a visual example of where it appears on the document.

### 4. Second surname missing on DNI/NIE

Spanish documents (DNI, NIE) always have two surnames. If the form does not require it and it is submitted with only one, the Ministry's validation fails.

**Solution**: the "second surname" field should be mandatory whenever the document type is DNI or NIE.

## Data protection and minors

Something often overlooked: **GDPR** and the Spanish **LOPDGDD** provide enhanced protection for minors' data. Although the legal basis for processing in guest registration is **compliance with a legal obligation** (RD 933/2021) rather than consent, some good practices are worth keeping in mind:

- **Minimization**: do not collect more data than required by the Ministry.
- **Limited retention**: the rule sets **3 years** of retention; after that period, data must be deleted or anonymized.
- **Restricted access**: only authorized accommodation staff should see personal data.
- **Signature by the responsible adult**: the accuracy declaration about a minor's data is signed by the accompanying adult, not by the minor.

## How RegistroViajero handles this

At [RegistroViajero](https://registroviajero.com) the minor registration flow is ready out of the box:

- **Automatic detection by age**: the form detects whether the guest is under 14, between 14 and 17, or an adult, and adapts the required fields in real time.
- **Relationship required** when applicable, linked to the specific accompanying adult on the reservation.
- **Chained validations**: if you choose DNI, it asks for the second surname and the support number; if you choose passport, it does not.
- **Companion's signature** for minors, with the corresponding accuracy declaration.
- **Configurable retention** in accordance with GDPR and RD 933/2021 (by default, automatic deletion after 3 years).

You can get more context in [what RD 933/2021 requires](/en/blog/royal-decree-933-2021-guide/), [how to automate guest registration](/en/blog/automate-guest-registration/) when family groups repeat, [the penalties provided for by the law](/en/blog/royal-decree-933-2021-penalties/), and [how to obtain SES.HOSPEDAJES credentials](/en/blog/ses-hospedajes-credentials/).

If you manage an accommodation with high family turnover, [creating a free account](https://app.registroviajero.com/register) lets you try the full flow for 15 days without a credit card.

---

*This article is informational. For specific cases (unaccompanied minors, judicial guardianship, emergency accommodation, etc.), consult your legal advisor or the competent authority.*
