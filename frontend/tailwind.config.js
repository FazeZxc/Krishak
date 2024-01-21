/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        MoiraiOne: ['"Moirai One"', "sans-serif"],
        Jungle: ['JungleCamp', "sans-serif"],
        RobotoCondensed : [ 'Roboto Condensed' , 'sans-serif']
      },
    },
  },
  plugins: [],
}

