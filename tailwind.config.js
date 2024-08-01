/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: '#0a0a0a',
        customGray: '#555555'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      brightness: {
        30: '0.4',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      fontWeight: {
        bold: '700', // Asegúrate de que esto coincide con el peso en Google Fonts
      },
    },
  },
  plugins: [],
};
