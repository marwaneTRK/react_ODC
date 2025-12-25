/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors :{
        primary :{
          50:"#f0fdfa",
          200:"#99f6e4",
          800:"#115e59",
        },
        secondary :{
          50:"#f9fafb",
          200:"#e5e7eb",
          800:"#1f2937",
        }
      }
    },
  },
  plugins: [],
}

