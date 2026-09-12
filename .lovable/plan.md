# Armor frontend prototype

## Goal
Build a cohesive, production-quality frontend demo that turns a business conversation into a verified agreement and tracks resulting obligations.

## Experience
- Create a persistent enterprise app shell with responsive sidebar, top search, notifications, organisation menu, and quick actions.
- Build authentication screens for sign-up and login with validation, password strength, logo upload, and staged organisation setup.
- Create the dashboard, deal and agreement directories, activity center, notifications, and organisation settings using realistic Indian B2B demo data.
- Implement the full conversation flow: online meeting, offline recording, transcript review, AI analysis, ambiguity resolution, editable deal, agreement preview, send flow, and counterparty confirmation/change request.
- Build an active deal workspace with milestones, financial obligation cards, progress, and live countdowns.

## Interaction and states
- Use local state for navigation, edits, filters, search, modals, save indicators, loading/processing sequences, status changes, and toast feedback.
- Ensure major actions advance the demo journey; include useful empty, loading, and error patterns where relevant.
- Provide desktop-first layouts that adapt into mobile cards and compact navigation.

## Design system
- Establish a deep navy, white, soft-gray, and electric-blue token system with restrained status colors.
- Add reusable icon buttons, action buttons, fields, cards, badges, tables, modals, tooltips, timelines, transcript rows, progress bars, and verification labels.
- Use subtle 150–250ms motion, light elevation, thin borders, rounded corners, and clear financial hierarchy.

## Technical structure
- Keep mock entities typed and API-ready for organisations, users, conversations, transcripts, deals, agreements, and milestones.
- Organize shared shell, UI primitives, data, and domain screens into focused reusable modules.
- Add unique page metadata and verify the primary journey and responsive rendering in the live preview.

## Scope note
This milestone is a frontend prototype. Recording, video calls, email delivery, legal signatures, and persistence are simulated rather than connected to external services.
