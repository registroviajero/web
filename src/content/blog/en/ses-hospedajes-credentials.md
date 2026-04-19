---
title: "How to obtain your SES.HOSPEDAJES credentials step by step"
description: "A practical guide to requesting your lessor code, registering your establishments, and getting the username and password you need to submit guest reports to the Spanish Ministry of the Interior."
date: 2026-04-18
author: "RegistroViajero"
lang: "en"
translationKey: "ses-credentials"
---

Before you can send a single guest report to the Spanish Ministry of the Interior, you need three things: a **lessor code**, an **establishment code** for each property, and **access credentials** (username and password) for the SES.HOSPEDAJES platform. Without these three elements, any compliance software — including ours — has no way to connect.

This guide explains what each one is, how to request it, and in what order, so you can start complying with Royal Decree 933/2021 without going in circles.

## What each credential is and what it does

It's worth clarifying the terms before getting into the paperwork, because the three concepts often get mixed up and they are not the same thing.

### Lessor code

This is the unique identifier of the **individual or legal entity** that operates the accommodation. If you're a sole trader with several apartments, you have a single lessor code. If you operate through a company, the company has one. This code ties all your submissions to your legal ownership.

### Establishment code

This is the identifier of **each physical property** operating as an accommodation. A hotel with 40 rooms has **a single** establishment code. A manager with 12 apartments has **12 establishment codes**, all linked to the same lessor code.

### Username and password

These are the technical credentials your software (yours, ours, or whichever you use) uses to authenticate against the SES.HOSPEDAJES SOAP endpoint. Without them, no submission is possible.

## Prerequisites

Before starting the process, make sure you have:

- A valid **digital certificate** (FNMT, Cl@ve PIN, or electronic DNI) for the individual or entity acting as owner.
- **Tax identification details**: NIF or CIF as applicable.
- **Tourism license or registration number** for each property (requirements vary by autonomous community).
- **Full postal address** for each establishment, with cadastral reference if available.
- **Accommodation type** according to the Ministry's classification (hotel, tourist apartment, rural house, etc.).
- Declared **capacity** (number of rooms/apartments and beds).

Having this ready saves you from abandoning the form halfway through.

## Step 1: Register as a lessor

The initial registration is done through the **SES.HOSPEDAJES web portal** run by the Ministry of the Interior (hospedajes.ses.mir.es). The flow is as follows:

1. Log in to the portal with your **digital certificate**. You cannot start the process without a certificate — it's the official authentication mechanism.
2. Select **"New lessor registration"**.
3. Fill in the ownership details: name or company name, NIF/CIF, tax address, phone number, and contact email.
4. Accept the platform's terms of use.
5. When you finish, the system assigns you a **lessor code** that stays linked to your certificate.

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

If you manage several properties, it's useful to use a clear naming convention ("Downtown Apartment 1A", "Downtown Apartment 1B"…) that you can then mirror in your management software. That way you avoid confusion when assigning reservations.

## Step 3: Request technical credentials

The credentials for **automatic submission** (the ones your software uses) are different from the web portal login. You request them once the lessor and at least one establishment are registered:

1. Inside the portal, go to the **"Telematic services"** or **"Integrations"** section (the exact name may vary across portal updates).
2. Request **SOAP credentials** and indicate that you'll be using third-party software or in-house development.
3. The system generates a **username** and lets you set a **password**.

These are the credentials you enter in your software. From that moment on, every submission is authenticated against your account.

> **Important:** technical credentials are as sensitive as an admin login for your email or online banking. Anyone who has them can send guest reports on your behalf. Store them encrypted and do not share them via email or messaging.

## Step 4: Configure your software

With the three elements in hand — lessor code, establishment codes, and credentials — you can configure your submission tool. In [RegistroViajero](https://registroviajero.com) the flow is:

1. **Dashboard → Settings → SES.HOSPEDAJES**: enter the lessor code, username, and password. The system encrypts the credentials with AES-256 before storing them.
2. **Dashboard → Accommodations → Edit**: on each property, enter its **establishment code**.
3. **Connection test**: before going live, run a connection test from the dashboard. If everything is correct, you'll see the Ministry's response confirming the credentials work.
4. From that point on, every validated record is sent automatically with no further intervention.

You can check the [detailed guide in our help center](https://help.registroviajero.com) for each step with screenshots.

## Common errors during registration

### "The certificate does not match the owner of the registration"

The digital certificate you use to authenticate must belong to **the same individual or entity** listed as the owner. If the accommodation is held by a company and you authenticate with your personal certificate, the process is rejected. Solution: use the company's representative certificate or request a specific certificate.

### "Tourism registration number not found"

Some regions take time to sync their tourism registry with the Ministry's. If you just obtained your number and the system doesn't recognize it, wait 48–72 hours or contact your region's tourism authority to confirm that your registration has been published.

### "Duplicate establishment code"

This usually happens when you try to register the same accommodation twice with slight variations in the address. Check whether an entry already exists for that property before creating a new one.

### "Invalid credentials" when configuring the software

Verify that you're using the **SOAP credentials** (the telematic services ones) and not those of the web portal. They are different. Also check that there are no stray spaces when copying the password.

## How long does the full process take?

In most cases:

- **Lessor registration**: immediate if the certificate is valid.
- **Establishment registration**: immediate for each property.
- **Technical credentials**: immediate for most profiles; in some cases it requires manual validation that may take **1–3 business days**.

In total, it's reasonable to have everything operational in **less than a week** from when you start the process, provided the regional documentation is in order.

## What if I operate in Catalonia or the Basque Country?

These two regions have their own systems for guest reporting:

- **Catalonia**: submissions go to the **Mossos d'Esquadra** through the Generalitat's system. Registration and credentials are handled by the relevant regional department, not by the Ministry.
- **Basque Country**: submissions go to the **Ertzaintza** through the Basque Government's system.

If you operate in these regions, check with the corresponding regional authority. At RegistroViajero we're working to integrate these systems as their technical specifications become available.

## Next steps

Once you have your credentials, what comes next is **never sending guest reports by hand again**. Automating the flow from guest check-in to submission to the Ministry is the difference between complying with peace of mind and living glued to a form.

If you want to get started, you can:

- Read [what RD 933/2021 requires](/en/blog/royal-decree-933-2021-guide) for the full picture.
- Review the [applicable penalties](/en/blog/royal-decree-933-2021-penalties) for non-compliance.
- [Create a free account](https://app.registroviajero.com/register) and try the system for 15 days with no card.

---

*The exact menu names in the SES.HOSPEDAJES portal may change between Ministry updates. This guide reflects the general flow at the time of publication.*
