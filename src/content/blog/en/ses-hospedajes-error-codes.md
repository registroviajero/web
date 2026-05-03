---
title: "SES.HOSPEDAJES Error Codes: The Most Common Rejections and How to Fix Them"
description: "SES can reject your guest communication in two completely different moments: instantly, or silently hours later. Understanding the difference saves you redundant resubmissions and unregistered guests. Causes and fixes for the most frequent errors."
date: 2026-05-10
updated: 2026-05-10
author: "RegistroViajero"
lang: "en"
translationKey: "ses-error-codes"
cover: "/blog/errores-ses-hospedajes-codigos.webp"
coverAlt: "Editorial illustration: a traveller studies a wall of small wooden post-box slots, two of them glowing warm orange; they hold an envelope and look on with calm curiosity"
---

You submit a guest communication to SES.HOSPEDAJES and the interface says "sent". Hours later, the guest still isn't registered. Or the platform returns a cryptic numeric code with no explanation in sight.

The most common problem isn't that you made a serious mistake. It's that SES can reject a communication at **two completely different moments** — and most property managers don't know both exist.

## The two moments SES can reject you

### First moment: rejection on submission

This rejection happens within seconds, before the Ministry has even looked at the guest's data. SES returns a numeric error code immediately on submission. If you see one of these, the entire submission was rejected — no guest was registered.

| Code | What SES says | Common cause | Fix |
|------|--------------|-------------|-----|
| `10103` | Landlord code not registered | The landlord code entered doesn't match the one registered in SES | Copy it exactly from the SES portal — one extra space is enough to fail |
| `10107` | Incorrect user | SES web service username or password is wrong | The web service username ends in `_WS`; don't confuse it with your web portal login |
| `10119` | No permissions | Account doesn't have permission to submit communications | Contact SES.HOSPEDAJES support |
| `10120` | Web service not enabled | Web service access hasn't been activated for your account | Must be explicitly requested in the portal — it is not enabled by default when you register |
| `10121` | Duplicate communication | The Ministry already received this communication | See the section below — do not resubmit |

Code `0` means the submission was **accepted** for review. It does not mean the data is correct — you'll find that out at the second moment.

### Second moment: silent rejection hours later

This is the rejection that catches most operators off guard. When the first moment raises no error, the Ministry reviews each guest's data separately. That process can take **minutes or several hours**. To know the real outcome, you have to check the submission status later.

Each guest can come back as successfully registered, or as rejected with a message describing which piece of data was wrong. The submission as a whole can show "accepted" even if several individual guests were rejected.

**This means "sent" is not the same as "registered".** A submission accepted at the first moment can have guests rejected at the second, with nothing on the submission screen indicating this.

---

## Common second-moment errors and how to fix them

### Invalid support number

**The single most common reason for rejection, according to the platform itself.**

The support number is the character string on the **reverse of the Spanish DNI** (for Spanish identity documents) or in the lower strip of the NIE. It is mandatory for all Spanish identity documents.

Common mistakes: reading it from the front of the document, confusing it with the document's serial number, entering it with spaces or hyphens.

### Second surname required

When the guest holds a DNI or NIE, the second surname is **mandatory** even if the guest habitually uses only one. If it is missing, the communication will be rejected with the message "Segundo apellido obligatorio".

### Document type doesn't match nationality

SES checks that the document type is consistent with the guest's nationality. Submitting a DNI for a foreign national, or a foreign passport for a Spanish resident, generates this error.

Practical rule: DNI and NIE only for guests who hold those specific documents. For everyone else, passport or national identity card.

### Incorrect phone number format

SES requires the international prefix in `0034` format, **never with the `+` symbol**. A valid phone number for the Ministry:

```
0034612345678   ✓
+34612345678    ✗
```

### Nationality in the wrong format

The Ministry requires the three-letter country code (not two letters). The most common mistakes:

| Country | Wrong | Correct |
|---------|-------|---------|
| United Kingdom | GB | GBR |
| Germany | DE | DEU |
| France | FR | FRA |
| United States | US | USA |

### Establishment code not found

The property's establishment code doesn't exist in SES under that landlord account. Common causes:

- Copied with errors from the portal
- Property registered recently and not yet active
- Property linked to a different landlord account

Verify it in the property record inside the SES.HOSPEDAJES portal.

---

## Code 10121: do not resubmit

Error `10121 — Duplicate communication` is the only first-moment code that **does not require resubmission**. It means the Ministry already has that communication. Resubmitting the same form will generate another 10121 in a loop.

The correct action is to check the status of the original submission to find out whether the guests were registered.

---

## How to tell which moment the problem is at

| Symptom | Where to look |
|---------|--------------|
| Error code at the moment of submission | Table in the previous section |
| Submission confirmed but guests not registered | Check the individual result for each guest |
| Some guests registered, others not | Check the error message for the rejected guests |
| No response after more than 30 seconds | Connectivity issue — retry without duplicating the original form |

---

## What RegistroViajero does for you

[RegistroViajero](/en/blog/automate-guest-registration/) handles both situations automatically: it checks the submission status after each communication, identifies which guests were rejected, and notifies you with the specific reason.

If you have questions about [SES.HOSPEDAJES credentials](/en/blog/ses-hospedajes-credentials/), that article explains in detail the difference between portal credentials and web service credentials, and how to configure the landlord code correctly.
