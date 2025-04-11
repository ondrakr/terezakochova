/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '140px',
        screens: {
          xl: `${(122 * 12) + (16 * 11) + (140 * 2)}px`,  // Přesná šířka: 12 sloupců + 11 mezer + okraje
        },
      },
      spacing: {
        'column': '122px',
        'gutter': '16px',
      },
    },
  },
  plugins: [],
} 