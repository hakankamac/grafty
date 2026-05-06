---
name: Ephemeral Epicurean
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#46474a'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#76777b'
  outline-variant: '#c7c6ca'
  surface-tint: '#5f5e5f'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1c'
  on-primary-container: '#858384'
  inverse-primary: '#c8c6c7'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1c19'
  on-tertiary-container: '#848480'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e3'
  primary-fixed-dim: '#c8c6c7'
  on-primary-fixed: '#1b1b1c'
  on-primary-fixed-variant: '#474647'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#e4e2dd'
  tertiary-fixed-dim: '#c8c6c2'
  on-tertiary-fixed: '#1b1c19'
  on-tertiary-fixed-variant: '#474744'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: notoSerif
    fontSize: 4.5rem
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: notoSerif
    fontSize: 3rem
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: notoSerif
    fontSize: 2rem
    fontWeight: '400'
    lineHeight: '1.3'
  title-lg:
    fontFamily: beVietnamPro
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: '1.5'
    letterSpacing: 0.05em
  body-lg:
    fontFamily: beVietnamPro
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.7'
  body-md:
    fontFamily: beVietnamPro
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: beVietnamPro
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  button:
    fontFamily: beVietnamPro
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.15em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 2.5rem
  xl: 4rem
  gutter: 2rem
  margin: max(2rem, 5vw)
---

## Brand & Style

This design system is built for a high-end culinary destination that balances warmth with exclusivity. The brand personality is poised, welcoming, and sophisticated, targeting a discerning audience that values craft and atmosphere.

The design style is **Minimalist with Tactile Elegance**. It prioritizes high-quality, full-bleed food photography and generous whitespace to create a "breathing" interface that feels as curated as a tasting menu. Subtle, ambient shadows and soft layering evoke a sense of physical space and depth, while the clean execution ensures a modern, frictionless user experience.

## Colors

The palette is anchored by **Deep Charcoal**, used for primary text and high-impact backgrounds to provide a grounded, luxurious foundation. **Elegant Gold** serves as the accent color, reserved for key interactions, branding elements, and decorative flourishes that signify premium quality. 

The primary canvas is a **Creamy Off-White**, which provides a warmer, more inviting alternative to pure white, reducing eye strain and enhancing the "organic" feel of the brand. Secondary neutrals are used sparingly for subtle borders and secondary information to maintain a clean aesthetic.

## Typography

This design system employs a classic typographic pairing to communicate heritage and modernity. **Noto Serif** is the voice of the brand, used for headlines to convey timeless elegance and editorial authority. **Be Vietnam Pro** provides a warm, contemporary counterpoint for body text, ensuring high legibility and an approachable tone.

All caps are utilized for labels and buttons with increased letter spacing to create a sense of rhythmic sophistication. Paragraphs should maintain a generous line height to support the airy, minimalist aesthetic.

## Layout & Spacing

The layout utilizes a **Fixed Grid** on desktop and a fluid container on mobile, emphasizing centered compositions and balanced asymmetry. Generous external margins ensure the content feels framed and intentional.

Spacing is used as a functional tool to group menu items and separate courses. Large "Section Breaks" (XL spacing) should be used between major content blocks like "The Menu" and "Private Dining" to allow the user's eye to rest. Internal card padding should be consistent at the MD scale to maintain a tight, professional rhythm.

## Elevation & Depth

Visual hierarchy is established through **Ambient Shadows** and tonal layering. Surfaces do not "float" aggressively; instead, they lift slightly off the Creamy Off-White base using very soft, low-opacity charcoal shadows with a large blur radius.

- **Level 1 (Navigation/Cards):** Subtle 2px Y-offset with 8px blur, 4% opacity charcoal.
- **Level 2 (Modals/Dropdowns):** 8px Y-offset with 24px blur, 8% opacity charcoal.
- **Depth through Content:** High-quality photography provides the primary "texture," while thin 1px gold or light-grey lines act as dividers, replacing heavy borders to maintain a light, airy feel.

## Shapes

The shape language of this design system is defined by soft, organic geometry. A **Rounded (0.5rem)** base corner radius is applied to all standard components like buttons and input fields, echoing the welcoming nature of the brand.

Larger containers, such as featured cards or image frames, utilize **Rounded-XL (1.5rem)** to create a distinct, modern silhouette. Circular elements are reserved exclusively for avatars or specific decorative icon backgrounds.

## Components

### Buttons
Primary buttons use the Deep Charcoal background with Creamy Off-White text, featuring a slight 1px Gold border on hover. Secondary buttons are Ghost-style with Gold text and a Gold 1px border. All button text is uppercase with 0.15em letter spacing.

### Input Fields
Inputs are minimal, featuring only a bottom border in a light neutral, which transforms into a Gold border upon focus. Labels float above the line in the `label-md` style.

### Cards
Cards for menu items or blog posts use the Level 1 shadow and the `rounded-lg` corner radius. They should feature a clear hierarchy: high-resolution imagery on top, followed by a Noto Serif title and a Be Vietnam Pro description.

### Line Icons
Icons must be "Elegant Line" style—fine-weighted (1px to 1.5px stroke), open-ended, and rendered in Gold or Charcoal. They should never be filled.

### Specialized Components
- **The Reservation Bar:** A persistent, slim bar at the bottom or top of the screen using a Gold background to signify its importance.
- **Menu Filter Chips:** Pill-shaped (rounded-xl) with a thin charcoal border, filling with charcoal when active.