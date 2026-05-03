---
title: "How to Register as Landlord on SES.HOSPEDAJES and Get Your Credentials Step by Step"
description: "A practical guide to requesting your lessor code (código de arrendador), registering your establishments, and getting the username and password you need to submit guest reports to the Spanish Ministry of the Interior."
date: 2026-04-18
updated: 2026-05-01
author: "RegistroViajero"
lang: "en"
translationKey: "ses-credentials"
cover: "/blog/credenciales-ses-hospedajes.webp"
coverAlt: "A traveler at a heavy Spanish wooden door with three large iron keys floating in an arc around their hand; a cat watches from a flowerpot"
---

Before you can send a single guest report to the Spanish Ministry of the Interior, you need three things. A **lessor code** (código de arrendador). An **establishment code** for each property. **Access credentials** (username and password) for the SES.HOSPEDAJES platform.

Without these three, any compliance software —including ours— has no way to connect.

This guide explains what each one is, how to request it, and in what order. So you can start complying with Royal Decree 933/2021 without going in circles.

## What each credential is and what it does

Worth clarifying the terms before getting into the paperwork. The three concepts often get mixed up. They are not the same thing.

### Lessor code (código de arrendador)

The unique identifier of the **individual or legal entity** that operates the accommodation. If you're a sole trader with several apartments, you have a single lessor code. If you operate through a company, the company has one. This code ties all your submissions to your legal ownership.

To **get the código de arrendador for SES.HOSPEDAJES**, you don't fill a separate form. The system assigns it automatically when you complete the lessor registration with your digital certificate.

### Establishment code

The identifier of **each physical property** operating as an accommodation. A hotel with 40 rooms has **a single** establishment code. A manager with 12 apartments has **12 establishment codes**, all linked to the same lessor code.

### Username and password

The technical credentials your software uses to authenticate against the SES.HOSPEDAJES SOAP endpoint. Without them, no submission is possible.

## Prerequisites

Before starting, make sure you have:

- A valid **digital certificate** (FNMT, Cl@ve PIN, or electronic DNI) for the individual or entity acting as owner.
- **Tax identification details**: NIF or CIF as applicable.
- **Tourism license or registration number** for each property. Requirements vary by autonomous community.
- **Full postal address** for each establishment, with cadastral reference if available.
- **Accommodation type** according to the Ministry's classification (hotel, tourist apartment, rural house, etc.).
- Declared **capacity**: number of rooms or apartments and beds.

Having this ready saves you from abandoning the form halfway through.

### SES.HOSPEDAJES digital certificate setup for foreign hosts

If you're a non-resident host with property in Spain, the digital-certificate piece is the hardest part. The Spanish FNMT certificate requires presence at a registration office in Spain or a consulate abroad that handles FNMT issuance. Some consulates do, many don't. Cl@ve PIN works for residents only.

Two practical paths if you're foreign-based:

1. Issue a **representative certificate** to a Spanish manager (a gestor or administrative agent) who handles your filings. Their certificate authenticates against the portal on your company's behalf.
2. Travel to Spain once to obtain the FNMT certificate yourself. The appointment is at any FNMT registration office (Hacienda offices and most town halls qualify).

Foreign passports or non-EU electronic IDs are not accepted by the portal directly.

## Step 1: Register as a lessor

The initial registration is done through the **SES.HOSPEDAJES web portal** run by the Ministry of the Interior (`hospedajes.ses.mir.es`). The flow:

1. Log in with your **digital certificate**. You can't start the process without one. It's the official authentication mechanism.
2. Select **"New lessor registration"**.
3. Fill in the ownership details: name or company name, NIF/CIF, tax address, phone, contact email.
4. Accept the platform's terms of use.
5. When you finish, the system assigns a **lessor code** linked to your certificate.

Save this code somewhere safe. You'll need it for the next step and to configure your management software.

## Step 2: Register each establishment

Once the lessor code is issued, you can register establishments one by one:

1. From the SES.HOSPEDAJES portal, go to **"Establishments"** → **"New"**.
2. Select the **type** (hotel, hostel, guesthouse, tourist apartment, tourist use dwelling, campground, rural house, youth hostel, etc.).
3. Enter:
   - **Commercial name** of the establishment.
   - **Full address** (street, number, floor if applicable, postal code, municipality, province).
   - **Tourism registration number** issued by the autonomous community.
   - **Capacity**: number of accommodation units and maximum beds.
   - **Coordinates** (optional but recommended).
4. Confirm the registration.

The system assigns an **establishment code** to each property. If you have 10 apartments, you repeat the process 10 times and end up with 10 different codes.

### Tip: name your establishments consistently

If you manage several properties, a clear naming convention ("Downtown Apartment 1A", "Downtown Apartment 1B"…) that mirrors what you use in your management software saves confusion when assigning reservations.

## Step 3: Request technical credentials

The credentials for **automatic submission** are different from the web portal login. You request them once the lessor and at least one establishment are registered.

1. Inside the portal, go to **"Telematic services"** or **"Integrations"** (the exact name may vary across portal updates).
2. Request **SOAP credentials** and indicate that you'll be using third-party software or in-house development.
3. The system generates a **username** and lets you set a **password**.

These are the credentials you enter in your software. From that moment on, every submission is authenticated against your account.

> **Important**: technical credentials are as sensitive as an admin login for your email or online banking. Anyone with them can send guest reports on your behalf. Store them encrypted. Don't share them via email or messaging.

## Step 4: Configure your software

With the three elements in hand —lessor code, establishment codes, and credentials— you can configure your submission tool. In [RegistroViajero](https://registroviajero.com) the flow is:

1. **Dashboard → Settings → SES.HOSPEDAJES**: enter the lessor code, username, and password. The system encrypts the credentials with AES-256 before storing them.
2. **Dashboard → Accommodations → Edit**: on each property, enter its **establishment code**.
3. **Connection test**: before going live, run a connection test from the dashboard. If everything is correct, you'll see the Ministry's response confirming the credentials work.
4. From that point on, every validated record is sent automatically with no further intervention.

You can check the [detailed guide in our help center](https://help.registroviajero.com) for each step with screenshots.

## Common errors during registration

### "The certificate does not match the owner of the registration"

The digital certificate you use must belong to **the same individual or entity** listed as the owner. If the accommodation is held by a company and you authenticate with your personal certificate, the process is rejected.

Fix: use the company's representative certificate or request a specific one. About 80% of "the digital certificate doesn't work on SES.HOSPEDAJES" cases come back to this.

### "Tourism registration number not found"

Some regions take time to sync their tourism registry with the Ministry's. If you just obtained your number and the system doesn't recognise it, wait 48–72 hours or contact your region's tourism authority to confirm your registration has been published.

### "Duplicate establishment code"

This usually happens when you try to register the same accommodation twice with slight variations in the address. Check whether an entry already exists for that property before creating a new one.

### Error 10107: invalid credentials

One of the most common codes. It means the username, password, or lessor code don't match.

Check, in order:

1. That you're using the **SOAP credentials** (telematic services), not the web portal ones. They are different.
2. That there are no stray spaces when copying the password.
3. That the lessor code in the software is exactly the one SES assigned.
4. That you didn't change the password in the portal and forget to update it in the software.

### "SES.HOSPEDAJES won't let me in" or HTTP 500 on login

Usual cause: a temporary issue with the portal or the certificate authentication service. If you wait a few minutes and retry, it usually clears. If it persists, try another browser or clear the cache. An expired certificate also returns a 500 with no detail.

### Forgotten password: how to recover it

The portal has a "Change password" link that requires authenticating with the certificate. Once inside, you set a new one. **Important**: if you change the password in the portal, you have to update it in your software. If you don't, the next submission fails with error 10107.

## How long does the full process take?

In most cases:

- **Lessor registration**: immediate if the certificate is valid.
- **Establishment registration**: immediate for each property.
- **Technical credentials**: immediate for most profiles. In some cases manual validation may take **1–3 business days**.

It's reasonable to have everything operational in **less than a week** from when you start, provided the regional documentation is in order.

## What if I operate in Catalonia or the Basque Country?

These two regions have their own systems for guest reporting. We dig into both in [Guest registration in Catalonia and the Basque Country](/en/blog/catalonia-basque-country-guest-registration/):

- **Catalonia**: submissions go to the **Mossos d'Esquadra** through the Generalitat's system. Registration and credentials are handled by the relevant regional department, not by the Ministry.
- **Basque Country**: submissions go to the **Ertzaintza** through the Basque Government's system.

If you operate in these regions, check with the corresponding regional authority. At RegistroViajero we're working to integrate these systems as their technical specifications become available.

## Next steps

Once you have your credentials, what comes next is **never sending guest reports by hand again**. Automating the flow from guest check-in to submission to the Ministry is the difference between complying with peace of mind and living glued to a form.

If you want to get started:

- Read [what RD 933/2021 requires](/en/blog/royal-decree-933-2021-guide/) for the full picture.
- Review the [applicable penalties](/en/blog/royal-decree-933-2021-penalties/) for non-compliance.
- [Create a free account](https://app.registroviajero.com/register) and try the system for 15 days with no card.

---

*The exact menu names in the SES.HOSPEDAJES portal may change between Ministry updates. This guide reflects the general flow at the time of publication.*
