# Implementation Plan - Industrial Operations & Manufacturing Consultant Website

The goal is to transform the provided HTML/Tailwind/FontAwesome template into a modern, modular React application using Vite and Shadcn UI components. The website will serve as a professional landing page for an industrial consulting firm.

## Scope Summary
- **Landing Page:** A single-page React application with multiple sections (Hero, About, Services, Contact, Footer).
- **Modern UI:** Using Tailwind CSS (v4 via @tailwindcss/vite) and Lucide React icons (replacing FontAwesome for better React integration).
- **Responsive Design:** Fully responsive mobile-first approach.
- **Interactivity:** Smooth scrolling, mobile navigation menu, and a functional contact form (client-side validation).

## Non-Goals
- Server-side form processing (contact form will be client-side only).
- Multi-page routing (unless explicitly requested later; currently a single-page layout).
- Backend database or Supabase integration.

## Assumptions
- The user wants a direct translation of the provided HTML structure into a React/Shadcn environment.
- Lucide-React is preferred over FontAwesome for a standard Shadcn/React setup, but I will include FontAwesome if specific icons are required.
- The project uses Tailwind CSS v4 as indicated by the `@tailwindcss/vite` plugin in `vite.config.ts`.

## Affected Areas
- `src/App.tsx`: Main entry point and layout.
- `src/components/`: New components for sections (Navbar, Hero, About, Services, Contact, Footer).
- `src/index.css`: Tailwind configuration and global styles.

## Phases

### Phase 1: Setup & Layout
- Ensure all necessary UI components (Button, Input, Textarea, Card) are available from the `src/components/ui` directory.
- Setup the main layout wrapper in `App.tsx`.
- Implement the sticky Navigation Bar with mobile menu logic.
- **Owner:** `frontend_engineer`

### Phase 2: Content Sections
- Implement the **Hero Section** with the background image and CTA.
- Implement the **About Section** with the value proposition grid.
- Implement the **Services Section** using Shadcn Card components or custom styled grid.
- **Owner:** `frontend_engineer`

### Phase 3: Interactive Elements
- Implement the **Contact Form** with basic validation and a success state.
- Implement the **Footer** with social links and company info.
- Add smooth scroll behavior and mobile menu transitions.
- **Owner:** `frontend_engineer`

### Phase 4: Refinement
- Fine-tune typography, spacing, and colors to match the "Industrial/Professional" aesthetic (Slate and Teal color scheme).
- Ensure image placeholders are optimized.
- Final responsive check.
- **Owner:** `quick_fix_engineer`

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Build the core application structure and sections.
2. quick_fix_engineer — Final styling tweaks and responsiveness.

**Per-agent instructions:**

### 1. frontend_engineer
- **Phases:** 1, 2, 3
- **Scope:** Create a modular React version of the provided HTML template.
- **Files:**
  - Create `src/components/Navbar.tsx`, `src/components/Hero.tsx`, `src/components/About.tsx`, `src/components/Services.tsx`, `src/components/Contact.tsx`, `src/components/Footer.tsx`.
  - Update `src/App.tsx` to include these sections.
  - Use `lucide-react` for icons (Home, Info, Briefcase, Mail, Settings, CheckCircle, ChartLine, TrendingUp, Smartphone).
- **Depends on:** none
- **Acceptance criteria:**
  - All sections from the HTML template are present.
  - Mobile menu works (toggles visibility).
  - Navigation links scroll to the correct IDs.
  - Contact form is styled and has a basic "Submit" console log/toast.

### 2. quick_fix_engineer
- **Phases:** 4
- **Scope:** Polish the UI and fix any CSS/Tailwind inconsistencies.
- **Files:** `src/index.css`, `src/App.tsx`, and component files.
- **Depends on:** Phase 3
- **Acceptance criteria:**
  - Colors match the Slate-900 and Teal-500/400 theme perfectly.
  - Background image in Hero section is correctly overlaid.
  - Mobile responsiveness is flawless on all sections.
