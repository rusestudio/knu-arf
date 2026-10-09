# ARF Festival Frontend Prototype

This project is a mobile-first React + TypeScript prototype for the KNU ARF festival experience. It focuses on the front-end UX for browsing festival events, exploring a map, collecting character stamps, and viewing a personalized MY page. The app is intentionally designed as a polished UI concept rather than a production service with real backend integration or AR functionality.

## Overview

ARF is envisioned as a festival companion app that helps visitors:

- discover ongoing and upcoming festival events
- explore festival locations and categories on a map
- find booths, food trucks, and facilities
- collect festival-themed characters/stamps
- track festival progress and personal rewards in a dashboard

The current implementation uses mock data and static visuals to simulate the experience in a way that feels close to the intended product direction.

## Core purpose

The project is a front-end prototype that demonstrates how users might:

1. land on a festival home screen
2. navigate between key festival sections
3. explore a location map with category filtering
4. collect character-based content through a stamp book
5. view a festival profile dashboard with progress-related panels

This is not a real deployed product or a full app backend. It is a UI/UX prototype built to validate layout, flow, visual language, and interaction patterns.

## Tech stack

- React 19
- TypeScript
- Vite
- react-router-dom
- Tailwind CSS
- Lucide React
- Static image assets for all visual content

## App structure

The project is organized around a mobile experience with shared layout components and route-based screens.

```text
src/
├── App.tsx
├── index.css
├── main.tsx
├── assets/
│   ├── home/
│   ├── map/
│   ├── stamp/
│   └── my/
├── components/
│   ├── BottomNavigation.tsx
│   ├── home/
│   ├── map/
│   └── stamp/
├── data/
│   ├── characters.ts
│   ├── boothinfo.ts
│   ├── events.ts
│   ├── foodTrucks.ts
│   ├── mapMarkers.ts
│   └── my.ts
├── layouts/
│   └── MobileLayout.tsx
├── pages/
│   ├── ARPage.tsx
│   ├── HomePage.tsx
│   ├── MapPage.tsx
│   ├── MyPage.tsx
│   └── StampPage.tsx
└── types/
```

## Main screens

### Home

The home page acts as the festival landing screen. It includes:

- a hero banner promoting the festival theme
- a compact AR map call-to-action
- a horizontally scrollable event list
- a festival status card with quick summary stats
- decorative festival visuals and seasonal branding

### Map

The map page is the main exploration view for festival locations. It includes:

- category chips such as booths, performances, food, restrooms, and resting spaces
- map marker positions based on mock festival data
- search interaction triggered by a floating search button
- food truck search flow with result-focused UI
- bottom sheet/drawer behavior when a place or location is selected

### AR

The AR route exists as a placeholder screen in the prototype. It is included as part of the navigation flow, but actual camera or WebAR features are not implemented yet.

### Stamp collection

The stamp/collection page shows a set of festival characters in a card grid. It supports:

- category tabs for different character groups
- pagination for collection browsing
- locked and unlocked character states
- detail screen routing for each unlocked character

Character details include:

- profile area
- festival category tag
- short description
- likes/features/discovery location
- image gallery

### MY dashboard

The MY page presents a personal festival summary with:

- stat tiles such as discovered characters, booths visited, matching records, and rewards
- collection progress section
- visited booth cards
- matching record cards
- reward display area
- seasonal profile styling and festival-themed visuals

## Routing

The app uses browser routing with these primary routes:

```text
/
├── /home
├── /map
├── /ar
├── /stamp
├── /stamp/:characterId
├── /my
```

The root route redirects to `/home`.

## Design direction

The visual identity follows a warm autumn festival concept with:

- orange and brown seasonal palette
- maple-inspired accent styling
- soft cream and beige surfaces
- rounded cards and mobile-first spacing
- emphasis on festival discovery and friendly character-driven content

This is consistent with the prototype’s emphasis on a festival event atmosphere instead of a generic utility app aesthetic.

## Data model approach

The application relies heavily on mock data stored in `src/data/`:

- `events.ts` — festival event information
- `characters.ts` — collection data, unlock states, and detail metadata
- `boothinfo.ts` — map location and booth descriptions
- `mapMarkers.ts` — marker positions and categories
- `foodTrucks.ts` — food truck dataset for the search interaction
- `my.ts` — MY page dashboard and rewards data

These modules are static mock sources designed to simulate real content without requiring a backend.

## Asset handling

The app uses local image assets for almost all major visuals, including:

- festival banners
- map icons and markers
- character artwork
- festival UI cards
- profile and reward illustrations

This gives the prototype a polished, content-rich feel while preserving the frontend-only nature of the project.

## Local development

### Install dependencies

```bash
npm install
```

### Run the app in development mode

```bash
npm run dev
```

Then open the local URL shown by Vite, typically:

```text
http://localhost:5173
```

### Production build

```bash
npm run build
```

### Lint check

```bash
npm run lint
```

## Current status and scope

This project is currently a front-end prototype and should be understood as such.

Included:

- responsive mobile-first UI
- themed festival exploration screens
- mock map interactions
- collection and profile experience
- static asset-driven visual design

Not included:

- real backend services
- database integration
- authentication
- live data fetching
- actual AR / camera implementation
- GPS tracking or spatial mapping
- production-grade state persistence
- real matching logic or reward validation

## Important note

The project is intentionally scoped to frontend demonstration and UX validation. The data, screens, and interactions are designed to resemble the intended festival service, but they do not represent a completed production application.

## Suggested next steps

Future work could include:

- real API integration for events and locations
- actual AR feature implementation
- user authentication and profile persistence
- real matching/reward logic
- backend services for booths, users, and content management
- expanded onboarding or content completeness for each character and booth

## Summary

ARF is a mobile festival companion prototype built with React, TypeScript, and Vite. It simulates a complete user journey for festival exploration, map-based discovery, stamp collection, and personal dashboard tracking. The current codebase is polished as a frontend concept, but intentionally excludes the production systems that would normally support a live festival app.
