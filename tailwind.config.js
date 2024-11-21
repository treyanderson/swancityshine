/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#1a1a1a',
          100: '#2a2a2a',
          200: '#3a3a3a',
          300: '#4a4a4a',
        }
      }
    },
  },
  plugins: [],
}