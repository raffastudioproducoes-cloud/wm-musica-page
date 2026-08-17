---
name: Modern Serene
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#4e4639'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#7f7667'
  outline-variant: '#d1c5b4'
  surface-tint: '#775a19'
  primary: '#775a19'
  on-primary: '#ffffff'
  primary-container: '#c5a059'
  on-primary-container: '#4e3700'
  inverse-primary: '#e9c176'
  secondary: '#695d49'
  on-secondary: '#ffffff'
  secondary-container: '#efddc4'
  on-secondary-container: '#6d614d'
  tertiary: '#5e5e5c'
  on-tertiary: '#ffffff'
  tertiary-container: '#a6a5a2'
  on-tertiary-container: '#3b3b39'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdea5'
  primary-fixed-dim: '#e9c176'
  on-primary-fixed: '#261900'
  on-primary-fixed-variant: '#5d4201'
  secondary-fixed: '#f2e0c7'
  secondary-fixed-dim: '#d5c4ac'
  on-secondary-fixed: '#231a0b'
  on-secondary-fixed-variant: '#504533'
  tertiary-fixed: '#e4e2de'
  tertiary-fixed-dim: '#c8c6c3'
  on-tertiary-fixed: '#1b1c1a'
  on-tertiary-fixed-variant: '#474744'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: 0.04em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: 0.03em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style
The design system embodies a sophisticated blend of editorial elegance and spiritual tranquility. It is crafted for an audience that values mindfulness, quality, and a high-end aesthetic. 

The visual direction leans into **Modern Minimalism** with a **Tactile Glassmorphism** influence. It utilizes expansive whitespace (Ivory) to create a "breathing" UI, while vibrant Gold accents provide a sense of luxury and enlightenment. The atmosphere is quiet yet confident, achieving a professional tone through precise typography and an artistic tone through soft, ethereal gradients and depth.

## Colors
The palette is rooted in the earth and the ethereal. 
- **Base (Ivory):** Used for the primary background to ensure a warm, paper-like feel that is softer on the eyes than pure white.
- **Primary (Gold):** Reserved for key actions, brand moments, and decorative highlights. It represents quality and spiritual energy.
- **Secondary (Warm Sand):** Used for subtle UI divisions, disabled states, or low-priority background containers.
- **Neutral (Charcoal):** Strictly for typography and high-contrast iconography to ensure WCAG AAA legibility.
- **Gradients:** Use the "Aura" gradient for large page backgrounds to add depth without clutter. The "Shimmer" gradient is applied exclusively to glassmorphic overlays.

## Typography
The typographic hierarchy creates a rhythmic contrast between the classical Serif headlines and the systematic Sans-Serif body text. 

**Headlines:** Always use Playfair Display. Increased letter spacing is essential to achieve the "editorial" look. Headlines should be treated as design elements; allow them plenty of vertical margin.

**Body & Labels:** Inter provides the necessary clarity for longer reads. A generous line height (1.6 to 1.7) is non-negotiable to maintain the "serene" feel and avoid visual density. Labels use uppercase and tracking (letter spacing) to differentiate them from body copy.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop to maintain control over line lengths and white space, transitioning to a fluid model on mobile.

- **Desktop:** 12-column grid, 1200px max width, 24px gutters.
- **Tablet:** 8-column grid, 24px side margins.
- **Mobile:** 4-column grid, 16px side margins.

Use "XL" spacing between major sections to emphasize the "vibrant but calm" nature of the brand. Information density should always be low to medium.

## Elevation & Depth
Depth is expressed through **translucency rather than heavy shadows**. 

1.  **Level 0 (Base):** Ivory background.
2.  **Level 1 (Cards):** Glassmorphic surfaces. Use a background blur of 12px-20px with a 1px solid border in Warm Sand at 30% opacity.
3.  **Level 2 (Popovers/Nav):** Higher blur (40px) with a subtle, tinted ambient shadow (Charcoal at 5% opacity, 20px blur) to suggest a gentle float.

Avoid dark, heavy drop shadows. The goal is to make elements feel like they are "resting on light."

## Shapes
In alignment with the "Serene" persona, all corners are softened. This design system utilizes a consistent 0.5rem (8px) radius for standard components like buttons and input fields. Larger containers (cards, modals) should use the `rounded-xl` (1.5rem / 24px) setting to create a more welcoming, organic feel.

## Components
- **Buttons:** Primary buttons are solid Gold with Charcoal text. Secondary buttons are Ivory with a thin Gold border. Use generous horizontal padding (32px).
- **Cards:** Use the glassmorphism effect (blur + thin border). Avoid inner padding less than 32px to maintain the spacious aesthetic.
- **Input Fields:** Bottom-border only (editorial style) or fully enclosed with a light Warm Sand stroke. Focus state uses a Gold bottom border.
- **Chips:** Small, pill-shaped with Warm Sand backgrounds and Charcoal text. Used for categories or tags.
- **Navigation:** The sticky navigation bar should use a high-blur glassmorphic effect to allow the content to scroll beautifully underneath it.
- **Lists:** Use custom icons for bullets—ideally a small Gold "leaf" or "dot" to reinforce the spiritual/artistic theme.