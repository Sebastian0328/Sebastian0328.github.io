/** /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Alumni" : ['Alumni Sans Collegiate One', 'sans-serif']
      }
    },
  },
  plugins: [],
}
// font-family: 'Alumni Sans Collegiate One', sans-serif;
// font-family: 'DM Sans', sans-serif;
// font-family: 'Fira Code', monospace;