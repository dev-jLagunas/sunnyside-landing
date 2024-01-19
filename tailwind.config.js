/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "soft-red": "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        "dark-cyan": "hsl(167, 40%, 24%)",
        "dark-blue": "hsl(198, 62%, 26%)",
        "footer-cyan": "hsl(168, 34%, 41%)",
        "neutral-dark-blue": "hsl(212, 27%, 19%)",
        "neutral-dark-gray": "hsl(213, 9%, 39%)",
        "neutral-gray": "hsl(232, 10%, 55%)",
        "neutral-light-gray": "hsl(210, 4%, 67%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      fontWeight: {
        600: 600,
        700: 700,
        900: 900,
      },
    },
  },
  plugins: [],
};
