module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        egreen: "#209D5C",
        estone: "#F5F5F5",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "black-card":
          "radial-gradient(rgba(255, 255, 255, 0.2) 8%, transparent 8%)",
      },
    },
  },
  plugins: [],
};
