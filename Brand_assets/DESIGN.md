---
name: Calm Luxury
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
  on-surface-variant: '#3e4940'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#6e7a70'
  outline-variant: '#becabe'
  surface-tint: '#006d3d'
  primary: '#005f34'
  on-primary: '#ffffff'
  primary-container: '#007a45'
  on-primary-container: '#a2ffc0'
  inverse-primary: '#78da9b'
  secondary: '#595e71'
  on-secondary: '#ffffff'
  secondary-container: '#dee1f9'
  on-secondary-container: '#5f6477'
  tertiary: '#972a28'
  on-tertiary: '#ffffff'
  tertiary-container: '#b7423e'
  on-tertiary-container: '#ffe5e2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#94f7b6'
  primary-fixed-dim: '#78da9b'
  on-primary-fixed: '#00210f'
  on-primary-fixed-variant: '#00522d'
  secondary-fixed: '#dee1f9'
  secondary-fixed-dim: '#c1c5dc'
  on-secondary-fixed: '#161b2b'
  on-secondary-fixed-variant: '#414658'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ad'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#871f1f'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-xl:
    fontFamily: Manrope
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-sm:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 32px
---

## Brand & Style

The design system is anchored in the concept of "Calm Luxury." It is designed to evoke a sense of exclusive serenity and institutional trust, specifically tailored for high-net-worth individuals investing in the Mauritian real estate market. 

The visual style blends **Minimalism** with **Corporate Modernism**. It prioritizes vast amounts of negative space to signify "room to breathe," reflecting the expansive nature of premium tropical properties. The interface is intentionally quiet, allowing the architectural photography and investment data to take center stage. Every interaction is fluid and deliberate, avoiding flashy animations in favor of subtle, high-end transitions that mirror a concierge-level service experience.

## Colors

The color palette of the design system balances institutional strength with organic vibrance.

- **Primary Action (Deep Green):** Reserved for primary calls to action and success states. It represents growth, wealth, and the lush Mauritian landscape.
- **Brand Core (Dark Navy):** Used for typography, navigation bars, and deep backgrounds. It provides a formal, corporate weight that anchors the lighter elements.
- **Accents (Coral):** Used sparingly for meaningful iconography, status notifications, or small decorative details to provide a sophisticated warmth.
- **Foundational Neutrals:** A Soft Gray background (#F6F7F8) replaces pure white for large surfaces to reduce eye strain and increase the "premium" feel, while pure White is used for elevated card components.

## Typography

This design system utilizes **Manrope** for its geometric yet approachable character. The typography strategy relies on a dramatic scale contrast between headlines and body text to establish a clear hierarchy.

- **Headlines:** Set with tight letter-spacing and bold weights to command authority. Large display sizes should be used for property titles and investment returns.
- **Body Text:** Designed for high readability with a generous 1.6x line-height ratio. This ensures that legal and financial details remain legible and non-intimidating.
- **Labels:** Small caps or uppercase styling with increased letter-spacing is used for metadata and property specifications to differentiate them from narrative descriptions.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop environments to maintain a curated, editorial look. A 12-column grid is used with wide 32px gutters to prevent information density from feeling overwhelming.

Margins are intentionally oversized (80px+) on landing pages to create a "gallery" feel. Spacing rhythm follows an 8px base, but internal component padding often utilizes "MD" (24px) or "LG" (48px) increments to reinforce the sense of spaciousness. Sections should be separated by significant vertical padding (XL) to allow the eye to rest between different investment propositions.

## Elevation & Depth

Visual depth in the design system is achieved through **Tonal Layering** and **Ambient Shadows**. 

- **Surface Tiers:** The Soft Gray background acts as the lowest layer. Pure White cards are placed on top to indicate interactivity.
- **Shadow Profile:** Shadows are extremely diffused with low opacity (4-8%). Use a slight Y-axis offset to simulate a soft overhead light source. Shadows should not have hard edges; they are intended to be felt rather than seen.
- **Borders:** Subtle 1px borders (#E5E7EB) are used in conjunction with shadows on cards to provide structural definition without adding visual noise.

## Shapes

The shape language combines the softness of luxury with the precision of modern architecture.

- **Pill Shapes:** Used exclusively for buttons, tags, and search bars. This "organic" roundness provides a modern, approachable contrast to the structured grid.
- **Card Radius:** While the system utilizes a high roundedness index, container cards should be constrained to a 16px or 20px radius to maintain a professional, architectural silhouette. 
- **Iconography:** Icons should feature rounded terminals and a consistent 2px stroke weight to match the sophistication of the Manrope typeface.

## Components

### Buttons
Primary CTAs are pill-shaped, using the Deep Green background with White text. Secondary buttons should use a Ghost style (Dark Navy border) or a subtle Gray fill for utility actions.

### Cards
Cards are the primary container for property listings. They feature a 16px corner radius, a subtle 1px border, and an ambient shadow on hover. Imagery within cards should always use a "zoom-on-hover" effect to engage the user.

### Inputs & Form Fields
Input fields are minimalist, featuring only a bottom border or a very light gray background fill that transitions to a Dark Navy border on focus. Labels should be small and uppercase, positioned above the field.

### Chips & Filters
Filter chips for property types (e.g., "Villa," "Penthouse") utilize the pill shape with a Light Gray fill, moving to Dark Navy when active.

### Additional Elements
- **Property Hero:** Full-width imagery with an overlay of the Dark Navy gradient at the bottom for text legibility.
- **Investment Calculators:** Clean, slider-based components using the Coral accent for the "handle" to draw the user's eye to interactive data.
- **Architectural Patterns:** Use subtle, light gray geometric patterns as background accents in large empty sections to maintain the "Corporate Modern" aesthetic.