/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1e1e1b",
        goldbeige: "#cdbb96",
        borderline: "#807664" // warm beige/gray for separators similar to reference
      },
      fontFamily: {
        inter: ["var(--font-inter)", "Inter", "system-ui", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
