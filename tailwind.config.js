/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Crucial for toggling dark mode via class on HTML element
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // GitHub-like grayscale for dark mode
        darkBackground: "#0D1117", // GitHub's main background
        darkSecondary: "#161B22", // GitHub's secondary background/borders
        darkText: "#E6EDF3", // Light text on dark background
        darkAccent: "#8B949E", // Gray accent for links/hovers on dark mode (can be adjusted)

        // GitHub-like grayscale for light mode
        lightBackground: "#FFFFFF", // Pure white background
        lightSecondary: "#F6F8FA", // Very light gray for secondary elements/borders
        lightText: "#24292E", // Dark text on light background
        lightAccent: "#586069", // Dark gray accent for links/hovers on light mode (can be adjusted)
      },
      borderRadius: {
        "4xl": "2rem",
        "10xl": "6rem",
      },
    },
  },
  plugins: [],
};
