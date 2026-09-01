---
name: FlowAI Technical Interface
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#464555'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#7e3000'
  on-tertiary: '#ffffff'
  tertiary-container: '#a44100'
  on-tertiary-container: '#ffd2be'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb695'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7b2f00'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-sm:
    fontFamily: Geist
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

The design system is engineered for high-velocity development environments where information density and clarity are paramount. The aesthetic is **High-Density Minimalism**, drawing inspiration from the "utility-first" movement seen in modern developer tools.

The emotional response is one of precision, speed, and reliability. By utilizing a "low-chrome" interface, the design system ensures that the developer's work remains the focal point. Surfaces are primarily flat, relying on 1px borders and subtle tonal shifts rather than heavy shadows or decorative gradients to establish structure. The AI components are integrated seamlessly, identified by precise accent colors rather than flamboyant visuals.

## Colors

The palette is anchored in a clean, laboratory-white environment. It uses a sophisticated scale of neutrals to define hierarchy without adding visual noise.

- **Primary (Indigo):** Reserved for active states, primary actions, and AI-driven features.
- **Secondary (Deep Blue/Slate-900):** Used for primary headings and critical UI anchors.
- **Surface Scale:** Use `#FFFFFF` for the main canvas, `#F9FAFB` for sidebars and secondary panels, and `#F3F4F6` for subtle contrast in inset elements like code blocks or search bars.
- **Borders:** A consistent `#E5E7EB` is used for all structural containment.

## Typography

This design system utilizes a dual-font strategy to distinguish between UI orchestration and technical data.

- **UI Sans:** **Geist** is used for headings to provide a sharp, technical character, while **Inter** is used for body text and interface labels to ensure maximum legibility at small sizes.
- **Technical Mono:** **JetBrains Mono** is the standard for code snippets, logs, terminal outputs, and any data that requires character-level alignment.
- **Hierarchy:** Maintain high contrast between headings (Slate-900) and body text (Slate-600). Use `label-caps` for section headers in sidebars or small metadata.

## Layout & Spacing

The layout philosophy follows a **strict 4px grid system** to achieve a high-density, engineering-focused look.

- **Structure:** Use a flexible, column-based layout for main content areas. Sidebars should have a fixed width (e.g., 240px or 280px) to maintain predictability.
- **Density:** Components should prioritize information density. Vertical padding in lists and tables should be kept tight (8px-12px) to allow more data on screen.
- **Breakpoints:**
    - Mobile (< 768px): Single column, hidden sidebars behind a drawer.
    - Tablet (768px - 1024px): Collapsible sidebars, 2-column layouts.
    - Desktop (> 1024px): Multi-pane views, persistent sidebars, and command palettes.

## Elevation & Depth

In this design system, depth is communicated through **Tonal Layering** and **Ghost Borders** rather than traditional shadows.

- **Level 0 (Canvas):** Pure white (#FFFFFF).
- **Level 1 (Navigation/Sidebars):** Subtle grey (#F9FAFB) with a 1px right/left border.
- **Level 2 (Cards/Modals):** Pure white with a 1px border (#E5E7EB) and a very soft, diffused shadow (`0 1px 3px rgba(0,0,0,0.05)`).
- **Overlays:** Command palettes and dropdowns should use a clean border and a slightly larger shadow to separate from the background, ensuring no backdrop blur is used to keep the interface feeling "snappy" and lightweight.

## Shapes

The shape language is disciplined and professional.

- **Standard Elements:** Buttons, inputs, and small cards use a **6px (0.375rem)** radius (`Soft` setting).
- **Large Elements:** Modals and large containers can scale up to **8px (0.5rem)**.
- **Inner Radii:** When nesting elements, ensure the inner radius is smaller than the outer radius (Standard - 2px) to maintain geometric harmony.

## Components

- **Buttons:**
    - *Primary:* Solid Indigo (#4F46E5) with white text. No gradients.
    - *Secondary:* White background, 1px border (#E5E7EB), Slate-900 text.
    - *Ghost:* No background or border, Slate-600 text, Indigo text on hover.
- **Input Fields:** 1px border (#E5E7EB). On focus, the border changes to Indigo (#4F46E5) with a subtle 2px outer glow of the same color at 10% opacity.
- **Chips/Badges:** Small, 12px font size, semi-bold. Use Indigo backgrounds at 10% opacity with Indigo text for "AI" or "Active" states.
- **Lists:** High-density. Rows are 32px-40px high. Use a subtle `#F9FAFB` hover state.
- **Cards:** No heavy shadows. Use a 1px border. For interactive cards, the border can shift to Slate-300 on hover.
- **Command Palette:** A centered, floating component. Uses `Geist` for the search input and `JetBrains Mono` for keyboard shortcuts (KBD tags).
- **KBD Tags:** Small `#F3F4F6` boxes with a 1px `#E5E7EB` border and 2px corner radius.