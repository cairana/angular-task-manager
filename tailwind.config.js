/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}", "./src/app/components/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundColor: {
        sandyGreen: "oklch(61.92% 0.039 139.98)",
      },
      fontFamily: {
        sans: ["sans-serif"],
      },
    },
  },
  plugins: [],
};
