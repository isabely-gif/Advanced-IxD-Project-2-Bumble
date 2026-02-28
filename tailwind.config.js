/** @type {import('tailwindcss').Config} */
// ─────────────────────────────────────────────────────────────────────────────
// Bumble Lifestyle Compatibility – Design Tokens
// Extracted from Figma: Advanced IxD – Project 2
// Node: 168:6011 (Final Designs canvas)
// ─────────────────────────────────────────────────────────────────────────────

module.exports = {
  content: ['./**/*.{html,js,ts,jsx,tsx}'],

  theme: {
    extend: {

      // ── Colors ──────────────────────────────────────────────────────────────
      // Named from Figma variables:
      //   --bumble-black       #202020
      //   --bumble-light-grey-2 #f3f3f3
      //   --medium-grey        #505050
      //   --labels/primary     #000000
      colors: {

        // Primary — near-black used for headings, body text, dark CTAs
        primary: {
          DEFAULT: '#202020',   // --bumble-black
          dark:    '#020202',   // home-indicator / true black
          foreground: '#ffffff',
        },

        // Accent — Bumble's signature golden yellow
        accent: {
          DEFAULT: '#ffc300',   // brand yellow (like button, ring chart, active nav)
          warm:    '#FCC423',   // slightly warmer variant used in prototype
          bright:  '#fff765',   // CTA gradient start
          peach:   '#fcaf8b',   // CTA gradient mid
          foreground: '#202020',
        },

        // Secondary — muted blue-gray for inactive / supporting UI
        secondary: {
          DEFAULT: '#777f89',   // inactive nav labels, secondary text
          mid:     '#505050',   // --medium-grey (percentage labels)
          foreground: '#ffffff',
        },

        // Neutral — full gray ramp
        neutral: {
          900: '#020202',   // essentially black (home indicator)
          800: '#202020',   // bumble-black (primary text)
          700: '#232323',   // Bumble wordmark
          600: '#505050',   // medium-grey
          400: '#777f89',   // blue-gray muted
          300: '#d9d9d9',   // tag chip backgrounds
          200: '#e0e0e0',   // progress bar track
          150: '#eeeeee',   // dividers / borders
          100: '#f3f3f3',   // --bumble-light-grey-2 (pill bg, banner bg)
          50:  '#f9f9f9',   // trait rows, subtle backgrounds
          0:   '#ffffff',   // white
        },

        // Compatibility status colors (used in score cards)
        success: {
          DEFAULT: '#27ae60',
          bg:      '#e6f9ee',
          text:    '#0d7a3e',
        },
        warning: {
          DEFAULT: '#e67e22',
          bg:      '#fff8e0',
          text:    '#8a6000',
        },
        danger: {
          DEFAULT: '#e74c3c',
          bg:      '#ffe8e8',
          text:    '#cc2200',
        },

        // Lifestyle gradient stops (progress bar + compatibility ring)
        coral:   '#ff6b6b',   // gradient from (warm red end)
        pink:    '#d42c75',   // CTA gradient end (magenta, 50% opacity)

        // Tip / insight box
        tip: {
          bg:     '#fffbea',
          border: '#fcc42380',  // accent/50
          text:   '#5a4800',
        },

        // Feature-specific UI
        superlike: '#1dc8ff',   // action button
        boost:     '#b45bff',   // action button
        dislike:   '#ff5a5f',   // action button
      },

      // ── Typography ───────────────────────────────────────────────────────────
      // Bumble uses a custom font called "Bumble Sans" (3 weights: Bold, Semi Bold, Medium)
      // with the "Compact" optical size variant. Inter is used for tag chips.
      fontFamily: {
        'bumble':  ['"Bumble Sans"', 'ui-sans-serif', 'sans-serif'],
        'inter':   ['Inter', 'ui-sans-serif', 'sans-serif'],
        'system':  ['-apple-system', 'BlinkMacSystemFont', '"SF Pro"', '"Segoe UI"', 'sans-serif'],
      },

      // Figma named text styles:
      //   Bumble L6 Text  — 11px / Semi Bold  (nav labels)
      //   Bumble L4 Title — 14px / Medium      (button text)
      //   Bumble L3 Title — 16px / Semi Bold   (job, school, body)
      //   Bumble L2 Title — 24px / Semi Bold   (name on profile)
      //   Bumble Logo     — 34px / Bold        (wordmark)
      fontSize: {
        'nav':    ['11px', { lineHeight: '1',    letterSpacing: '0' }],  // L6
        'btn':    ['14px', { lineHeight: '1',    letterSpacing: '0' }],  // L4
        'body':   ['13px', { lineHeight: '1.45', letterSpacing: '0' }],
        'label':  ['12px', { lineHeight: '1.4',  letterSpacing: '0.8px' }],
        'sub':    ['16px', { lineHeight: '1',    letterSpacing: '0' }],  // L3
        'title':  ['24px', { lineHeight: '1',    letterSpacing: '0' }],  // L2
        'logo':   ['34px', { lineHeight: '1',    letterSpacing: '-0.5px' }],
        'hero':   ['72px', { lineHeight: '1',    letterSpacing: '-1px' }],
        // Status bar (SF Pro, system)
        'status': ['17px', { lineHeight: '22px', letterSpacing: '0' }],
      },

      fontWeight: {
        regular:   '400',
        medium:    '500',  // Bumble Sans Medium Compact
        semibold:  '600',  // Bumble Sans Semi Bold Compact
        bold:      '700',  // Bumble Sans Bold Compact
        extrabold: '800',
        black:     '900',
      },

      // ── Spacing ──────────────────────────────────────────────────────────────
      // Tailwind default uses 4px base. Extending with design-specific values
      // pulled from component layouts in the Figma file.
      spacing: {
        // Extra values not in Tailwind's default 4px scale
        '4.5':  '18px',   // status bar padding
        '4.75': '19px',   // status bar bottom padding
        '5.25': '21px',   // status bar top padding
        '13':   '52px',   // cat-hero-icon size
        '15':   '60px',   // minor use
        '17.5': '70px',   // short button width area
        '18':   '72px',   // nav label width
        // Component-scale heights
        'nav-item': '91px',   // bottom tab bar total height
        'offer':    '65px',   // offer banner height
        'status':   '62px',   // status bar height
        'pill':     '39px',   // lifestyle match pill height
        // Card dimensions (mobile viewport 375px / card 402px design width)
        'card-w':   '383px',  // profile card width
        'shell-w':  '402px',  // phone shell width
        'card-h':   '597px',  // profile card height
        'screen-h': '874px',  // full screen height
      },

      // ── Border radius ────────────────────────────────────────────────────────
      // Values directly observed in Figma component definitions
      borderRadius: {
        'xs':   '5px',    // pill label corner (top-left on lifestyle match pill)
        'sm':   '10px',   // tag chips, short button, home indicator
        'md':   '15px',   // offer banner, lifestyle pill full
        'lg':   '16px',   // match-meter, trait rows
        'xl':   '20px',   // action buttons, profile card
        '2xl':  '24px',   // profile card overflow clip
        '3xl':  '32px',   // progress bar track
        'full': '9999px', // circular elements
      },

      // ── Box shadows ──────────────────────────────────────────────────────────
      boxShadow: {
        'card':     '0 4px 20px rgba(0, 0, 0, 0.15)',
        'badge':    '0 2px 10px rgba(0, 0, 0, 0.30)',
        'action':   '0 2px 10px rgba(0, 0, 0, 0.12)',
        'action-hover': '0 4px 16px rgba(0, 0, 0, 0.18)',
        'cat-card': '0 2px 12px rgba(0, 0, 0, 0.08)',
        'ring':     '0 4px 16px rgba(0, 0, 0, 0.15)',
        'nav':      '0 4px  4px rgba(0, 0, 0, 0.25)',  // active nav item shadow
      },

      // ── Backdrop blur ────────────────────────────────────────────────────────
      backdropBlur: {
        'nav': '10px',  // frosted-glass bottom tab bar
      },

      // ── Background image (gradients) ─────────────────────────────────────────
      backgroundImage: {
        // Lifestyle progress bar: warm yellow → coral
        'lifestyle':   'linear-gradient(to left, #ffc300, #ff6b6b)',
        // CTA "See Compatibility Breakdown" button
        'cta':         'linear-gradient(to right, #fff765 0%, #fcaf8b 54%, rgba(212,44,117,0.5) 100%)',
        // Compatibility hero section background
        'compat-hero': 'linear-gradient(135deg, #FCC423 0%, #f5a623 100%)',
        // Profile card bottom scrim
        'card-scrim':  'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
        // Category icon backgrounds (inline in Figma, listed here for reference)
        'icon-sleep':  '#eef6ff',
        'icon-diet':   '#fff0e0',
        'icon-social': '#f0fff4',
        'icon-spend':  '#f5f0ff',
        'icon-clean':  '#effffd',
      },

      // ── Transitions ──────────────────────────────────────────────────────────
      transitionTimingFunction: {
        'bumble': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'screen': '350ms',
        'card':   '400ms',
        'quick':  '150ms',
      },

    },
  },

  plugins: [],
};
