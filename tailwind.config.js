/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'la-blue': '#0077be',
        'la-sunset': '#fd5c63',
      }
    },
  },
  plugins: [],
}