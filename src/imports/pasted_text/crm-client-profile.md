REEVEOS — STITCH DESIGN PROMPTS
═══════════════════════════════════════════════════════════════

BRAND RULES (apply to both prompts):
- Colours: Rich Black #111111, Gold #C9A84C, White #FFFFFF
- Font: Figtree for everything — headings, body, UI
- Theme: Light. Clean white backgrounds. No dark mode.
- Border radius: 16px on cards, 10px on inputs, 20px on pills
- Borders: Never heavier than 1px #EBEBEB
- Shadows: Soft — 0 2px 8px rgba(0,0,0,0.06) on cards
- Icons: Monochrome only. No emojis. No coloured icons.
- iPad-first: All touch targets minimum 44px
- Feels like a luxury salon's internal system, not software

These prompts are for a UK SaaS booking platform for beauty
salons and aesthetics clinics. The users are salon owners
and therapists — non-technical, using iPads and laptops.
They think in clients, treatments, rooms, and their diary.
They should never feel like they're using a database.
═══════════════════════════════════════════════════════════════
─────────────────────────────────────────────────────────────
PROMPT 1: CRM CLIENT PROFILE PAGE
WITH PERSONALISATION ENGINE + CHECK-IN / CHECK-OUT
─────────────────────────────────────────────────────────────
Design a full-page client profile for a beauty salon CRM. This is the deep-dive view when a salon owner taps a client's name from anywhere in the system — the calendar, the client list, a booking. It replaces a cramped side panel with a proper page that tells the full story of the client relationship.
The target user is Natalie — she owns a skin clinic with 4 therapists. She needs to see everything about a client at a glance, constantly add notes ("her skin flared up", "likes wine on arrival", "holiday next week — avoid peels"), and check clients in and out of appointments with configurable checklists. She is not technical. This should feel like opening someone's personal file at a luxury clinic.
LAYOUT — Full page, no sidebar. Back arrow top-left returns to previous screen.
HEADER SECTION:

Large avatar circle (64px, client initials, soft gradient in gold tones)
Client name large and bold (22px Figtree 800) beside the avatar
Inline tag badges next to the name: coloured soft pills like "VIP" (gold bg), "Monthly Regular" (green bg), "Package Holder" (blue bg). These are auto-generated and manually added.
A small "+ Tag" pill button with dashed border to add custom tags like "Ibiza Crew", "Bridal Party", "Sensitive Skin"
Below the name: email and phone (both tappable — phone opens dialler, email opens mail)
Top right: three action buttons — "Check In" (green #059669 fill, white text), "Check Out" (blue #2563EB fill, white text), "Book Appointment" (#111111 fill, white text). Large, iPad-friendly, 44px height.

STATS ROW — Horizontal row of 5 metric cards:

Lifetime Value: "£2,840" in gold, label below
Visit Frequency: "28 days" in green, label below
Total Visits: "12", label below
Package Progress: a small circular progress ring showing 4/6 sessions used
Preferred Service: "Microneedling" as text

Each card is a white rounded rectangle with subtle border, number big and bold on top, label small and grey below.
TAB BAR — Horizontal tabs below the stats:
"Overview" | "Notes & History" | "Treatments" | "Products" | "Personalisation"
Active tab has black background with white text. Inactive tabs are grey text on white. Tabs sit inside a single white card with 4px padding, pill-shaped active indicator.
TAB 1 — OVERVIEW:

"Next Appointment" card: rounded, subtle gold-tinted background. Shows service name (bold), date/time, therapist name, room. Below it, a warm amber highlight box with personalisation notes: "Likes Sauvignon Blanc for evening appointments. Holiday to Marbella end of March — avoid peels 2 weeks before." This note is the hero of the card — it's what the therapist glances at before the client walks in.
"Consultation Status" card: badge showing "Clear" (green), "Flagged" (amber), or "Expired" (red) with expiry date. Brief summary: "No contraindications. Last updated 28 Feb 2026."
"Product Restock" row: 3 product cards side by side. Each shows product name, purchase date, price, and a horizontal progress bar showing estimated usage. When the bar is nearly full, it turns orange with "Likely needs restocking" text. Green when plenty of time left.

TAB 2 — NOTES & HISTORY (this is the most important tab):

Add-note bar at the top: a row with 3 type-selector buttons (Personal / Treatment / Alert), a text input, and an "Add" button. Must be fast — one tap to select type, type the note, tap Add. No friction.
Below: a vertical timeline of notes. Each note is a white card with:

Left: a coloured dot on a vertical line (gold for personal, blue for treatment, red for alert)
Content: date and staff name who wrote it, type badge (small pill), note text
Example personal note: "Loves a glass of Sauvignon Blanc — offer on arrival for evening appointments. Makes her feel welcome." by Grace, 01 Feb 2026
Example treatment note: "Slight redness on left cheek — advised extra SPF for 48hrs. Skin responding well to course." by Grace, 28 Feb 2026


This must feel like a living journal of the client relationship. Scrollable, newest at top.

TAB 3 — TREATMENTS:

List of past appointments as rows in a clean table-like layout
Each row: date (day number large, month small), service name (bold), therapist, room
Right side of each row: two small metric blocks — Reaction (1-5, colour coded green-to-red) and Comfort (1-5, colour coded)
Scannable at a glance. No clutter.

TAB 4 — PRODUCTS:

List of purchased products, each as a card
Product name, purchase date, price
Horizontal progress bar showing estimated product lifespan remaining
Orange when nearly empty, green when fresh
"Send Restock Reminder" button per product (small, #111111 fill)

TAB 5 — PERSONALISATION SETTINGS:

Grid of toggle cards, 2 columns
Each card: label (bold), one-line description (grey), toggle switch on the right
Toggles: "Auto-rebook prompt" / "Product restock alerts" / "Birthday campaign" / "Package renewal" / "Seasonal campaigns" / "Show therapist notes in client portal"
Description example: "Send reminder when visit frequency suggests they're due"
Toggle uses standard iOS-style switch: green when on, grey when off

CHECK-IN FLOW — When "Check In" button is tapped, the tab content area transitions to show the check-in panel (not a modal, not a popup — it replaces the tab content smoothly):

Green accent header bar with client name and today's appointment details (service, time, therapist)
"Auto-Detected Alerts" section in warm yellow background: auto-populated from the system — consultation form status, last skin reaction level with score, package session number, any flagged staff notes. No typing needed — this info is pulled automatically.
"Pre-Treatment Checklist" below: a list of configurable questions with large checkboxes (44px tap targets). Default questions: "Any medical changes since last visit?", "Pregnancy check", "Using prescribed home care products?", "Recent sun exposure or sunbed use?", "Client expectations for today?". The business owner can configure which questions appear.
Notes textarea at the bottom for anything extra
Large green "Confirm Check-In" button, full width

CHECK-OUT FLOW — Same approach, replaces tab content:

Blue accent header bar
"Treatment Notes" textarea: what was done, areas treated, settings used
"Skin Reaction" scale: 5 large tappable buttons (1 to 5), labelled "None" to "Severe"
"Client Comfort" scale: same 5-button layout, "Poor" to "Excellent"
Two toggle switches: "Aftercare instructions given" and "Client informed of post-treatment expectations"
"Follow-up Notes" textarea: recommend next treatment, timing, anything to watch
Green info box at the bottom: "On complete, the system will auto-send: Aftercare email with treatment-specific video, SMS notification, Portal update, Google Review request (2hrs later), Tip prompt for therapist"
Large blue "Complete Appointment" button, full width

DESIGN DETAILS:

Figtree font throughout. #111111 for headings, #888 for secondary text, #C9A84C for gold accents
White cards on #FAFAF8 page background
Border radius 16px on cards, 12px on buttons, 20px on tag pills
No heavy borders, no dark outlines. Subtle 1px #EBEBEB borders.
Generous padding (20-24px in cards). Generous whitespace between sections.
iPad landscape orientation as primary viewport (1024x768)
The notes section should feel effortless — adding a note should take 3 taps maximum