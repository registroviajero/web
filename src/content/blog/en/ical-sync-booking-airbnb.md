---
title: "Sync Booking, Airbnb, and VRBO with iCal: A Guide for Property Managers"
description: "What an iCal is, where to find the URL on each portal, and how to sync it with your management software so reservations flow in automatically without copying them by hand."
date: 2026-04-18
updated: 2026-05-01
author: "RegistroViajero"
lang: "en"
translationKey: "ical-sync"
---

If you manage a tourist accommodation, you probably know the pain.

The same night booked on Booking. Another on Airbnb. Another direct through WhatsApp. And the constant fear of a **double booking**.

The fix isn't working faster. It's **syncing** the calendars with each other through a standard the industry has been using for decades — **iCal**.

This guide explains what iCal is, where to find the link on each major portal (Booking.com, Airbnb, VRBO, Google Calendar), and how to connect it to your guest registration software so each reservation automatically generates the corresponding digital check-in.

## What an iCal is

**iCal** (`.ics` format, RFC 5545) is an open standard for exchanging calendar information. Each calendar event is described with fields: start date, end date, title, description, and a unique identifier.

Applied to the accommodation world, an iCal is essentially a **public URL** —something like `https://ical.booking.com/v1/export?token=...`— that, when queried, returns a text file with all the reservations for a property. Any software capable of reading iCal can import those reservations and keep them up to date.

### Advantages

- **Open standard.** Doesn't depend on a commercial agreement between portals.
- **Universal reading.** Google Calendar, Outlook, Apple Calendar, and most PMSs support it.
- **Automatic refresh.** Once configured, the software queries the URL periodically and detects changes.
- **No API or complex keys.** A URL is enough.

### Limitations

- **Reduced information.** iCal tells you there's a reservation between two dates. It doesn't always include the guest's name, email, or phone. For full data, you still need the source portal or an API integration.
- **Refresh frequency.** Portals don't publish changes instantly. Delays of 5–30 minutes are common.
- **No write access.** In most cases iCal is read-only. To **block** dates on a portal you need to write back, which takes a more complex two-way sync.

## What information it carries and what it doesn't

In practice, a typical OTA portal iCal includes:

- **Check-in date** and **check-out date** (CHECKIN/CHECKOUT or DTSTART/DTEND).
- **Unique reservation identifier** (UID).
- **Source** (Booking, Airbnb, VRBO, etc.).
- **Status** (confirmed, cancelled).
- In some cases, **guest name** (partial or full) and **reservation code**.

What it usually does not carry: DNI, passport, date of birth, address. iCal does not replace check-in. It just tells you there's a stay. You still collect the guest's personal data for the guest report — the difference is that the reservation already exists in your system and all that's left is to send the link.

## Where to find the iCal URL on each portal

### Booking.com iCal URL: where to find it

1. Log in to the Booking **Extranet** with your property owner account.
2. Go to **Rates and availability → Calendar sync** (the exact name may vary by version).
3. Click **"Export calendar"**.
4. Copy the **iCal URL** it shows you.

Booking exports an iCal **per accommodation and per room type**. If you have several rooms or apartments, each one has its own URL.

### How to find the iCal URL on Airbnb host calendar

1. Log in to your Airbnb **host** account.
2. Go to **Listings → select the accommodation → Calendar → Availability**.
3. In the **"Sync calendars"** section, click **"Export calendar"**.
4. Copy the **URL** Airbnb provides.

Each Airbnb listing has its own iCal. If you manage several listings of the same flat, each has its own URL.

### VRBO iCal export link for property managers

1. Log in to the **VRBO host** dashboard.
2. Go to **Calendar → Import/Export** (or "Calendar sync").
3. On the **"Export"** tab, copy the iCal URL.

Expedia Traveler Connection has a similar flow through its partner dashboard. **VRBO iCal sync with another platform** —Booking, Airbnb, RegistroViajero— uses the same URL: VRBO doesn't differentiate by destination.

### Google Calendar

If you handle direct reservations or manual blocks in a Google Calendar, you can also expose it as iCal:

1. Open **Google Calendar**.
2. In the calendar list on the left, click the three dots on the calendar you want to expose → **"Settings and sharing"**.
3. Scroll down to **"Secret address in iCal format"** and copy the URL.

> **Caution**: this URL is secret. Anyone who has it can see all your events. Don't share it outside the software you're going to give it to.

### Other portals

Most specialist platforms (HomeAway, Tripadvisor Rentals, Rentalia, SpainHolidays, etc.) have a similar section under names like **"Sync"**, **"Export calendar"**, **"Calendar feed"**, or **"iCal feed"**. Look in the host dashboard.

## How to connect an iCal to RegistroViajero

Once you have the iCal URLs for each portal, the flow in [RegistroViajero](https://registroviajero.com) is straightforward:

1. **Dashboard → Accommodations → select the property → "Calendars" tab**.
2. Click **"Add iCal source"**.
3. Paste the URL, choose the **source name** (Booking, Airbnb, VRBO, Google Calendar, or "Other"), and save.
4. The system runs an **immediate first sync** and then keeps syncing automatically every hour.

From that point on, each new iCal event turns into a **reservation** in your dashboard, with check-in and check-out dates pre-filled. If you configure **auto check-in link**, the system generates the unique link for the guest as soon as the reservation appears, ready for you to forward or to go out by email automatically.

## How often does the Airbnb iCal update bookings?

The most common question. Short answer: it depends on the portal.

- **Airbnb** publishes iCal changes with a typical delay of **2–4 hours**. Sometimes more.
- **Booking** sits between **30 minutes and 2 hours**.
- **VRBO** runs in similar ranges to Booking.
- **Google Calendar** updates almost instantly, but the client consuming the iCal has its own polling cadence.

RegistroViajero polls iCal sources every hour by default. So in practice, a reservation takes the portal's publishing delay plus the next polling cycle to land in your dashboard. For high volume you can force a manual sync from the dashboard.

## iCal sync cancellations on Airbnb, Booking, and VRBO

When a reservation is cancelled on the source portal, the iCal stops including it. The system detects the difference.

If you have **auto-cancellation** enabled, the reservation in RegistroViajero is marked as cancelled. If it had already been sent to the Ministry, the corresponding cancellation notice is submitted automatically.

One caveat. Some portals don't drop the iCal entry immediately. The cancellation can take 1–2 sync cycles to propagate. If a cancelled reservation still shows up, force a manual sync and check again 30 minutes later.

## Best practices for syncing multiple portals

Connecting a single iCal is rarely enough. You'll usually want to connect every portal where you publish the same accommodation. That's where the nuances start.

### 1. One iCal URL per portal, not per room

If you have an entire apartment on Booking and the same apartment on Airbnb, you need **both URLs** connected to the same property in your software. That way the internal calendar reflects reservations from both portals.

### 2. Block dates on both sides

An incoming Booking reservation, in principle, doesn't automatically block availability on Airbnb. For that you need a **two-way sync**:

- With **bidirectional iCal** (each portal consumes the other's iCal). Works, but with a delay: a Booking reservation may take 15–30 minutes to show up as a block on Airbnb.
- With a **channel manager** (direct API integration). Faster and more reliable. Also more expensive and more complex.

For medium volumes, bidirectional iCal between portal pairs is usually enough. For high volumes or hotly contested properties, a channel manager is worth it.

### 3. Standardise accommodation naming

If the same apartment has different names on each portal ("Centro 1A", "Downtown Apartment 1A", "Apt 1A"), make sure you associate it with the **same accommodation** in your software. Otherwise you end up with duplicate reservations across different properties in the dashboard.

### 4. Review periodically

Portals sometimes **regenerate** the iCal URL —especially after password changes or security resets. If sync stops working, the first thing to check is whether the URL is still valid. In RegistroViajero you get an automatic notification when a sync fails repeatedly.

## Common cases and how to resolve them

### "The reservation shows up with the wrong dates"

Some portals report the end date as **the day after checkout** (the "up to but not including" convention). Others report the same day as the checkout. The software should normalise this. If you see an extra night, check the time zone and the portal's convention.

### "A guest cancelled but it still shows up"

Two possible reasons. The portal is slow to publish the cancellation in its iCal (up to 1–2 sync cycles). Or the iCal is cached. Force a **manual sync** from the dashboard to resolve the second case.

### "I want to see the guest's name but it doesn't show"

Many OTA portal iCals omit the name for **privacy** reasons. The actual holder and real data come in when you send the guest the **digital check-in link**, where they fill in their personal details under RD 933/2021.

### "The iCal brings in very old reservations"

By default, most iCals export a wide range (6–12 months ahead and sometimes a few months back). That's normal. Nothing is imported blindly. Only future or in-progress reservations trigger the creation of a new record.

## iCal and RD 933/2021 compliance

Connecting iCal does not replace the duty to send the guest report to the Ministry. What it does is **feed** your system with reservations so that:

1. The **stay is created** with the correct dates from minute one.
2. The **check-in link** reaches the guest without you having to create it manually.
3. When the guest fills in their data and signs, the **lodging reservation** and the **guest report** are generated and submitted automatically.
4. If the guest cancels, the **cancellation** is also communicated automatically.

iCal is **step zero** of automation. Without iCal, you have to create each reservation by hand before you can send the guest the check-in.

## Next steps

To get the most out of iCal, the adjacent topics matter too:

- [How to automate guest registration](/en/blog/automate-guest-registration/) — the full flow, from booking to Ministry submission.
- [What RD 933/2021 requires](/en/blog/royal-decree-933-2021-guide/) — the full regulatory framework.
- [How to obtain SES.HOSPEDAJES credentials](/en/blog/ses-hospedajes-credentials/) — without credentials, no submission is possible.
- [Penalties for non-compliance](/en/blog/royal-decree-933-2021-penalties/) — what's at stake if you don't comply.
- [Registering minors](/en/blog/minors-guest-registration/) — specific rules for children and teenagers.

Want to see it working end to end? [Create a free account](https://app.registroviajero.com/register) and connect your first iCal in 5 minutes. 15-day trial, no card.

---

*The exact menu names on Booking, Airbnb, and other portals may change. This guide reflects the general flow at the time of publication.*
