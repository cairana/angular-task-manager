module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx,html}"], // Adjust paths based on your project structure
    darkMode: "media",
    theme: {
        extend: {
          fontFamily: {
            sans: ['sans-serif'], 
          },
        },
      },
    variants: { extend: {} },
    plugins: [],
  };