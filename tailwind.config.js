/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      "drop-shadow" : "linear-gradient(0deg, rgba(8,4,1,0) 50%, rgba(8,4,1,1) 100%), linear-gradient(0deg, rgba(8,1,1,0.5) 0%, rgba(8,4,1,0) 50%)",
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}