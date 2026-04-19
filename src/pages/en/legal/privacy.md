---
layout: ../../../layouts/ContentPage.astro
title: Privacy Policy
description: How RegistroViajero processes your data and the data of your guests in compliance with the GDPR.
locale: "en"
---

# Privacy Policy

## Data controller

- **Controller**: <!-- TODO: nombre completo -->
- **Email**: legal@registroviajero.com
- **Website**: https://registroviajero.com

## Data we collect

**User data (agency administrators)**
- Name, email, password (encrypted with argon2id)
- Agency name, CIF (Spanish tax ID)
- Billing data (managed by Polar; we do not store payment data)

**Guest data (entered by the guests themselves)**
- Full name, sex, date of birth, nationality
- Type and number of identity document, support number (DNI, Spanish national ID)
- Address, phone, email
- Photographs of the identity document (front and back)
- For minors aged 14–17: relationship with the accompanying adult

## Purpose and legal basis

| Purpose | Legal basis |
|---------|-------------|
| Management of user accounts | Performance of the contract (GDPR art. 6.1.b) |
| Collection of guest data | Compliance with a legal obligation: Royal Decree 933/2021 (GDPR art. 6.1.c) |
| Submission of communications to the Spanish Ministry of the Interior (SES.HOSPEDAJES) | Compliance with a legal obligation (GDPR art. 6.1.c) |
| Billing and subscription management | Performance of the contract (GDPR art. 6.1.b) |
| Sending transactional emails (invitations, password resets) | Legitimate interest (GDPR art. 6.1.f) |

Where this policy refers to the "GDPR," it means the General Data Protection Regulation (EU Regulation 2016/679).

## Recipients

- **Spanish Ministry of the Interior**: guest data is submitted to the SES.HOSPEDAJES platform pursuant to Royal Decree 933/2021.
- **Polar** (polar.sh): payment and subscription management.
- **Hosting provider**: Contabo GmbH (Germany, within the EEA — European Economic Area).

We do not sell or share data with third parties for commercial purposes.

## Retention period

- **Guest data**: 3 years from the date of registration, pursuant to Royal Decree 933/2021. After this period, it is deleted automatically.
- **User data**: for as long as the account remains active. After a deletion request, data is erased within a maximum of 30 days.
- **Identity documents**: same period as guest data (3 years).

## Security measures

- Passwords encrypted with argon2id
- SES credentials encrypted with AES-256-GCM
- Communications encrypted via HTTPS/TLS
- Document storage on a private S3 server
- Data isolation by agency (multi-tenancy)
- Immutable audit log

## Your rights

You may exercise your rights of access, rectification, erasure, objection, portability, and restriction of processing by sending an email to legal@registroviajero.com stating your name and the email associated with your account.

If you are a guest whose data has been collected through the platform, please contact directly the accommodation agency that handled your registration. The agency is the data controller for your data; RegistroViajero acts as a data processor.

You have the right to lodge a complaint with the [AEPD (Spanish Data Protection Agency)](https://www.aepd.es).

For reference, Spanish data protection law — the LOPDGDD (Organic Law 3/2018 on Personal Data Protection and Digital Rights) — complements the GDPR in Spain.

## Local storage

This site uses the browser's local storage (localStorage) for the authentication session and language preference. We do not use analytics cookies or third-party cookies.

*Last updated: April 2026*
