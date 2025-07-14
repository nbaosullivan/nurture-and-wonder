const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
        // Nurture and Wonder Color Palette
        'sun-cream': '#FFF3E3',        // Background
        'mountain-purple': '#7B5D8B',   // Header
        'sunset-orange': '#F4A14D',     // Button
        'cloud-white': '#f5f5f5',       // Button text
        'cloud-grey': '#ededed',       // Subtle lighter grey/darker white for borders
        'peach-blush': '#F9C6B2',       // Accent box
        'peach-blush-dark': '#E8B19A',   // Darker shade for depth
        'evergreen': '#3A4A42',         // Accent box text
        'twilight-pink': '#D4A0A6',     // Hover state
        'sky-blue': '#8ABFD1',          // Navigation/Footer
        // Brand colors for backward compatibility
        'brand-primary': '#7B5D8B',     // Mountain Purple
        'brand-secondary': '#F9C6B2',   // Peach Blush
      },
      fontFamily: {
        // to change, update font in _document.js
        sans: ["var(--font-nunito)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-lora)", ...defaultTheme.fontFamily.serif],
        stock: [defaultTheme.fontFamily.sans]
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "2/3": "2 / 3",
        "9/16": "9 / 16"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/typography")]
};
