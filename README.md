# Deal Clarity Hub

"ARMOR — AI DEAL INTELLIGENCE & AGREEMENT PLATFORM

Build a polished, production-quality B2B SaaS web application called Armor.

Armor is an AI-powered business deal intelligence platform that transforms business conversations into structured, verifiable agreements and then tracks the obligations created by those agreements.

PRODUCT VISION

Armor should follow this core workflow:

Business Conversation → Transcript → AI Deal Understanding → Structured Deal → Verification → Agreement → Counterparty Confirmation → Deal Tracking → Completion

The product must NOT feel like a simple meeting recorder, transcription tool, or AI chatbot.

The primary value proposition is:

«Armor understands what business parties actually agreed to and turns the conversation into a structured deal that can be confirmed and tracked.»

The transcript is only an intermediate step.

The final product experience should focus on:

- Agreements

- Financial terms

- Responsibilities

- Deadlines

- Confirmation

- Deal milestones

- Action tracking

---

1. VISUAL IDENTITY

Brand

Product: Armor

Primary tagline:

«Turn business conversations into agreements you can act on.»

Design direction

Create a premium enterprise FinTech/SaaS interface inspired by modern financial dashboards and professional agreement platforms.

Use:

- Deep navy / near-black foundation

- White and soft-gray surfaces

- Subtle electric-blue accent

- Very limited secondary accent colors

- Clean typography

- Rounded cards

- Thin borders

- Soft shadows

- Generous spacing

- Strong visual hierarchy

- Professional icons

- Smooth transitions

- Subtle hover animations

- Desktop-first responsive layout

Avoid:

- Excessive gradients

- Cartoon-style illustrations

- Overly colorful dashboards

- Generic chatbot appearance

- Excessive glassmorphism

- Huge unnecessary headings

- Cluttered screens

Armor should feel like an enterprise financial operating system, not an AI experiment.

---

2. GLOBAL UI SYSTEM

Create a reusable design system across the entire application.

Buttons

Do not use plain text buttons.

Buttons should have:

- Icons

- Clear hover states

- Pressed states

- Disabled states

- Loading states

- Subtle shadow/elevation

- Smooth 150–250ms transitions

- Tooltips where appropriate

Examples:

Primary CTA

"+ New Conversation"

Use a prominent icon and subtle visual emphasis.

Secondary CTA

"Review Agreement"

Success CTA

"✓ Confirm Agreement"

Warning CTA

"Resolve Issue"

Destructive CTA

"End Meeting"

Buttons should visually communicate their purpose.

For important actions, show a loading spinner while processing.

---

3. APPLICATION SHELL

After authentication, use a persistent application layout.

Left Sidebar

Display:

- Armor logo

- Dashboard

- New Conversation

- Deals

- Agreements

- Activity

- Settings

At the bottom:

- Organisation avatar

- Organisation name

- Profile menu

Add:

- Active navigation indicator

- Hover animations

- Icons for every navigation item

- Collapsible sidebar on smaller screens

Top Header

Include:

- Current page title

- Search

- Notifications

- Organisation profile

- Quick action button

Example:

"Search deals, agreements, companies..."

---

4. AUTHENTICATION

Create a professional authentication experience.

Sign Up

Collect:

- Organisation name

- Organisation type

- Industry

- Organisation email

- Phone

- Country

- Address

- Website

- Primary contact name

- Primary contact email

- Primary contact phone

- Password

- Confirm password

- Organisation logo

Use:

- Input icons

- Password visibility toggle

- Validation messages

- Password strength indicator

- Drag-and-drop logo upload

- Progress indicator

After registration, create the organisation profile.

---

5. LOGIN

Create a clean enterprise login screen.

Fields:

- Email

- Password

Options:

- Remember me

- Forgot password

Primary CTA:

Sign In →

Add subtle branding and a short Armor value proposition.

After successful login:

Dashboard

---

6. DASHBOARD

The dashboard should immediately communicate business activity.

Header

Display:

«Good morning, [Organisation Name]»

Supporting text:

«Here's what's happening across your active deals.»

Primary CTA:

＋ New Conversation

---

Quick Conversation Options

Instead of plain cards, create two visually rich action cards.

Online Meeting

Icon:

Video camera

Text:

«Start or join an online business conversation.»

CTA:

Start Online Meeting →

Offline Meeting

Icon:

Microphone

Text:

«Record an in-person business conversation.»

CTA:

Start Recording →

Add hover animation and visual elevation.

---

7. BUSINESS OVERVIEW

Create four premium metric cards:

Active Deals

Number of currently active deals.

Pending Agreements

Agreements waiting for confirmation.

Upcoming Actions

Actions approaching their deadline.

Completed Deals

Successfully completed deals.

Each card should include:

- Icon

- Main number

- Short description

- Small trend indicator

- Hover interaction

---

8. RECENT DEALS

Create a professional deal table/card system.

Each deal should display:

- Deal ID

- Counterparty

- Deal title

- Value

- Status

- Next milestone

- Deadline

- Progress

Example mock data:

ARM-1029

ABC Industries

500 Unit Supply Agreement

₹4,00,000

Status:

"In Progress"

Next Action:

"Advance Payment"

Deadline:

"2d 14h"

Use progress bars and status badges.

Clicking a deal should open:

Deal Detail

---

9. NEW CONVERSATION WORKFLOW

When the user selects New Conversation, show a focused workflow selection page.

Heading:

«Start a Business Conversation»

Subtitle:

«Capture the conversation and let Armor identify the agreement.»

Present two large visual options:

Online Meeting

Video icon + meeting interface.

Offline Meeting

Microphone icon + recording interface.

---

10. ONLINE MEETING EXPERIENCE

Create a Google Meet-inspired meeting interface, but do NOT implement actual Google Meet integration yet.

Main Meeting Area

Display:

- Participant video/avatar cards

- Participant names

- Microphone status

- Camera status

- Connection indicator

Bottom Control Bar

Create visually polished controls:

- Microphone

- Camera

- Screen Share

- More Options

- End Meeting

Use circular icon buttons with tooltips.

The End Meeting button should be visually distinct.

---

AI LISTENING PANEL

On the right side, create a live AI panel.

Header:

ARMOR AI

Status:

"● Listening"

Display:

Live Transcript

Example:

Speaker 1:

«We can supply 500 units at ₹800 per unit.»

Speaker 2:

«Okay, but I need 30 percent advance.»

Speaker 1:

«That works. Delivery should be completed by September 20th.»

Make transcript entries appear progressively.

Include:

- Auto-scroll

- Speaker labels

- Timestamp

- Scrollable transcript

At the top:

"Recording • 24:31"

---

11. END MEETING FLOW

When the user clicks End Meeting, show a confirmation modal.

Title:

«End this conversation?»

Description:

«Armor will process the conversation and prepare the deal information.»

Buttons:

Cancel

End & Process Conversation →

The second button should show a loading state after clicking.

---

12. OFFLINE RECORDING

Create a professional audio recording workspace.

Central microphone control:

Ready

"Start Recording"

Recording

Show:

- Animated recording indicator

- Duration

- Pause

- Resume

- Stop

Processing

Show a visual progress timeline:

✓ Uploading audio

✓ Transcribing conversation

✓ Identifying participants

✓ Extracting financial terms

✓ Preparing deal information

Use realistic mock processing for the prototype.

Do not require an actual backend yet.

---

13. TRANSCRIPT WORKSPACE

This is an important intermediate stage.

Page title:

Conversation Transcript

Display a summary header:

- Meeting date

- Duration

- Participants

- Meeting type

- Recording status

Create a large transcript editor.

Example:

Rahul — Buyer

«I need 500 units for the next shipment.»

Arjun — Seller

«We can provide 500 units at ₹800 per unit.»

Rahul — Buyer

«I'll make 30 percent advance payment.»

Arjun — Seller

«Delivery can be completed by September 20th.»

---

Transcript Tools

Provide:

- Edit

- Search

- Copy

- Change speaker

- Correct text

- Add timestamp

- Undo/Redo

Show a subtle badge:

"AI Generated"

Allow manual corrections.

Important:

Do NOT immediately generate the agreement.

The user must first review the transcript.

Primary CTA:

Continue to Deal Analysis →

---

14. AI DEAL ANALYSIS

After transcript confirmation, display an AI processing experience.

Use a professional progress interface.

Show:

✓ Transcript processed

✓ Participants identified

✓ Financial terms detected

✓ Deal conditions extracted

✓ Responsibilities identified

✓ Deadlines identified

Then reveal the analysis.

---

15. STRUCTURED DEAL SUMMARY

Create a clean financial-style summary.

Parties

Buyer

Rahul / Company

Seller

Arjun / Company

---

Deal Information

Product:

"500 units"

Quantity:

"500"

Price:

"₹800 / unit"

Total:

₹4,00,000

---

Payment Structure

Advance:

30% — ₹1,20,000

Balance:

70% — ₹2,80,000

Use a visual payment breakdown bar.

---

Delivery

Deadline:

20 September 2026

---

Responsibilities

Buyer

- Pay ₹1,20,000 advance

- Pay remaining amount after delivery

Seller

- Provide 500 units

- Complete delivery by 20 September 2026

---

16. AI VERIFICATION LAYER

Add a unique visual feature to make Armor feel more intelligent.

Every important extracted term should contain a verification status.

Examples:

Total Amount

₹4,00,000

"✓ Confirmed"

Delivery Date

20 September 2026

"✓ Confirmed"

Payment

30% Advance

"⚠ Needs Confirmation"

Use subtle status colors and icons.

---

AMBIGUITY DETECTION

If the AI detects conflicting information, display a dedicated alert card.

Example:

Confirmation Required

«The conversation contains two different delivery dates:

September 20 and September 25.»

Buttons:

Resolve Issue →

Ignore

When Resolve is clicked, open a small selection interface allowing the user to choose the correct value.

This interaction is important because Armor should not blindly trust AI extraction.

---

17. DEAL EDITOR

Before generating the final agreement, provide a complete editable deal workspace.

Title:

Review Deal Agreement

All extracted information must be editable.

Fields:

- Deal title

- Buyer

- Seller

- Product/service

- Quantity

- Unit price

- Total amount

- Payment terms

- Delivery terms

- Responsibilities

- Deadlines

- Conditions

- Additional notes

Allow users to:

- Edit fields

- Add fields

- Remove fields

- Reorder sections

Add autosave indicator:

"Saved just now"

---

18. AGREEMENT PREVIEW

Create a split-screen experience.

Left

Editable deal information.

Right

Live agreement preview.

The preview should look like a professional business agreement document.

At the bottom:

Save Draft

Confirm Agreement →

---

19. FINAL DEAL AGREEMENT

After confirmation, generate a professional agreement page.

Header:

ARMOR DEAL AGREEMENT

Deal ID:

"ARM-1029"

Status:

"Awaiting Confirmation"

Use a clean document-style layout.

Sections:

- Parties

- Deal Overview

- Financial Terms

- Payment Terms

- Delivery

- Responsibilities

- Conditions

- Additional Notes

Do not claim the agreement is legally binding unless actual legal-signature infrastructure exists.

---

20. AGREEMENT CONFIRMATION

Display confirmation status for each party.

Party A

Organisation

"✓ Confirmed"

Party B

Counterparty

"● Awaiting Confirmation"

Primary CTA:

Send Agreement →

Secondary:

Download Preview

---

21. SEND AGREEMENT

Clicking Send Agreement opens a professional modal.

Fields:

Counterparty Email

"[email]"

Email Subject

"Deal Agreement — ARM-1029"

Show an email preview.

Example:

«Hello,

Following our recent business conversation, Armor has prepared the agreed deal terms for your review.

Please review the agreement and confirm the terms.

Deal ID: ARM-1029

View Agreement

Regards,

Armor»

CTA:

Send Agreement →

After sending:

Show a success toast:

Agreement sent successfully.

---

22. COUNTERPARTY VIEW

Create a separate secure-looking agreement page.

Important:

The counterparty must NOT see the internal Armor dashboard.

Show only:

- Armor branding

- Deal ID

- Parties

- Deal value

- Payment terms

- Delivery

- Responsibilities

- Conditions

CTA:

✓ I Confirm These Terms

Secondary:

Request Changes

---

REQUEST CHANGES

When clicked, display:

«What would you like to change?»

Large text area.

CTA:

Submit Change Request

After submission, simulate:

"Changes Requested"

---

23. DEAL STATUS SYSTEM

Use consistent visual status badges throughout the application.

Statuses:

- Draft

- Under Review

- Awaiting Counterparty

- Confirmed

- Changes Requested

- Active

- Completed

Each status should have an icon and clear visual treatment.

---

24. DEAL DETAIL

Once an agreement becomes active, show a detailed deal workspace.

Header:

DEAL #ARM-1029

500 Unit Supply Agreement

₹4,00,000

Status:

"● Active"

---

DEAL TIMELINE

Create a horizontal/vertical milestone timeline.

✓ Conversation completed

✓ Transcript verified

✓ Deal created

✓ Agreement sent

✓ Agreement confirmed

● Advance payment

● Delivery

○ Final payment

Each milestone should show:

- Description

- Responsible party

- Due date

- Current status

---

25. ACTION TRACKER

Create a financial workflow section called:

Upcoming Actions

Do not make this look like a basic reminder list.

Each action should be presented as a financial obligation card.

Advance Payment

₹1,20,000

Responsible:

Buyer

Countdown:

"2d 14h 32m"

---

Delivery

500 units

Responsible:

Seller

Countdown:

"9d 04h"

---

Final Payment

₹2,80,000

Status:

"Waiting for delivery"

Use progress indicators and countdown timers.

---

26. DEALS DIRECTORY

Create a searchable Deals page.

Top section:

Deals

Subtitle:

«Manage every agreement and financial commitment in one place.»

Search:

"Search by deal, company, person or ID"

Filters:

- All

- Draft

- Under Review

- Awaiting Confirmation

- Active

- Completed

- Changes Requested

Use either a professional table or responsive cards.

Columns:

- Deal ID

- Counterparty

- Deal

- Value

- Status

- Created

- Next Milestone

Clicking a row opens Deal Detail.

---

27. AGREEMENTS PAGE

Create a dedicated Agreement management page.

Display:

- Agreement ID

- Deal ID

- Counterparty

- Sent date

- Confirmation status

- Last updated

- Actions

Actions:

- View

- Resend

- Edit

- Copy Link

Add filtering and search.

---

28. ACTIVITY CENTER

Create an activity timeline.

Examples:

"Agreement ARM-1029 confirmed"

"Payment milestone approaching"

"Deal ARM-1029 created"

"Counterparty requested changes"

"Transcript verified"

Each activity should include:

- Icon

- Timestamp

- Description

- Related deal

---

29. ORGANISATION SETTINGS

Create a professional settings interface.

Sections:

Organisation

- Logo

- Organisation name

- Industry

- Organisation type

- Website

- Address

- Country

Primary Contact

- Name

- Email

- Phone

Account

- Email

- Password

- Security

Provide:

Save Changes

After saving:

"Organisation profile updated successfully."

---

30. NOTIFICATIONS

Create a notification center.

Examples:

🔔 Counterparty confirmed ARM-1029

⚠ Payment deadline approaching

✓ Agreement successfully created

⚠ Changes requested by counterparty

Allow:

- Mark as read

- View related deal

- Clear notification

---

31. MOCK DATA

Use realistic Indian B2B financial examples.

Example deals:

ARM-1029

500 Unit Supply Agreement

₹4,00,000

ARM-1031

Business Consulting Agreement

₹12,50,000

ARM-1034

Equipment Purchase Agreement

₹8,40,000

ARM-1038

Service Contract

₹2,75,000

Use:

- Indian company-style names

- Indian currency formatting

- Realistic dates

- Realistic participants

Clearly treat all data as prototype/demo data.

---

32. FRONTEND ARCHITECTURE

Build the application using a clean component-based architecture.

Create reusable components for:

- Sidebar

- Header

- Buttons

- Cards

- Status badges

- Modals

- Toasts

- Form inputs

- Deal cards

- Agreement sections

- Timeline

- Progress indicators

- Countdown cards

- Transcript messages

- AI verification indicators

- Tables

- Empty states

- Loading states

Avoid creating every screen as isolated code.

---

33. BACKEND-READY DATA STRUCTURE

Even though this is initially a frontend prototype, structure the application so real APIs can easily replace mock data.

Create logical entities/models for:

Organisation

- id

- name

- type

- industry

- email

- phone

- country

- address

- website

- logo

- primaryContact

User

- id

- organisationId

- name

- email

- role

Conversation

- id

- organisationId

- type

- participants

- startedAt

- endedAt

- duration

- recordingStatus

- transcriptStatus

Transcript

- id

- conversationId

- speaker

- timestamp

- text

- confidence

Deal

- id

- organisationId

- conversationId

- title

- buyer

- seller

- product

- quantity

- unitPrice

- totalAmount

- paymentTerms

- deliveryTerms

- responsibilities

- conditions

- status

- createdAt

Agreement

- id

- dealId

- sender

- counterparty

- recipientEmail

- status

- sentAt

- confirmedAt

- changeRequest

Milestone

- id

- dealId

- title

- amount

- responsibleParty

- dueDate

- status

Use mock/local state initially, but keep the structure API-friendly.

---

34. INTERACTION REQUIREMENTS

The prototype must feel functional.

Important buttons must work.

Implement:

- Page navigation

- Modal opening/closing

- Form editing

- Save states

- Loading states

- Toast notifications

- Status changes

- Transcript editing

- Speaker changes

- Agreement confirmation

- Request changes

- Search

- Filtering

- Countdown timers

- Progress indicators

When real backend functionality is unavailable, simulate the workflow using local/mock state.

Do not leave major buttons inactive.

---

35. MICRO-INTERACTIONS

Add subtle professional motion.

Examples:

- Cards lift slightly on hover

- Buttons respond when clicked

- Progress bars animate

- Status changes animate

- Toasts slide in

- Modals fade/scale in

- Transcript messages appear smoothly

- AI processing steps animate

- Countdown updates dynamically

- Sidebar navigation transitions smoothly

Keep animations professional and fast.

---

36. EMPTY, LOADING & ERROR STATES

Every major page should have proper states.

Loading

Use skeleton loaders.

Empty

Example:

«No active deals yet.»

CTA:

＋ Create Your First Deal

Error

Display a clear error card with:

Try Again

Do not show blank screens.

---

37. RESPONSIVE DESIGN

Desktop should be the primary experience.

Also support:

- Tablet

- Mobile

On smaller screens:

- Collapse sidebar

- Convert tables to cards

- Stack deal information

- Make meeting controls accessible

- Keep primary CTAs visible

---

38. IMPORTANT PRODUCT DIFFERENTIATION

Armor must communicate a different value proposition from standard meeting applications.

Do NOT position the product as:

«Record meeting → Generate summary.»

Instead position it as:

«Have a business conversation → Armor understands what was agreed → converts it into a structured agreement → both parties verify it → Armor tracks the resulting financial obligations.»

This should be visible throughout the product experience.

---

39. COMPLETE USER JOURNEY

The application should support this end-to-end prototype flow:

Create Organisation

↓

Login

↓

Dashboard

↓

New Conversation

↓

Online Meeting / Offline Recording

↓

Conversation Completed

↓

Transcript Generated

↓

User Reviews Transcript

↓

AI Deal Analysis

↓

Financial Terms Extracted

↓

AI Verification

↓

Ambiguities Resolved

↓

Editable Deal Created

↓

Agreement Preview

↓

Agreement Confirmed

↓

Agreement Sent

↓

Counterparty Reviews

↓

Confirm / Request Changes

↓

Deal Becomes Active

↓

Milestones & Financial Obligations

↓

Countdowns & Action Tracking

↓

Deal Completed

---

40. FINAL QUALITY REQUIREMENT

The final website should look like a real startup product that could be presented to:

- Investors

- Enterprise customers

- Business partners

- Product teams

It should feel polished enough for a professional product demo.

Prioritize:

Clarity + Trust + Financial Intelligence + Workflow + Professionalism

Armor should visually communicate:

«“This platform turns conversations into accountable business agreements.”»

Build the frontend as a cohesive product, not as a collection of disconnected pages.

Use realistic content and functional interactions throughout the experience."

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/814185c0-f597-4bcc-81f7-bb8ba4423462).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
