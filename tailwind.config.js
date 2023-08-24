/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "ceria": {
          "400": "#f2e8cc",  
          "500": "#99bd05",
          "600": "#DE3891",
        }
      }
    },
  },
  plugins: [],
}

