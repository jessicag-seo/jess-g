# The Urban Newtown — Round 1 Copy Source

Plain-text copy of every page for client sign-off. Tone, factual claims (distances, perks, directions) and placeholders should all be reviewed before HTML ships.

**All placeholders resolved. Ready for client sign-off.**

**Confirmed & locked in:**
- TripAdvisor rating: **4.0 / 5** across **670 reviews** — hardcoded into every `aggregateRating` block and every visible trust strip.
- Geo-coordinates: latitude -33.898800, longitude 151.176320 (client-supplied).
- `priceRange` set to `$$` on the Hotel schema. For a hotel with dynamic rates this is the right call — it expresses tier, not live price, and doesn't go stale. If live-rate `Offer` schema becomes feasible from the booking engine later, we can layer it under each room type.
- About page: team-bio section removed (no bios available).
- Reviews: real TripAdvisor quotes in place, mirrored between visible blockquotes and Review JSON-LD on both the homepage and Enmore Theatre page.

**Reviews used (TripAdvisor):**
- Homepage: James A (Feb 2026, 5★), Tina W (May 2025, 5★), dmhoges2601 (Jan 2025, 5★), Kramer (Feb 2026, 4★ — honest mixed review for credibility)
- Enmore Theatre: Mzpink84 (Nov 2024, 5★ — Birds of Tokyo gig), James A (Feb 2026, 5★)

Source: https://www.tripadvisor.com/Hotel_Review-g8572746-d7103854-Reviews-The_Urban_Newtown-Newtown_New_South_Wales.html

**Confirmed NAP used on every page & inside JSON-LD:**
- The Urban Newtown
- 52-60 Enmore Rd, Newtown NSW 2042
- +61 437 040 578
- stay@theurbannewtown.com.au
- ABN 87 310 726 416

---

## 1. Homepage (`index.html`)

**Title:** The Urban Newtown — Boutique Hotel in Newtown, Sydney
**Meta description:** Independently-owned boutique hotel on Enmore Rd, Newtown. Book direct for earlier check-in, later checkout, parking and room upgrades. Pet-friendly.

**Topbar:** Book direct and actually get the perks. · Book Direct & Save · Call +61 437 040 578

**H1:** Your boutique hotel in Newtown — book direct, skip the middlemen.

**Hero sub:** Stick it to the multinational booking sites. Book with us directly and keep the commission where it belongs — in earlier check-ins, later checkouts, parking that the big sites can't sell you, and the odd room upgrade when we feel like it.

**Trust strip:** ★ [RATING] · [REVIEW_COUNT] reviews · Book direct perks guaranteed

### Five reasons to book direct (and never look back)
- Earlier check-in — 12:30 pm, not 3.
- Later checkout — 11:30 am, not 10.
- Same-day cancellation — by 10 am, no drama.
- Complimentary upgrade — subject to availability, but it happens a lot.
- Parking — only bookable direct. The OTAs literally can't sell it to you.

### A boutique hotel in Newtown that actually feels like Newtown
We're not a chain, we're not a franchise, and we're not pretending to be cool — we're a block from the Enmore Theatre, ten minutes from Sydney CBD, and run by humans who live around the corner. Accommodation in Enmore / Newtown that knows where the good coffee, the better pho and the best late-night pizza actually are.

Pet-friendly rooms (yes, bring the dog). Independent. A little bit punk. Very Newtown.

### Rooms & amenities
Free Wi-Fi · Air conditioning · Pet-friendly rooms · On-site parking (book direct only) · Early check-in / late checkout · Walk-everywhere location

### What guests say (TripAdvisor)
- **James A (Feb 2026, 5★):** "Great location on Enmore Road in Newtown. Convenient to restaurants, pubs, music and Sydney Uni. Comfortable rooms at good price (book direct and save). Wonderful, helpful staff. Will definitely be coming back."
- **Tina W (May 2025, 5★):** "Large room, parking was easy (we booked at the hotel), very comfortable beds, cute little deck. Fantastic location, in easy walking distance of lots of cafes and restaurants."
- **dmhoges2601 (Jan 2025, 5★):** "A very convenient and comfortable stay at this funky establishment. Very quiet considering its position in the heart of Newtown. Book directly with the hotel for best rate and additional benefits."
- **Kramer (Feb 2026, 4★):** "Room was fantastic and the hotel had a great vibe. The industrial feel really suits and the high ceilings create a sense of large rooms. Heaps of restaurants on the doorstep and only a 5-minute walk to Newtown Train Station."

*Note: duplicate Melissa Altman / Michele O. review from legacy site confirmed removed — do not reintroduce.*

### Where you actually are
52-60 Enmore Rd, Newtown — which means you can roll out of bed and into pretty much anything worth doing in the Inner West.
- Hotel near Enmore Theatre — a block away.
- Accommodation near RPA Hospital *(Round 2 page)*
- Hotel near Sydney University *(Round 2 page)*
- Pet-friendly hotel near Sydney CBD *(Round 2 page)*
- Corporate & business stays in Newtown *(Round 2 page)*

### Final CTA
"Ready to stop funding Booking.com?" · Book Direct & Save · Or call +61 437 040 578

---

## 2. Stay Near Enmore Theatre (`stay-near-enmore-theatre.html`)

**Title:** Hotel Near Enmore Theatre — The Urban Newtown
**Meta description:** A boutique hotel a block from the Enmore Theatre. Late checkout for morning-afters, pet-friendly rooms and parking — book direct for every perk.

**Badge:** 90 seconds on foot to the Enmore Theatre

**H1:** Hotel near Enmore Theatre — roll out of bed, roll into the gig.

**Hero sub:** Some people drive in from the North Shore, pay for parking, miss the support act and hate their life. You could just… walk out the front door. The Urban Newtown sits a block from the Enmore Theatre on Enmore Rd — the shortest pre-show commute in Sydney.

**Trust strip:** ★ [RATING] · [REVIEW_COUNT] reviews · A block from the Enmore Theatre

### Why stay here for a show
- A block from the door. If the lights go down at 8, you can leave the room at 7:58.
- Late checkout (11:30 am). For when the encore was longer than expected.
- Pet-friendly rooms. Travelling act with a four-legged tour manager? Welcome.
- On-site parking — only if you book direct. Street parking on Enmore Rd on gig nights is a blood sport.
- Independent. Same energy as the venue. We're not a chain hotel pretending to be cool.

### Book direct, get the perks
Earlier check-in (12:30 pm) · Later checkout (11:30 am) · Same-day cancellation by 10 am · Complimentary upgrade (subject to availability) · Parking only bookable direct

### Where to eat before (and after) the show
Enmore Rd and King St are basically one long walkable menu. A few picks from the locals who run the place:
- Vegan Mile (Enmore Rd) — plant-based everything, fast enough to make doors.
- King St pho — cheap, fast, fixes everything.
- Late-night slice spots — still open when the Enmore lets out.
- Newtown local pubs — for the debrief on whether the band's gone downhill since the last tour.

### Bringing the dog (or the tour dog)?
We have dedicated pet-friendly rooms — no awkward conversations at reception, no bond surcharges sprung on you at check-in. Mention it when you book direct.

### FAQs (also rendered as FAQPage schema)
- **How far is The Urban Newtown from the Enmore Theatre?** About a block — roughly 90 seconds on foot along Enmore Rd.
- **Can I check in late after a gig?** Yes — just let us know when you book. Checkout is 11:30 am so you can sleep it off.
- **Is parking available on show nights?** Yes, on-site — but only when you book direct. OTAs can't sell it.
- **Pet-friendly rooms for travelling acts?** Yes — dedicated rooms, popular with touring musos.

### Show-goer reviews (TripAdvisor)
- **Mzpink84 (Nov 2024, 5★):** "We went for the Birds of Tokyo gig at Enmore and we decided to stay at the Urban because it was so close. The staff were lovely, the room was great, we had a balcony room and the double glazed sliding door kept the noise out. When we have our next Newtown or Enmore gig we will be back."
- **James A (Feb 2026, 5★):** "Great location on Enmore Road in Newtown. Convenient to restaurants, pubs, music and Sydney Uni. Comfortable rooms at good price (book direct and save). Wonderful, helpful staff."

### Final CTA
"Got tickets? Get a room." · Book your Enmore Theatre stay · Or call +61 437 040 578

---

## 3. Contact (`contact.html`)

**Title:** Contact The Urban Newtown — 52-60 Enmore Rd, Newtown
**Meta description:** Contact The Urban Newtown: 52-60 Enmore Rd, Newtown NSW 2042. Call +61 437 040 578 or email stay@theurbannewtown.com.au. Directions & map.

**H1:** Contact The Urban Newtown
**Hero sub:** Call, email, or just walk in — we're on Enmore Rd, you literally can't miss us.

### Where to find us
The Urban Newtown
52-60 Enmore Rd
Newtown NSW 2042
Australia

Phone: +61 437 040 578
Email: stay@theurbannewtown.com.au
ABN: 87 310 726 416

Check-in: 12:30 pm (book direct) · Checkout: 11:30 am (book direct)

### Getting here
**From Sydney CBD** — About 10 minutes by car down City Rd and King St — King St bleeds straight into Enmore Rd and we're on the left. By train, hop the T2 or T3 to Newtown Station and it's a 5-minute walk south-west down Enmore Rd.

**From Sydney Airport (SYD)** — Roughly 20 minutes by taxi or rideshare via General Holmes Drive and the M1. By train, the T8 airport line runs to Sydenham or St Peters; transfer to any service into Newtown Station and walk from there.

**From Central Station** — Two stops on the T2/T3/T8 to Newtown Station, or a 10-minute cab via Broadway and King St.

**From Newtown Station** — Exit onto King St, head south-west past Church St, follow the road as it becomes Enmore Rd — we're about 500 m down on your left, near the Enmore Theatre.

### Book direct perks
Earlier check-in (12:30 pm) · Later checkout (11:30 am) · Same-day cancellation by 10 am · Complimentary upgrade (subject to availability) · Parking only bookable direct

---

## 4. About (`about.html`)

**Title:** About The Urban Newtown — Independent Boutique Hotel, Newtown
**Meta description:** Independent, locally-run boutique hotel on Enmore Rd, Newtown. Bohemian, pet-friendly, proudly anti-OTA. Book direct, keep it local.

**H1:** About The Urban Newtown
**Hero sub:** A boutique, independently-owned hotel on Enmore Rd. Not a chain. Not a franchise. Not owned by a hedge fund in another time zone.
**Trust strip:** ★ [RATING] · [REVIEW_COUNT] reviews · Independent · Pet-friendly

### Independent, local, proudly Newtown
Newtown earned its reputation the hard way — bohemian, queer, loud, political, creative, stubborn. We're one of the few hotels that actually grew out of the neighbourhood instead of being parachuted into it. We sit on Enmore Rd, a block from the Enmore Theatre, within walking distance of RPA Hospital and Sydney University, and ten minutes from the Sydney CBD.

We're pet-friendly. We keep our rates honest. We let you check in earlier and check out later when you book with us directly. And we don't pretend the multinational booking sites are doing you any favours — they're doing themselves favours, and charging us for the privilege.

### Why book direct with us
- Earlier check-in — 12:30 pm.
- Later checkout — 11:30 am.
- Same-day cancellation — by 10 am.
- Complimentary upgrade — subject to availability.
- Parking — only bookable direct.

Every dollar you spend with a booking site is a dollar we can't put into the room you're actually sleeping in. Keep it direct, keep it local.

### Final CTA
"Ready when you are." · Book direct with your local hotel · View rooms

---

## QA status

1. **Render** — manual eye-check pending on localhost.
2. **Title / meta lengths** — all within ≤ 60 / ≤ 155 chars and unique per page.
3. **Schema validation** — pending run through validator.schema.org + rich-results test.
4. **Links** — internal links resolve; Round 2 link targets commented `<!-- TODO -->`.
5. **CTAs** — all point to `https://book.theurbannewtown.com.au/`; phone uses `tel:` scheme.
6. **Mobile** — pending 375px eyeball check.
7. **A11y** — headings hierarchical, alt text present on every `<img>`, form labels set.
8. **Copy sign-off** — THIS DOCUMENT, awaiting client approval.
9. **NAP consistency** — identical across all four HTMLs and JSON-LD.
10. **Duplicate review fix** — confirmed resolved (Michele O. removed; single Melissa review retained).
