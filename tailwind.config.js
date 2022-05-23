module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#9786B5",
          secondary: "#f472b6",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#F9ECF6",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}