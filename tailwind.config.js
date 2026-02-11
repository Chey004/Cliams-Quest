/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'tech-noir-bg': '#0f172a', // slate-900
        'tech-cyan': '#22d3ee', // cyan-400
        'tech-pink': '#d946ef', // fuchsia-500
        'tech-green': '#34d399', // emerald-400
      }
    },
  },
  plugins: [],
}
