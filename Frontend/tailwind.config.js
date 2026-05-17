/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        stride: {
          bg: "#EEEBE3",
          base: "#181A2F",       
          surface: "#242E49",    
          muted: "#37415C",      
          peach: "#FDA481",      
          primary: "#B4182D",    
          primaryDark: "#54162B" 
        }
      },
      animation: {
        scroll: "scroll 30s linear infinite", 
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, 
        },
      },
    },
  },
  plugins: [],
};