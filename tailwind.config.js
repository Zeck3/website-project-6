/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      "drop-shadow" : "linear-gradient(0deg, rgba(8,4,1,0.2665441176470589) 62%, rgba(8,4,1,1) 100%);",
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}