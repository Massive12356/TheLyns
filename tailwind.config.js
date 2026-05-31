/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Bold editorial palette — vibrant orange & black
        primary: {
          DEFAULT: '#F7941D', // signature orange — brand / CTA
          light: '#FAB05A',   // soft orange — hover tints / surfaces
          dark: '#C77308',    // deep burnt orange — hover / contrast
        },
        secondary: {
          DEFAULT: '#1A1A1A', // off-black — body text / structure
          light: '#4A4A4A',   // charcoal — muted text
          dark: '#000000',    // pure black — emphasis
        },
        accent: {
          DEFAULT: '#D17A0F', // tonal amber — layered with primary
          light: '#E89B3A',
          dark: '#9C570A',
        },
        earth: {
          DEFAULT: '#78716c',
          light: '#a8a29e',
          dark: '#57534e',
        },
        background: {
          DEFAULT: '#fafaf9',
          alt: '#f5f5f4',
          dark: '#e7e5e4',
        },
      },
      fontFamily: {
        display: ['Quicksand', 'system-ui', 'sans-serif'],
        sans: ['Quicksand', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};
