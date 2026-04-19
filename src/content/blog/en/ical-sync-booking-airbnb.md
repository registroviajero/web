---
title: "Sync Booking, Airbnb and VRBO with iCal: a guide to automating your reservations"
description: "What an iCal is, how to get the link on each portal, and how to sync it with your management software so reservations flow in on their own without copying them by hand."
date: 2026-04-18
author: "RegistroViajero"
lang: "en"
translationKey: "ical-sync"
---

If you manage a tourist accommodation, you probably know the pain: the same night booked on Booking, another on Airbnb, another direct through WhatsApp, and the constant fear of a **double booking**. The solution isn't to work faster: it's to **sync** the calendars with each other using a standard format the industry has been using for decades — **iCal**.

In this article we explain what iCal is, how to get the link on the main portals (Booking.com, Airbnb, VRBO, Google Calendar), and how to connect it to your guest registration software so each reservation automatically generates the corresponding digital check-in.

## What an iCal is

**iCal** (`.ics` format, RFC 5545) is an open standard for exchanging calendar information. Each calendar event is described with fields like start date, end date, title, description, and a unique identifier.

Applied to the accommodation world, an iCal is essentially a **public URL** (something like `https://ical.booking.com/v1/export?token=...`) that, when queried, returns a text file with all the reservations for that property. Any software capable of reading iCal can import those reservations and keep them up to date.

### Advantages of iCal

- **Open standard**: it doesn't depend on a specific commercial agreement between portals.
- **Universal reading**: Google Calendar, Outlook, Apple Calendar, and most PMSs support it.
- **Automatic refresh**: once the URL is configured, the software queries it periodically and detects changes.
- **No API or complex keys**: a URL is enough.

### Limitations

- **Reduced information**: iCal tells you there's a reservation between two dates, but it **does not always** include the guest's name, email, or phone. For full data, you still need the source portal or a direct API integration.
- **Refresh frequency**: portals don't publish changes instantly; delays of 5–30 minutes are possible.
- **No write access**: in most cases iCal is read-only. To **block** dates on a portal you need to write back, which requires a more complex two-way sync.

## What information it carries and what it doesn't

In practice, a typical OTA portal iCal includes:

- **Check-in date** and **check-out date** (CHECKIN/CHECKOUT or DTSTART/DTEND).
- **Unique reservation identifier** (UID).
- **Source** (Booking, Airbnb, VRBO, etc.).
- **Status** (confirmed, cancelled).
- In some cases, **guest name** (partial or full) and **reservation code**.

What it usually **does not** carry: DNI, passport, date of birth, address. In other words, **it does not replace check-in**: it only tells you there's a stay. You still have to collect the guest's personal data for the guest report — the difference is that the reservation **already exists** in your system and all that's left is to send them the link.

## How to get the iCal link on each portal

### Booking.com

1. Log in to the Booking **Extranet** with your property owner account.
2. Go to **Rates and availability → Calendar sync** (the exact name may vary by version).
3. Click **"Export calendar"**.
4. Copy the **iCal URL** it shows you.

Booking exports an iCal **per accommodation and per room type**, so if you have several rooms or apartments, each one has its own URL.

### Airbnb

1. Log in to your Airbnb **host** account.
2. Go to **Listings → select the accommodation → Calendar → Availability**.
3. In the **"Sync calendars"** section, click **"Export calendar"**.
4. Copy the **URL** Airbnb provides.

Each Airbnb listing has its own iCal. If you manage several, you'll have one URL per listing.

### VRBO / Expedia

1. Log in to the **VRBO host** dashboard.
2. Go to **Calendar → Import/Export** (or "Calendar sync").
3. On the **"Export"** tab, copy the iCal URL.

Expedia Traveler Connection has a similar flow through its partner dashboard.

### Google Calendar

If you handle direct reservations or manual blocks in a Google Calendar, you can also expose it as iCal:

1. Open **Google Calendar**.
2. In the calendar list on the left, click the three dots on the calendar you want to expose → **"Settings and sharing"**.
3. Scroll down to **"Secret address in iCal format"** and copy the URL.

> **Caution:** this URL is secret. Anyone who has it can see all your events. Do not share it outside the software you're going to give it to.

### Other portals

Most specialist platforms (HomeAway, Tripadvisor Rentals, Rentalia, SpainHolidays, etc.) have a similar section under names like **"Sync", "Export calendar", "Calendar feed"**, or **"iCal feed"**. Look in the host dashboard.

## How to connect an iCal to RegistroViajero

Once you have the iCal URLs for each portal, the flow in [RegistroViajero](https://registroviajero.com) is straightforward:

1. **Dashboard → Accommodations → select the property → "Calendars" tab**.
2. Click **"Add iCal source"**.
3. Paste the URL, choose the **source name** (Booking, Airbnb, VRBO, Google Calendar, or "Other"), and save.
4. The system runs an **immediate first sync** and then starts syncing automatically every hour.

From that point on, each new iCal event turns into a **reservation** in your dashboard, with check-in and check-out dates already pre-filled. If you configure **auto check-in link**, the system automatically generates the unique link for the guest as soon as the reservation appears, ready for you to forward or to go out by email if you have that option enabled.

When a reservation is cancelled on the source portal, the iCal stops including it and the system detects the difference. If you have **auto-cancellation** enabled, the reservation in RegistroViajero is marked as cancelled and, if it had already been sent to the Ministry, the corresponding cancellation notice is submitted.

## Best practices for syncing multiple portals

Connecting a single iCal is rarely enough. You'll usually want to connect every portal where you publish the same accommodation, and that's where the nuances start:

### 1. One iCal URL per portal, not per room

If you have an entire apartment on Booking and the same apartment on Airbnb, you need **both URLs** connected to the same property in your software. That way the internal calendar reflects reservations from both portals.

### 2. Block dates on both sides

An incoming Booking reservation, in principle, does not automatically block availability on Airbnb. For that you need a **two-way sync**, which is traditionally achieved:

- With **bidirectional iCal** in both directions (each portal consumes the other's iCal). This works, but with a **delay**: a Booking reservation may take 15–30 minutes to show up as a block on Airbnb.
- With a **channel manager** (direct API integration). It's faster and more reliable, but also more expensive and complex.

For medium volumes, bidirectional iCal between portal pairs is usually enough. For high volumes or hotly contested properties, a channel manager is worth it.

### 3. Standardize accommodation naming

If the same apartment has different names on each portal ("Centro 1A", "Downtown Apartment 1A", "Apt 1A"), make sure you associate it with the **same accommodation** in your software. Otherwise, you end up with duplicate reservations across different properties in the dashboard.

### 4. Review periodically

Portals sometimes **regenerate** the iCal URL (especially after password changes or security resets). If sync stops working, the first thing to check is whether the URL is still valid. In RegistroViajero you get an automatic notification when a sync fails repeatedly.

## Common cases and how to resolve them

### "The reservation shows up with the wrong dates"

Some portals report the end date as **the day after checkout** (the "up to but not including" convention). Others report the same day as the checkout. The software should normalize this, but if you see an extra night, check the time zone and the portal's convention.

### "A guest cancelled but it still shows up"

There can be two reasons: the portal is slow to publish the cancellation in its iCal (up to 1–2 sync cycles), or the iCal is cached. Force a **manual sync** from the dashboard to resolve the second case.

### "I want to see the guest's name but it doesn't show"

Many OTA portal iCals omit the name for **privacy** reasons. The actual holder and real data come in when you send the guest the **digital check-in link**, which is where they fill in their personal details under RD 933/2021.

### "The iCal brings in very old reservations"

By default, most iCals export a wide range (6–12 months ahead and sometimes a few months back). That's normal: nothing is imported blindly — only future or in-progress reservations trigger the creation of a new record.

## iCal and RD 933/2021 compliance

Connecting iCal **does not replace** the obligation to send the guest report to the Ministry. What it does is **feed** your system with reservations so that:

1. The **stay is created** with the correct dates from minute one.
2. The **check-in link** reaches the guest without you having to create it manually.
3. When the guest fills in their data and signs, the **lodging reservation** and the **guest report** are generated and submitted automatically.
4. If the guest cancels, the **cancellation** is also communicated automatically.

In other words, iCal is **step zero** of automation. Without iCal, you have to create each reservation by hand before you can send the guest the check-in.

## Next steps

To get the most out of iCal, it helps to have the adjacent topics clear as well:

- [What RD 933/2021 requires](/en/blog/royal-decree-933-2021-guide) — the full regulatory framework.
- [How to obtain SES.HOSPEDAJES credentials](/en/blog/ses-hospedajes-credentials) — without credentials, no submission is possible.
- [Penalties for non-compliance](/en/blog/royal-decree-933-2021-penalties) — what's at stake if you don't comply.
- [Registering minors](/en/blog/minors-guest-registration) — specific rules for children and teenagers.

And if you want to see it working end to end, [create a free account](https://app.registroviajero.com/register) and connect your first iCal in 5 minutes. 15-day trial, no card required.

---

*The exact menu names on Booking, Airbnb, and other portals may change. This guide reflects the general flow at the time of publication.*
