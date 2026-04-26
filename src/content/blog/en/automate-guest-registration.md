---
title: "How to automate guest registration in Spain (RD 933/2021) without paperwork or manual submissions"
description: "Practical guide to automating guest check-in, reservation imports, and SES.HOSPEDAJES submissions. What can be automated and what still has to be validated by a person."
date: 2026-04-26
author: "RegistroViajero"
lang: "en"
translationKey: "automate"
---

If you manage a tourist accommodation in Spain, you already know that **Royal Decree 933/2021** requires you to collect a long list of guest data and submit it to the Ministry of the Interior through **SES.HOSPEDAJES**. Doing it manually —photocopies of IDs, an Excel sheet, the Ministry's web form one reservation at a time— is workable for one property and two stays a month. For any real volume, it's a recipe for missed entries, transcription errors, and eventually [a public-safety penalty](/en/blog/royal-decree-933-2021-penalties/).

The good news is that **almost the entire flow can be automated**, from the moment the guest books to the moment the report is recorded at the Ministry. The less good news is that automation is not the same as forgetting about it: there are steps that must remain under your control. This article breaks down what can be automated, what cannot, and how to chain it all together.

## What "automating guest registration" actually means

Guest registration has three operational blocks:

1. **Capture the guest's data** (ID document, date of birth, address, contact details, relationship if applicable).
2. **Create the reservation** in your system (accommodation, dates, amount, payment method).
3. **Submit to the Ministry** the guest report and, for vacation rentals or apartments, the lodging communication.

"Automating" means, for each of those three blocks, **eliminating manual data entry** without losing the human validation the law explicitly requires (signature of the truthfulness declaration, visual check of the document, decisions on incidents).

## The manual flow we want to replace

The typical manual flow looks like this:

1. The guest books through Booking, Airbnb, or by phone.
2. You write the reservation down in a spreadsheet or notebook.
3. On check-in day, you take a photocopy of the ID and have them sign a paper.
4. That night or the next day, you log into SES.HOSPEDAJES, open the form, and fill in every field by hand for each traveler.
5. If you mistype a letter, the submission is rejected and you start over.
6. You file paperwork that you must keep for **3 years** for audit.

Every step is time, error risk, and legal exposure. Let's see what can be automated at each stage.

## 1. Automatic data capture: digital check-in

This is the block that saves the most time. Instead of the guest arriving and you filling in the form for them, you send them a **unique check-in link** they complete from their phone **before arrival**:

- They upload a photo of the document straight from the camera.
- The system recognises the document type (DNI, NIE, passport, etc.) and shows only the relevant fields.
- By the time they reach the property, the data is in your dashboard, validated and ready to submit.

The important part: the form has to be **built for RD 933/2021**, not a generic check-in. That means capturing the **18 fields required** by the regulation, including the second surname and support number for Spanish DNI/NIE, the relationship for minors, and payment data for the lodging communication. A generic form that skips these will fail at the Ministry.

For groups and families —the trickiest case— two complementary patterns work well:

- **One link per traveler**: each adult fills in their own from their phone.
- **One group link**: the lead guest completes them all in one session, marking the relationships.

The second pattern is especially useful when [registering minors](/en/blog/minors-guest-registration/), where you also need the accompanying adult's details.

## 2. Automatic reservation import: iCal

The second big block: getting reservations into your system on their own. The industry-standard route is the **iCal feed** that each portal exposes for your accommodation.

If you connect the iCal URLs from Booking, Airbnb, VRBO, Expedia, Tripadvisor, and Google Calendar, reservations show up in your dashboard automatically. Every time a portal records a new booking, the sync (ideally every 15 minutes) brings it into your system with the lead guest's name, the dates, and sometimes their email or phone.

What iCal **doesn't** bring you:

- The guest's ID document (portals don't share it for privacy reasons).
- Data for the other travelers accompanying the lead guest.
- The signature of the truthfulness declaration.

That's why iCal import **doesn't replace digital check-in**: it complements it. The reservation arrives on its own; the guest completes their part from their phone. We go deeper into how to set up each portal in [Sync Booking, Airbnb, VRBO and others via iCal](/en/blog/ical-sync-booking-airbnb/).

## 3. Automatic submission to SES.HOSPEDAJES

The final step —the most intimidating one— is also the one that benefits the most from automation: **direct submission to the Ministry**. SES.HOSPEDAJES exposes an API so an integrated system can submit communications without going through the web form. If your platform is integrated, marking the reservation as validated and clicking "submit" makes the system:

1. Build the XML with the reservation and traveler data.
2. Sign and submit it to SES.HOSPEDAJES.
3. Receive the receipt and store it in the audit log.
4. If a validation error comes back, surface it with the Ministry's message so you can fix it.

For this integration you need three credentials issued by the Ministry (username, password, and lessor code). Without them no submission is possible. Getting them isn't trivial the first time —we explain the procedure step by step in [How to obtain your SES.HOSPEDAJES credentials](/en/blog/ses-hospedajes-credentials/).

## What can't (and shouldn't) be automated

Four things must remain under human control even if the tool makes them easy:

1. **The signature of the truthfulness declaration**. The law requires the guest to declare under their responsibility that the data is correct. The signature can be digital (on screen), but it has to be a conscious act.
2. **The visual check of the document**. If the photo of the ID is blurry or doesn't match the person, don't submit the report. A good tool will flag incidents, but the call to validate is yours.
3. **The initial setup of the accommodation**. Each accommodation has an establishment code the Ministry assigns, and you enter it once. That's done manually when you configure the property.
4. **Handling Ministry incidents** (rejections, missing data, doubts about how to classify a traveler). The system flags them; you decide how to resolve them.

Pretending that the system "submits everything without you looking" is, beyond irresponsible, illegal: the accommodation owner is always responsible for the truthfulness of the data submitted.

## The full automated flow

Chaining the three blocks, here is what day-to-day looks like with a system that automates RD 933/2021:

1. **The guest books** on Booking/Airbnb/etc.
2. The reservation **lands on its own** in your dashboard via iCal (within 15 minutes).
3. The system **sends a check-in link** to the guest.
4. The guest **fills in their data** from their phone, uploads the ID photo, and signs.
5. They arrive at the accommodation. **You validate** that the data is correct.
6. **One click submits the report** to SES.HOSPEDAJES. You get the receipt back.
7. The data is **kept automatically for 3 years** and deleted afterwards.

Total manual work per reservation: on the order of **30–60 seconds** (the validation). Compared to the 10–15 minutes of the manual flow, the difference is visible in the first week.

## What to look for in a tool

If you're evaluating options to automate RD 933/2021, the non-negotiables are:

- **Direct submission to SES.HOSPEDAJES**, not file export that you then upload manually.
- **Full coverage of the 18 RD 933/2021 fields**, including relationships and payment data.
- **iCal import** from the portals you use (at least Booking and Airbnb).
- **Multi-language check-in** —if your guests are international, a Spanish-only form multiplies abandonment.
- **Immutable audit log** and 3-year retention as required.
- **GDPR compliant**, encrypted data, EEA-based hosting.
- That it **does not block guest check-in** if your subscription lapses, so guests can still complete their part during any administrative hiccup on your side.

[RegistroViajero](/en/) ticks all seven. You can try it for 15 days without a credit card and have the full flow set up in an afternoon.

## Is it worth it for a single property?

Yes, for two reasons:

- **Potential penalty vs. cost**. A single fine for non-compliance starts at €601 (serious tier under Organic Law 4/2015). The monthly cost of a compliance tool is around €5 per accommodation. The math works out fast.
- **Time recovered**. Even with just 5 bookings a month, that's 5 manual submissions of around 10 minutes each. Almost an hour a month back for something else.

For higher volumes, the calculation isn't even close.

## Next steps

- If you're still unclear on what the regulation requires, start with [what RD 933/2021 requires](/en/blog/royal-decree-933-2021-guide/).
- If you're missing the last piece (the credentials), [we explain how to obtain them here](/en/blog/ses-hospedajes-credentials/).
- If you handle families or groups, [the minors case](/en/blog/minors-guest-registration/) is worth reading before you configure the flow.
- And if you want to see the system in action, [create a free 15-day account](https://app.registroviajero.com/register) and try a real submission with your next booking.
