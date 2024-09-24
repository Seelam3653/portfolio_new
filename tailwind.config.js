/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0056b3', // Deep Blue
        accent: '#008080', // Teal
        darkGray: '#505050', // Gray
        lightGray: '#f9f9f9', // Light Gray
        white: '#ffffff', // White
      },
    },
  },
  plugins: [],
}

