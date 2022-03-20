module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        material: {
          dark: {
            main: "#202024",
          },
          primary: {
            50: "#E3F2FD",
            100: "#BBDEFB",
            200: "#90CAF9",
            300: "#64B5F6",
            400: "#42A5F5",
            500: "#2196F3",
            600: "#1E88E5",
            700: "#1976D2",
            800: "#1565C0",
            900: "#0D47A1",
            A100: "#82B1FF",
            A200: "#448AFF",
            A400: "#2979FF",
            A700: "#2962FF",
          },
          secondary: {
            50: "#FFE8E8",
            100: "#FFCCCC",
            200: "#FFB3B3",
            300: "#FF9999",
            400: "#FF8080",
            500: "#FF6666",
            600: "#FF4D4D",
            700: "#FF3333",
            800: "#FF1A1A",
            900: "#FF0000",
            A100: "#FFE8E8",
            A200: "#FFCCCC",
            A400: "#FFB3B3",
            A700: "#FF9999",
          }
        },
      },
    },
  },
  plugins: [],
  fontFamily: {
    sans: ["Poppins", "sans-serif"],
  },
};
