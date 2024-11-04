/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins-regular", "sans-serif"], // Default regular weight
        "poppins-semibold": ["poppins-semibold", "sans-serif"], // SemiBold weight
        "poppins-bold": ["poppins-bold", "sans-serif"], // Bold weight
        "poppins-medium": ["poppins-medium", "sans-serif"], // Bold weight
      },
      backgroundImage: {
        "gradient-to-l":
          "linear-gradient(to left, #0985f9, #0b72f8, #2f5cf3, #4d40ea, #6809dc)",
      },
      rotate: {
        360: "360deg",
      },
    },
  },
  plugins: [],
};
