import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px", 
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        primary: '#0D1B2A',
        primaryLite: '#1C2F45',
        cta: '#E6605A',
        ctaDark: '#CC564F',
        ctaLight: '#FF837D',
        secondaryCta: '#FFC857',
        secondaryCtaDark: '#E6B043',
        secondary: '#4D7C8A',
        secondaryLight: '#5F98A5',
        secondaryDark: '#375F68',
        tertiary: '#003E47',
        tertiaryLight: '#0C525E',
        lightText: '#E0E0E0',
        darkText: '#101828',
        mutedText: '#6B7280',
        border: '#D1D5DB',
        borderDark: '#374151',
        background: 'secondary#F9FAFB',
        backgroundSubtle: '#F3F4F6',
        backgroundDark: '#0D1B2A',
      },
      backgroundImage: {
        hero: "url('/assets/hero4.png')", 
        subHero: "url('/assets/hero.png')", 
        otherHero: "url('/assets/hero1.png')", 

      },
    },
  },
  plugins: [],
} satisfies Config;
