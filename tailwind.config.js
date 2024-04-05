/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'thdark':'#27374D',
      'thmeddark':'#526D82',
      'thmedlight':'#9DB2BF',
      'thlight':'#DDE6ED',
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}

