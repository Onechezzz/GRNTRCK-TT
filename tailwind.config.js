/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyberPurple: '#6D28D9', // example purple color
        cyberBlack: '#1F2937',  // example black color
        cyberPink: '#EC4899',   // example pink color for accents
      },
      borderRadius: {
        'custom': '20%',
      },
    },
  },
  plugins: [],
};
