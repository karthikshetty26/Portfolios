# Connect — Design Guide

> **Purpose:** This document is the single source of truth for the visual and behavioural design system of the *Connect* project. It is intended to be copied verbatim into a new project so that both projects look and behave identically.

---

## 1. Tech Stack & Font Loading

- **Framework:** Next.js (App Router)
- **CSS:** CSS Modules (`*.module.css`) + a single global file (`globals.css`)
- **Fonts:** Loaded via `next/font/google`

```js
// layout.js
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

// Display font — headings, names, key display text
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
});

// Body font — paragraphs, labels, descriptions
const interSans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-body",
});

// Apply both font variables to <body>
<body className={`${plusJakarta.variable} ${interSans.variable}`}>
```

**Usage convention:**
| Role | Variable | Font Family |
|---|---|---|
| Display / Headings | `var(--font-display)` | Plus Jakarta Sans |
| Body / Labels / Descriptions | `var(--font-body)` | Inter |

---

## 2. Color Palette

All colors are defined as CSS custom properties on `:root`. Override dark values in `[data-theme="dark"]`.

### 2.1 Base Colors

| Token | Light Value | Dark Value | Usage |
|---|---|---|---|
| `--background` | `#ffffff` | `#000000` | Page background |
| `--foreground` | `#363636` | `#C9C9C9` | Primary text |
| `--foreground-05` | `#3636368f` (~56% alpha) | `#C9C9C98F` | Secondary/muted text |
| `--overlay` | `#ecf0f4` | `#0f0f0f` | Subtle surface tint (decorative elements, scrollbar track) |

### 2.2 Brand Colors

| Token | Value | Notes |
|---|---|---|
| `--cat-color` | `#a4e84c` | Signature lime-green accent |
| `--brand-primary` | `var(--cat-color)` | Alias for the brand accent |

### 2.3 Green Semantic Palette

| Token | Light Value | Dark Value | Usage |
|---|---|---|---|
| `--green-primary` | `#0c7028` | `var(--cat-color)` = `#a4e84c` | Icon foreground color, CTA text, arrow text |
| `--green-bg` | `#eaf5ec` | `rgba(12, 112, 40, 0.25)` | Icon container background |
| `--green-highlight-bg` | `#0c7028` | *(unchanged)* | Highlighted Gmail card background |

### 2.4 Semantic (Transparent / Glass)

#### Borders

| Token | Light | Dark |
|---|---|---|
| `--color-border` | `rgba(0,0,0,0.06)` | `rgba(255,255,255,0.08)` |
| `--color-border-subtle` | `rgba(0,0,0,0.05)` | `rgba(255,255,255,0.08)` |
| `--color-border-divider` | `rgba(0,0,0,0.10)` | `rgba(255,255,255,0.10)` |

#### Shadows

| Token | Light | Dark | Typical usage |
|---|---|---|---|
| `--color-shadow-sm` | `rgba(0,0,0,0.03)` | `rgba(0,0,0,0.20)` | Default card shadow |
| `--color-shadow-md` | `rgba(0,0,0,0.08)` | `rgba(0,0,0,0.20)` | Hover card shadow |
| `--color-shadow-lg` | `rgba(0,0,0,0.15)` | `rgba(0,0,0,0.40)` | Modal shadow, button hover |
| `--color-shadow-xl` | `rgba(0,0,0,0.40)` | `rgba(0,0,0,0.40)` | Modal overlay backdrop |

#### Surfaces & Buttons

| Token | Light | Dark | Usage |
|---|---|---|---|
| `--color-glass-bg` | `rgba(255,255,255,0.70)` | `rgba(15,15,15,0.70)` | Glassmorphic navbar |
| `--color-icon-highlight-bg` | `rgba(255,255,255,0.20)` | `#ffffff` (forced) | Icon bg inside highlighted card |
| `--color-surface-elevated` | `#ffffff` | `#1a1a1a` | Toast background, elevated cards |
| `--color-button-text` | `#ffffff` | *(unchanged)* | Text on primary (green) button |
| `--color-link-highlight-text` | `#ffffff` | *(unchanged)* | Text/icons inside highlighted card |

---

## 3. Typography

### 3.1 Font Size Scale

```css
--font-xs:    0.80rem;   /* 12.8px — fine print, footer */
--font-sm:    0.875rem;  /* 14px   — body-md, labels, descriptions */
--font-base:  1.00rem;   /* 16px   — standard body */
--font-md:    1.15rem;   /* 18.4px — card titles */
--font-lg:    1.50rem;   /* 24px   — modal heading, headline-sm */
--font-xl:    2.20rem;   /* 35.2px — mobile h1 (≤600px) */
--font-2xl:   2.80rem;   /* 44.8px — tablet h1 (≤800px), 404 title */
--font-3xl:   3.50rem;   /* 56px   — display-lg */
--font-4xl:   4.50rem;   /* 72px   — hero h1 (desktop) */
--font-hero:  10rem;     /* 160px  — 404 watermark (mobile) */
--font-2hero: 15rem;     /* 240px  — 404 watermark (desktop) */
```

### 3.2 Font Weight Scale

```css
--font-weight-regular:   400;
--font-weight-medium:    500;
--font-weight-semibold:  600;
--font-weight-bold:      700;
--font-weight-extrabold: 800;
--font-weight-black:     900;
```

### 3.3 Usage Rules

| Element | Size | Weight | Font Family | Notes |
|---|---|---|---|---|
| Hero h1 (desktop) | `--font-4xl` | `extrabold` (800) | `--font-display` | `letter-spacing: -0.02em`, `line-height: 1.1` |
| Hero h1 (≤800px) | `--font-2xl` | `extrabold` (800) | `--font-display` | `letter-spacing: -0.02em` |
| Hero h1 (≤600px) | `--font-xl` | `extrabold` (800) | `--font-display` | — |
| Hero h1 (≤320px) | `--font-lg` | `extrabold` (800) | `--font-display` | — |
| Bio paragraph | `--font-base` | `regular` (400) | `--font-body` | `line-height: 1.6`, color `--foreground-05` |
| Card title | `--font-md` | `bold` (700) | inherited | — |
| Card description | `--font-sm` | `regular` (400) | inherited | `line-height: 1.5`, color `--foreground-05` |
| Card CTA label | `--font-sm` | `semibold` (600) | inherited | color `--green-primary` |
| Modal heading (h3) | `--font-lg` | `bold` (700) | inherited | — |
| Modal option title | `--font-md` | `bold` (700) | inherited | — |
| Toast | `--font-sm` | `medium` (500) | inherited | `letter-spacing: 0.5px` |
| Footer | `--font-xs` | `regular` / `semibold` links | inherited | `opacity: 0.3` |
| 404 Title | `--font-2xl` | `extrabold` (800) | `--font-display` | `letter-spacing: -0.02em` |
| 404 Message | `--font-base` | `regular` (400) | `--font-body` | `line-height: 1.5` |
| Button | `--font-sm` | `semibold` (600) | inherited | — |

---

## 4. Spacing System

All spacing tokens use `rem`. Comments show approximate `px` equivalents.

```css
--space-xs:   0.375rem;  /*  6px */
--space-sm:   0.500rem;  /*  8px */
--space-md:   0.750rem;  /* 12px */
--space-base: 1.000rem;  /* 16px */
--space-lg:   1.250rem;  /* 20px */
--space-xl:   1.500rem;  /* 24px */
--space-2xl:  2.500rem;  /* 40px */
--space-3xl:  5.000rem;  /* 80px */
--space-4xl:  6.250rem;  /* 100px */
```

---

## 5. Border Radius

```css
--radius-sm:   0.125rem;  /*  2px — close button */
--radius-md:   0.500rem;  /*  8px — icon containers, primary button */
--radius-lg:   0.750rem;  /* 12px — cards, modals */
--radius-full: 9999px;    /* pill — navbar, toast */
```

---

## 6. Transition & Animation Tokens

```css
--transition-fast:   0.15s ease-in-out;
--transition-normal: 0.3s ease-in-out;
--transition-slow:   0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
--theme-transition:  var(--transition-normal);
```

| Token | Duration & Easing | When to Use |
|---|---|---|
| `--transition-fast` | 150ms ease-in-out | Arrow movement, close button, primary button hover/active |
| `--transition-normal` | 300ms ease-in-out | Card hover lift, modal fade-in/slide-up, navbar backdrop, theme switching |
| `--transition-slow` | 500ms spring cubic-bezier | Toast slide-in / slide-out |

### Built-in Keyframe Animations

```css
/* Modal overlay */
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Modal content */
@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}
```

---

## 7. Grid & Layout Structure

### 7.1 Page Shell

```css
/* layout.module.css */
.shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
```

## 8. Dark Mode

Dark mode is toggled by setting `data-theme="dark"` on `<html>`. Theme is initialised with a **blocking inline script** before page paint to avoid flash:

```js
// Reads from localStorage; falls back to system preference
(function(){
  try {
    var t = localStorage.getItem('theme');
    if (!t) {
      t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', t);
  } catch(e) {}
})();
```

All base tokens are overridden inside `[data-theme="dark"] {}` in `globals.css`. Components do **not** need their own `[data-theme]` overrides for base colors — only if they use structural-only dark values (e.g., the forced white icon in a highlighted dark card).

**Theme transition** (`--theme-transition: 0.3s ease-in-out`) is applied via a scoped `:where()` selector to avoid universal-selector perf cost.

---

## 9. Component Styles

### 9.1 Primary Button (404 Page)

```css
.button {
  background-color: var(--green-primary);
  color: var(--color-button-text);        /* #ffffff */
  padding: var(--space-md) var(--space-xl); /* 12px 24px */
  border-radius: var(--radius-md);         /* 8px */
  font-size: var(--font-sm);
  font-weight: var(--font-weight-semibold);
  box-shadow: 0 4px 12px var(--color-shadow-md);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}
.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px var(--color-shadow-lg);
}
.button:active {
  transform: translateY(0);
}
```
---

### 9.2 Toast Notification

The toast slides up from the bottom of the viewport.

```css
.toast_div {
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 100%;
  height: 0;
  padding: 0 var(--space-lg);
  opacity: 0;
  pointer-events: none;
  transition:
    bottom var(--transition-slow),
    opacity var(--transition-slow);
}
.toast_div.show {
  bottom: 70px;
  opacity: 1;
}

.toast_messages {
  width: fit-content;
  max-width: 90%;
  padding: var(--space-md) var(--space-xl);   /* 12px 24px */
  margin: auto;
  text-align: center;
  font-size: var(--font-sm);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.5px;
  border-radius: var(--radius-full);          /* pill */
  background: var(--color-surface-elevated);
  color: var(--foreground);
  box-shadow: 0 10px 40px var(--color-shadow-lg);
  border: 1px solid var(--color-border-subtle);
}
```

---

### 9.3 404 / Error Page

Centred layout with a massive watermark text in the background.

```css
.main {
  width: 100%; height: 100dvh;
  display: flex; align-items: center; justify-content: center;
  background-color: var(--background);
  overflow: hidden;
}

/* Watermark "404" behind content */
.bg_404 {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  font-size: var(--font-2hero);       /* 15rem desktop, 10rem mobile */
  font-weight: var(--font-weight-black);
  color: var(--foreground);
  opacity: 0.04;
  pointer-events: none;
  user-select: none;
  z-index: 0;
}

/* Foreground content */
.content { position: relative; z-index: 1; }
```

---

## 10. Interaction Patterns

### Summary table

| Interaction | Element | Effect |
|---|---|---|
| **Hover** | Social card | `translateY(-4px)` + shadow deepens |
| **Hover** | Card CTA / arrow | `gap` expands (arrow moves right) |
| **Hover** | Navbar button | `scale(1.1)` + icon turns `--cat-color` |
| **Hover** | Close button | Icon color → foreground, bg → overlay |
| **Hover** | Modal option | `translateY(-4px)` + shadow deepens |
| **Hover** | Primary button | `translateY(-2px)` + shadow deepens |
| **Active** | Primary button | `translateY(0)` (springs back) |
| **Focus-visible** | Social card | Same as hover (lift + shadow) |
| **Toast appear** | Toast | Slides up 70px from bottom, fades in |
| **Modal open** | Overlay | `fadeIn` animation (0.3s) |
| **Modal open** | Content panel | `slideUp` animation (0.3s) |

### Shadow ramp on hover

| State | Box Shadow |
|---|---|
| Default | `0 4px 24px var(--color-shadow-sm)` |
| Hover | `0 12px 32px var(--color-shadow-md)` |

---

## 11. Scrollbar

WebKit-only custom scrollbar:

```css
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--overlay); }
::-webkit-scrollbar-thumb {
  background: var(--foreground-05);
  transition: background var(--theme-transition);
}
::-webkit-scrollbar-thumb:hover { background: var(--foreground); }
```

---

## 12. Global Reset

```css
*, *::before, *::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html, body {
  max-width: 100vw;
  overflow-x: hidden;
  font-family: var(--font-body, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
  color: var(--foreground);
  background-color: var(--background);
}

a {
  color: inherit;
  text-decoration: none;
}
```

**Theme-transition scoped selector** (avoids universal `*` cost):
```css
:where(body, main, section, article, header, footer, nav, div, span,
        p, h1, h2, h3, h4, h5, h6, small, strong, em, ul, ol, li,
        a, button, input, textarea, select, svg, path) {
  transition:
    color var(--theme-transition),
    background-color var(--theme-transition),
    border-color var(--theme-transition),
    box-shadow var(--theme-transition),
    opacity var(--theme-transition);
}
```

---

## 13. Accessibility Patterns

| Pattern | Implementation |
|---|---|
| Focus management (modal) | `closeButtonRef.current?.focus()` on open; `triggerButtonRef.current?.focus()` on close |
| Escape to close | `window.addEventListener('keydown', e => e.key === 'Escape' && closeModal())` |
| ARIA dialog | `role="dialog"`, `aria-modal="true"`, `aria-labelledby={modalTitleId}` |
| Focus styles | Cards use `:focus-visible` (same lift as hover) |
| Accessible buttons | `aria-label` on icon-only nav buttons and modal close button |
| Semantic HTML | `<nav>`, `<main>`, `<section>`, `<footer>`, `<h1>`→`<h3>` hierarchy maintained |
| External links | `target="_blank"` + `rel="noopener noreferrer"` on all outbound `<a>` |
| Form reset on button | `.link_button` uses `appearance: none; -webkit-appearance: none; font: inherit;` |
| suppressHydrationWarning | On `<html>` to accommodate `data-theme` set by blocking script before React hydration |

---

## 14. CSS Variables — Full Reference

Copy this entire block into the new project's `globals.css`:

```css
:root {
  /* Transitions */
  --transition-fast:   0.15s ease-in-out;
  --transition-normal: 0.3s ease-in-out;
  --transition-slow:   0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --theme-transition:  var(--transition-normal);

  /* Base colors */
  --background:    #ffffff;
  --foreground:    #363636;
  --foreground-05: #3636368f;
  --overlay:       #ecf0f4;

  /* Brand */
  --cat-color:     #a4e84c;
  --brand-primary: var(--cat-color);

  /* Green palette */
  --green-primary:      #0c7028;
  --green-bg:           #eaf5ec;
  --green-highlight-bg: #0c7028;

  /* Borders */
  --color-border:         rgba(0, 0, 0, 0.06);
  --color-border-subtle:  rgba(0, 0, 0, 0.05);
  --color-border-divider: rgba(0, 0, 0, 0.10);

  /* Shadows */
  --color-shadow-sm: rgba(0, 0, 0, 0.03);
  --color-shadow-md: rgba(0, 0, 0, 0.08);
  --color-shadow-lg: rgba(0, 0, 0, 0.15);
  --color-shadow-xl: rgba(0, 0, 0, 0.40);

  /* Buttons */
  --color-button-text:         #ffffff;
  --color-link-highlight-text: #ffffff;

  /* Glass surfaces */
  --color-glass-bg:         rgba(255, 255, 255, 0.70);
  --color-icon-highlight-bg: rgba(255, 255, 255, 0.20);
  --color-surface-elevated:  #ffffff;

  /* Typography: sizes */
  --font-xs:    0.80rem;
  --font-sm:    0.875rem;
  --font-base:  1.00rem;
  --font-md:    1.15rem;
  --font-lg:    1.50rem;
  --font-xl:    2.20rem;
  --font-2xl:   2.80rem;
  --font-3xl:   3.50rem;
  --font-4xl:   4.50rem;
  --font-hero:  10rem;
  --font-2hero: 15rem;

  /* Typography: weights */
  --font-weight-regular:   400;
  --font-weight-medium:    500;
  --font-weight-semibold:  600;
  --font-weight-bold:      700;
  --font-weight-extrabold: 800;
  --font-weight-black:     900;

  /* Spacing */
  --space-xs:   0.375rem;
  --space-sm:   0.500rem;
  --space-md:   0.750rem;
  --space-base: 1.000rem;
  --space-lg:   1.250rem;
  --space-xl:   1.500rem;
  --space-2xl:  2.500rem;
  --space-3xl:  5.000rem;
  --space-4xl:  6.250rem;

  /* Border radius */
  --radius-sm:   0.125rem;
  --radius-md:   0.500rem;
  --radius-lg:   0.750rem;
  --radius-full: 9999px;
}

[data-theme="dark"] {
  /* Colors */
  --background:    #000000;
  --foreground:    #C9C9C9;
  --foreground-05: #C9C9C98F;
  --overlay:       #0f0f0f;

  /* Accent shifts to brighter brand */
  --green-primary: var(--cat-color);          /* #a4e84c */
  --green-bg:      rgba(12, 112, 40, 0.25);

  /* Borders */
  --color-border:         rgba(255, 255, 255, 0.08);
  --color-border-subtle:  rgba(255, 255, 255, 0.08);
  --color-border-divider: rgba(255, 255, 255, 0.10);

  /* Shadows */
  --color-shadow-sm: rgba(0, 0, 0, 0.20);
  --color-shadow-md: rgba(0, 0, 0, 0.20);
  --color-shadow-lg: rgba(0, 0, 0, 0.40);
  --color-shadow-xl: rgba(0, 0, 0, 0.40);

  /* Surfaces */
  --color-glass-bg:        rgba(15, 15, 15, 0.70);
  --color-surface-elevated: #1a1a1a;
}
```

---

*Generated from the `karthikshetty26/connect` codebase. Last updated: 2026-03-30.*
