/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: '#820000', // Add your custom color here
        lightBeige: '#F7E7CE',
        iconhover: ' #530015',
        customColor1: "rgb(243,237,217)",
        customColor2: "rgb(214,238,214)",
        bgColor: "rgb(243,237,217)",
        cardBg: "rgba(247, 231, 206, 1)",
        cardBorder: "rgba(130, 0, 0, 1)",
        organizationBg: "rgb(243,230,230)",
        textColor: "rgb(48,63,88,1)",
        dropdownText: "rgba(75, 92, 121, 1)",
        softBeige: "rgb(247,231,206)",
        gray: "rgb(88,89,83)",
        lightPink: "rgb(250,242,240)",
        darkRed: "rgb(130,0,0)",
        lightRose: "rgb(254,251,248)",
        WhiteIce: "#E3E6D5",
        CreamBg: "rgba(253, 248, 240, 1)",
        labelColor: "#495160",
        inputBorder: "rgba(206, 206, 206, 1)",
        outlineButton: "rgba(86, 81, 72, 1)"
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      })
    }
  ],
}
