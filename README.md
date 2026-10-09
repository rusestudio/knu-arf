# KNU ARF Festival Frontend

A mobile-first festival companion app prototype built with React, TypeScript, and Vite. This project explores the KNU ARF experience as a polished front-end experience for festival discovery, map navigation, stamp collection, and personal festival tracking.

## Overview

ARF is designed as a festival guide and engagement app for visitors. The current prototype focuses on the user journey of discovering events, finding locations on a map, collecting themed festival characters, and reviewing personal progress through a MY dashboard.

This repository is intentionally a front-end prototype rather than a production-ready service. It uses mock data, curated visual assets, and route-based UI screens to simulate the intended experience.

## Features

- Festival home screen with event highlights and status overview
- Map-based exploration with category filters and search interactions
- Booth and food-truck discovery flows
- Character collection / stamp-book experience
- User dashboard with festival statistics and rewards
- Mobile-first layout with bottom navigation
- Route-based screen structure for a single-page app experience

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Lucide React
- Static local assets for branding and visual content

## Project Structure

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

## Pages and User Flow

### Home
The landing screen highlights festival events and introduces the central festival experience. It includes a hero banner, event cards, quick festival status tiles, and promotional visuals.

### Map
The map page simulates festival navigation with category chips, marker placement, food truck search flows, and a bottom sheet for details.

### AR
The AR route is included in the navigation flow but currently acts as a placeholder, as camera/WebAR functionality has not been implemented yet.

### Stamp Collection
The stamp page provides a collectible character experience with tabs, pagination, unlock states, and a character detail route.

### MY Dashboard
The MY page shows profile-like festival statistics, collected content, visited booths, matching records, and reward information.

## Routing

```text
/
├── /home
├── /map
├── /ar
├── /stamp
├── /stamp/:characterId
├── /my
```

The app redirects the root path to `/home`.

## Design Direction

The interface follows a warm autumn festival aesthetic with:

- maple-inspired orange and brown colors
- soft cream backgrounds and rounded cards
- mobile-first layout and bottom navigation
- friendly character-driven visual language
- seasonal festival branding and storytelling

## Mock Data and Scope

This project intentionally uses mock content to represent festival events, booth information, characters, user progress, and map markers. All of this data lives in `src/data/` and is designed to support a front-end prototype without a backend.

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open the local address shown by Vite, typically:

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

## Current Status

This project is currently a frontend prototype and is intentionally scoped as such.

Included:

- responsive UI for festival browsing and exploration
- custom mobile app layout and navigation
- mock map interaction and category browsing
- stamp collection flow and detail screen
- personal dashboard experience

Not included:

- real backend integration
- authentication system
- live APIs or database
- actual AR / camera functionality
- GPS or spatial mapping
- production-grade persistence
- real matching/reward backend logic

## Notes

The project is designed to validate the app flow, visual style, and interaction patterns of the ARF festival concept. It is a strong prototype foundation for future expansion into a full production product.

## Future Scope

Potential next steps include:

- real API and data integration
- actual AR feature development
- user authentication and profile persistence
- reward logic and real matching behavior
- backend services for events, booths, and users
- more complete content creation for every festival character and location

## Summary

KNU ARF is a mobile-first festival companion prototype that demonstrates how users could explore a university festival through an intuitive, theme-rich front-end experience. The project is built to feel polished and complete as a UI concept while clearly remaining a prototype rather than a production-ready application.
