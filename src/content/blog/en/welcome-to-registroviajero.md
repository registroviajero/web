---
title: "Who We Are and Why We Built RegistroViajero"
description: "RegistroViajero was built by vacation rental managers who were tired of the existing solutions. This is our story, our mission, and what makes us different from the alternatives."
date: 2026-04-16
updated: 2026-05-03
author: "RegistroViajero"
lang: "en"
translationKey: "welcome"
cover: "/blog/welcome-to-registroviajero.webp"
coverAlt: "Editorial illustration: a property manager wakes up in a sun-filled Mediterranean room with open wooden shutters, ready to start the day"
---

We are not a software company that discovered a niche in vacation rentals. We are vacation rental managers who spent too long depending on tools that were not built for us, and who eventually decided to build our own.

## The problem we lived through every night

If you manage properties in Spain, you know the ritual. A reservation comes in. The guest arrives. Before they can get through the door, someone — you, a receptionist, a trusted person — has to open SES.HOSPEDAJES, log in with the web service credentials, fill in a form with the document details, submit it, wait for the receipt, and hope that no cryptic error code comes back with no explanation attached.

Multiply that by four properties, fifteen nights in July, the guest who arrived late and the system that took thirty seconds to respond, and you've got an hour of administrative work each night that adds value to nobody.

The tools that existed didn't solve this. The big platforms for hotels were designed for 200-room PMS systems, with annual contracts and two-day onboarding sessions. Browser plugins were patches that automated clicks but still required someone sitting in front of a computer. And none of them had thought about the manager with three apartments on Booking, working alone, handling an incident in the flat downstairs at eleven at night.

## The decision

In late 2024, with the implementation of [Royal Decree 933/2021](/en/blog/royal-decree-933-2021-guide/) and the definitive obligation to report to SES.HOSPEDAJES, the situation reached a tipping point. The fines for non-compliance are real. The system is real. And the tools were still inadequate.

So we started building what we wanted to use ourselves.

The most important design decision came early: **check-in has to belong to the guest, not the manager**. The underlying problem wasn't "how do we submit data to the Ministry faster". It was "why is it still the manager's job to collect the guest's data in the first place". If a guest can check in at a hotel from their phone, they can do it at a vacation rental too.

That's where RegistroViajero as it exists today came from: the manager creates the reservation, the system generates a unique link for the guest, the guest fills in their details in their own language from any device, signs the accuracy declaration, and the system submits the communication to SES.HOSPEDAJES without anyone having to log into the Ministry portal.

## What we learned building it

Working directly with the SES.HOSPEDAJES API — not through the web portal, but with the Ministry's web service — was revealing. The documentation is inconsistent. [Error responses are cryptic or absent](/en/blog/ses-hospedajes-error-codes/). The system rejects communications for reasons that appear in no manual: the phone prefix format, the support number on the back of the DNI, the nationality ISO code needing three letters not two.

We came to understand that the problem isn't just the SES.HOSPEDAJES interface. It's that the entire process — from data collection to Ministry confirmation — has too many things that can fail silently. An accepted submission is not the same as a registered guest. The difference can surface hours later, in an asynchronous result that nobody checks.

Building the system as managers who live this ourselves forced us to solve those invisible parts: notifying you when a guest hasn't completed check-in and arrival is tomorrow, showing you exactly which piece of data the Ministry rejected and why, and not marking a communication as sent until we have real confirmation.

## Our mission

RegistroViajero's mission is to eliminate the administrative compliance work that adds no value. [Royal Decree 933/2021](/en/blog/royal-decree-933-2021-guide/) exists for legitimate reasons — public safety requires that accommodations report who is staying. But that process requiring an hour of manual nightly work is a tooling problem, not a legal requirement.

We want managers to spend their time on their guests and their properties, not on a Ministry form.

## Who RegistroViajero is for

Any accommodation that uses SES.HOSPEDAJES as its submission channel: tourist apartments, vacation rentals, small hotels, guesthouses, rural houses. It works from a single property up to portfolios of several dozen. If your properties are exclusively in Catalonia or the Basque Country, we're not for you yet — those regions have their own systems ([Mossos d'Esquadra and Ertzaintza](/en/blog/catalonia-basque-country-guest-registration/)) and we're still working on those integrations.

What you can expect:

- **Digital check-in in 9 languages.** The guest fills in their details from their phone. No PDFs, no paper forms, no WhatsApps with photos of documents.
- **Reservation sync.** Connect iCal feeds from Booking.com, Airbnb, VRBO, Expedia, or any iCal source. Reservations come in on their own.
- **Direct submission to SES.HOSPEDAJES.** XML generated and signed automatically. The Ministry receipt is saved.
- **Real-time notifications.** You know the moment a guest completes check-in — or when they haven't and arrival is tomorrow.
- **Full audit trail.** Every operation is logged, downloadable, ready for any inspection.

## One thing we particularly care about

We don't block guest check-in if your subscription lapses. Our position is that legal compliance cannot be held hostage to a delayed payment. If there's ever a billing issue, the platform keeps working while we sort it out.

---

If you have questions or want to see how it works before signing up, visit our [Help Center](https://help.registroviajero.com) or start a [15-day free trial](https://app.registroviajero.com/register) — no credit card required.
