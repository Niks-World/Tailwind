
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  darkMode: ['selector', '[data-mode="dark"]'],
  // ...
}