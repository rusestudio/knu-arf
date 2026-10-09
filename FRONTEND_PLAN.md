# ARF Frontend Development Plan

## 1. Project Goal

The first development phase focuses only on implementing the **frontend UI/UX of ARF** based on the service design document.

The objective is to create a working mobile-first prototype where users can navigate through the major screens and experience the planned user flow.

### Included in Phase 1

- React-based frontend
- Tailwind CSS styling
- Mobile-first responsive layout
- Page navigation
- Reusable UI components
- Mock festival/booth/character data
- Basic UI interactions
- Modal / bottom-sheet interactions
- Placeholder images and icons
- Screen flow based on the ARF design

### Not Included Yet

- AR functionality
- Camera / WebAR integration
- Backend API
- Database
- Real authentication
- WebSocket / real-time communication
- GPS / spatial anchor functionality
- Actual matching algorithm
- Actual reward system

These features will be integrated after the frontend prototype is stable.

---

# 2. Recommended Tech Stack

## Core

- **React**
- **Vite**
- **TypeScript**
- **Tailwind CSS**

## Supporting Libraries

### Routing

Use:

`react-router-dom`

Example routes:

```text
/
├── /onboarding
├── /home
├── /map
├── /booth/:id
├── /collection
├── /matching
├── /decorate
└── /my
```

### Icons

Use one consistent icon library such as:

- Lucide React

### Optional UI Components

A component library can be used together with Tailwind to reduce development time.

Recommended:

- shadcn/ui

Useful components include:

- Button
- Dialog
- Drawer
- Sheet
- Tabs
- Card
- Badge
- Input

However, the ARF design should remain the main visual reference rather than using the default component-library appearance.

---

# 3. Initial Project Setup

Create the React project structure and install the basic dependencies.

```bash
npm create vite@latest arf-frontend -- --template react-ts

cd arf-frontend

npm install

npm install react-router-dom lucide-react
```

Configure Tailwind CSS according to the current Tailwind + Vite setup.

Then start the development server:

```bash
npm run dev
```

Before implementing individual pages, confirm that:

- React runs correctly
- Tailwind styles work
- routing works
- the project structure is ready

---

# 4. Project Structure

Recommended structure:

```text
src/
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── illustrations/
│
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Header.tsx
│   │   ├── BottomNav.tsx
│   │   ├── SearchBar.tsx
│   │   ├── BottomSheet.tsx
│   │   └── Modal.tsx
│   │
│   ├── map/
│   │   ├── MapMarker.tsx
│   │   ├── CategoryFilter.tsx
│   │   └── BoothCard.tsx
│   │
│   ├── collection/
│   │   ├── CharacterCard.tsx
│   │   └── CollectionProgress.tsx
│   │
│   └── matching/
│       ├── MatchCard.tsx
│       └── GameCard.tsx
│
├── pages/
│   ├── SplashPage.tsx
│   ├── OnboardingPage.tsx
│   ├── HomePage.tsx
│   ├── MapPage.tsx
│   ├── BoothDetailPage.tsx
│   ├── CollectionPage.tsx
│   ├── MatchingPage.tsx
│   ├── DecoratePage.tsx
│   └── MyPage.tsx
│
├── data/
│   ├── booths.ts
│   ├── characters.ts
│   └── mockUser.ts
│
├── types/
│   ├── booth.ts
│   ├── character.ts
│   └── user.ts
│
├── layouts/
│   └── MobileLayout.tsx
│
├── App.tsx
└── main.tsx
```

---

# 5. Development Order

Do not implement every page independently.

Build the frontend from the **shared structure → main user flow → secondary features**.

## Step 1 — Global Design System

First extract the basic visual system from the ARF design.

Define:

- primary color
- secondary colors
- background colors
- text colors
- border radius
- shadows
- spacing
- font sizes
- button styles
- card styles

Create reusable components such as:

```text
Button
IconButton
Card
Header
BottomNavigation
SearchBar
Badge
Modal
BottomSheet
```

This prevents each page from having slightly different styling.

---

# 6. Mobile Layout

ARF is primarily designed as a mobile service.

Create a common mobile layout:

```text
┌─────────────────────┐
│       Header        │
├─────────────────────┤
│                     │
│                     │
│    Page Content     │
│                     │
│                     │
├─────────────────────┤
│   Bottom Nav Bar    │
└─────────────────────┘
```

For desktop development, the application can be centered with a mobile-width container.

Example:

```tsx
<div className="mx-auto min-h-screen max-w-md">
    {children}
</div>
```

This makes development on a computer easier while preserving the mobile interface.

---

# 7. Implement Main Navigation

Implement React Router before developing detailed pages.

Basic navigation:

```text
Splash
   ↓
Onboarding
   ↓
Home
   ↓
Festival Map
```

Main bottom navigation can connect:

```text
Home
Map
Collection
MY
```

Secondary features such as Matching and Space Decoration can be entered through Home or Map depending on the final design.

At this stage, pages can simply contain placeholder content.

The objective is to verify that the entire application flow works.

---

# 8. Home Screen

Implement the main festival dashboard.

Possible frontend elements based on the design include:

- festival information
- main banner
- map entry
- AR experience entry
- character collection progress
- matching entry
- space decoration entry
- event/reward information

For Phase 1, all values should come from mock data.

Example:

```ts
const festival = {
    name: "강원대학교 축제",
    location: "강원대학교 춘천캠퍼스",
    status: "진행중"
}
```

---

# 9. Festival Map

The festival map is one of the core screens.

For the frontend prototype, **do not implement a real map API yet**.

Use the festival map image/design as the background.

Implement UI elements on top of it:

```text
Search bar

Category filters

[Food] [Event] [Booth] [...]

Festival Map

       ● Booth
             ● Booth

    ● Event

Bottom navigation
```

Booth markers can initially use absolute positioning.

Clicking a marker should open:

- Booth Card
- Bottom Sheet

Example:

```text
Booth name
Category
Opening time
Short description

[View Details]
```

---

# 10. Booth Detail Screen

Create a reusable booth detail page.

Display mock information such as:

```text
Booth Image

Booth Name

Category

Location

Operating Time

Description

Menu / Activities

[Find Booth]

[AR Experience]
```

The **AR Experience button should exist visually**, but it does not need to activate AR yet.

It can navigate to an AR placeholder screen.

---

# 11. AR Placeholder Screen

Create a temporary page representing the future AR experience.

Example:

```text
┌─────────────────────┐
│ ←                   │
│                     │
│                     │
│     Camera / AR     │
│      Placeholder    │
│                     │
│                     │
│     [AR START]      │
└─────────────────────┘
```

This is useful because the frontend flow can already include AR without implementing the actual technology.

Later this page can be replaced by the WebAR implementation.

---

# 12. Character Collection / 도감

Create the character collection interface.

Use mock character data.

Example:

```ts
const characters = [
    {
        id: 1,
        name: "Character A",
        collected: true
    },
    {
        id: 2,
        name: "Character B",
        collected: false
    }
]
```

Display:

```text
Character Collection

3 / 8 collected

[Character] [???]
[Character] [???]
[Character] [Character]
```

Uncollected characters can appear locked or hidden.

Character artwork can initially use placeholder images.

---

# 13. Reward / Lucky Draw UI

Implement only the interface.

Example states:

```text
Not eligible

↓

Collection requirement completed

↓

Draw available

↓

Reward result
```

No actual reward logic or server verification is required during Phase 1.

Use local mock state to demonstrate the interaction.

---

# 14. Matching UI

Implement the complete matching flow visually.

Example flow:

```text
Matching Introduction
        ↓
Create Matching Profile
        ↓
Start Matching
        ↓
Searching...
        ↓
Match Found
        ↓
Choose Game
        ↓
Game Result
        ↓
Contact Exchange
```

The matching process should use mock data.

Example:

```ts
const mockMatch = {
    nickname: "FestivalUser",
    interests: ["Music", "Food"],
}
```

No real user matching or WebSocket communication is required yet.

---

# 15. Space Decoration UI

Implement only the UI surrounding the future AR feature.

Example:

```text
Space Decoration

[Start Drawing]

Drawing tools:

✏️ Pen
🧽 Eraser
↩ Undo
🗑 Clear

[Save]
```

The camera/AR area can use a placeholder background.

Do not implement:

- spatial anchors
- AR synchronization
- multiplayer drawing
- WebSocket synchronization

These belong to a later development phase.

---

# 16. MY Page

Create the personal dashboard using mock user data.

Possible sections:

```text
Profile

Character Collection

Festival Activity

Rewards

Settings
```

Example:

```ts
const mockUser = {
    nickname: "ARF User",
    charactersCollected: 4,
    rewards: 1
}
```

---

# 17. Mock Data Layer

Avoid hardcoding data directly inside page components.

Create separate mock files.

Example:

```text
src/data/booths.ts
src/data/characters.ts
src/data/mockUser.ts
```

Example:

```ts
export const booths = [
    {
        id: 1,
        name: "컴퓨터공학과 부스",
        category: "booth",
        location: "공학관 앞",
        description: "..."
    }
]
```

Later:

```text
Mock Data
```

can simply be replaced with:

```text
REST API
```

without rebuilding the UI.

---

# 18. Frontend State

For the first prototype, React state is enough.

Use:

```text
useState
useContext
```

for things such as:

- selected booth
- selected map category
- collected characters
- matching state
- modal state
- reward state

Avoid adding Redux or another large state-management library unless the application becomes significantly more complex.

---

# 19. Responsive Testing

Primary target:

```text
Mobile
360px – 430px
```

Also verify:

```text
Tablet
Desktop
```

Desktop does not need a completely different design.

It can display the mobile interface centered on the screen.

---

# 20. Development Milestones

### Milestone 1 — Foundation

- Vite + React + TypeScript
- Tailwind
- Router
- project structure
- design tokens
- common components

### Milestone 2 — Core Festival Flow

Implement:

```text
Splash
→ Onboarding
→ Home
→ Map
→ Booth Detail
→ AR Placeholder
```

At this point the main ARF user journey should already be clickable.

### Milestone 3 — Collection

Implement:

```text
Character Collection
Reward UI
Lucky Draw UI
```

### Milestone 4 — Social Features

Implement:

```text
Matching
Matching Profile
Matching Result
Game Selection
Space Decoration UI
```

### Milestone 5 — Personal Area

Implement:

```text
MY
Profile
Activity History
Collection History
```

### Milestone 6 — UI Polish

Check:

- spacing
- typography
- colors
- animations
- loading states
- empty states
- bottom sheets
- modal behavior
- navigation consistency

Compare each screen against the original ARF design.

---

# 21. Phase 1 Completion Criteria

The frontend prototype is considered complete when:

- All major screens from the ARF design exist.
- Users can navigate through the complete app flow.
- The interface works properly on mobile screen sizes.
- Reusable components are used consistently.
- Festival/booth/character information comes from mock data.
- Interactive UI elements work locally.
- AR screens have functional placeholders.
- No backend is required to demonstrate the prototype.
- No database is required.
- No AR implementation is required.

The result should behave like a **clickable functional prototype**, rather than a collection of static screenshots.

---

# 22. Future Integration

After the frontend is complete, development can move to:

```text
Phase 1
Frontend Prototype
        ↓
Phase 2
Backend + REST API
        ↓
Phase 3
PostgreSQL
        ↓
Phase 4
Authentication / User Data
        ↓
Phase 5
AR Integration
        ↓
Phase 6
Location / Spatial Anchoring
        ↓
Phase 7
WebSocket / Real-Time Features
        ↓
Phase 8
Testing + Deployment
```

The frontend should therefore be developed in a way that allows mock data and placeholder functions to be replaced later without redesigning the pages.


//catergory 별 kiv