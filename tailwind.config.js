/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#7E90FE",
        
"secondary": "#9873FF",
        
"accent": "#757575",
        
"neutral": "#1A1919",
        
"base-100": "#FFFFFF",
        
"info": "#72D9F8",
        
"success": "#248F70",
        
"warning": "#A58512",
        
"error": "#FA6175",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

