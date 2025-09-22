/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // Design system colors - semantic tokens for consistency
      colors: {
        // Brand colors - simplified to your three required colors
        brand: {
          DEFAULT: '#F7F9FB', 
          light: '#E3F5FF',
          dark: '#E5ECF6',    
        },
        // Custom brand colors as requested
        'brand-light-blue': '#E3F5FF',
        'brand-main': '#F7F9FB', 
        'brand-gray-blue': '#E5ECF6'
      },
      // Typography scale - consistent font sizes
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      // Spacing scale - consistent spacing system
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      // Border radius for components
      borderRadius: {
        'card': '12px',
        'button': '8px',
        'input': '6px',
      },
      // Box shadows for depth
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'card-hover': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'elevated': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
      // Animation durations
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
      },
      // Custom easing functions
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      }
    },
  },
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "*": ["types/*"]
    }
  },

  "include": ["src"],
  plugins: [
    
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],

  
}
