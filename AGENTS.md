# AGENTS.md — AI Coding Agent Guidelines

This document defines the architectural, aesthetic, and technical rules for AI agents operating inside this repository.

---

## 1. Project Overview & Tech Stack
- **Framework:** Next.js `10.x` (Pages Router) + React `17.x`.
- **Styling:** Tailwind CSS `2.2.x` (JIT mode enabled) + custom CSS properties in `styles/globals.css`.
- **Motion & Scroll:** `framer-motion` (`v6.5.1`, compatible with React 17) and `@studio-freight/lenis` for smooth scrolling.
- **Theming:** `next-themes` (`dark` default theme on `#0A0A0A`, switchable to `light` `#F4F3EE`).
- **Node Compatibility:** Scripts in `package.json` use `NODE_OPTIONS='--openssl-legacy-provider'` so Webpack 5 in Next.js 10 builds cleanly on modern Node.js versions (Node 18/20/22+). Always use `--legacy-peer-deps` if installing npm packages.

---

## 2. Single Source of Truth (`constants/data.js`)
- All personal metadata, career history, academic background, technical stack domains, and social links live in `constants/data.js`.
- **Strict Content Integrity:**
  - **NEVER invent** fake projects, companies, metrics, or work history.
  - **NEVER re-introduce** personal phone numbers or curriculum/CV download buttons unless explicitly instructed by the user.
  - **NEVER re-introduce** the deleted `Selected Architecture` / `Projects` showcase or `FIG. 01` portrait image unless explicitly requested.

---

## 3. Art Direction & UI Standards ("Editorial Engineering")
When modifying or adding UI components, adhere strictly to the established aesthetic:
1. **No Generic "AI Slop":** Avoid centered generic hero layouts, 3-column rounded shadow cards, purple/blue neon gradients, or `Inter` font defaults.
2. **Color Tokens:**
   - Background Primary: `#0A0A0A` (Dark) / `#F4F3EE` (Light)
   - Surface Elevated: `#111111`
   - Primary Text: `#F4F3EE` (Dark) / `#0A0A0A` (Light)
   - Muted Metadata: `#8E8D8A`
   - Accent Signal: `#FF4D1C` (Signal Vermilion)
3. **Typography:**
   - Headings & Body: `'Space Grotesk', sans-serif` (`.heading-architectural` and `.heading-section`). Ensure large display headings never clip horizontally inside `overflow-hidden` masks.
   - Technical Labels & Indices: `'JetBrains Mono', monospace` (`font-mono uppercase tracking-widest`).
4. **Structural Hairlines:** Use `.hairline-t`, `.hairline-b`, `.hairline-l`, `.hairline-r`, and `.hairline-border` (`1px solid` at `12%` opacity) to preserve the exposed architectural blueprint grid.
5. **Performance & Accessibility:**
   - Animate **only** composite properties (`transform`, `opacity`).
   - Use the exponential easing curve `[0.16, 1, 0.3, 1]` (`EXPO_EASE`).
   - Always respect `useReducedMotion()` from `framer-motion` and the `@media (prefers-reduced-motion: reduce)` rule in `styles/globals.css`.

---

## 4. Verification Protocol
Before completing any task that modifies code, styles, or dependencies:
1. Check for unused imports, dead files, or orphaned assets.
2. Run `npm run build` and verify that all static and server-rendered pages compile with **exit code 0**.
