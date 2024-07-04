/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: '#800020', // Add your custom color here
        lightBeige: '#F7E7CE',
      },
    },
  },
  plugins: [],
}
