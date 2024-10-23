/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { colors: {
      'light-blue': {
        100: '#e3f2fd',
      },
      'blue': {
        100: '#bbdefb',
      },
    },},
  },
  plugins: [],
}