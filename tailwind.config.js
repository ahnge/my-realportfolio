module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-bg": "#1A1A29",
        "secondary-bg": "#181824",
        "action-pur": "#7562E0",
        pinky: "#ec407a",
        "tertairy-bg": "#31313F",
        "c-border": "rgb(3, 169, 244)",
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
