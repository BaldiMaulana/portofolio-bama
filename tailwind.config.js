/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: 'class', // Menggunakan mode gelap berdasarkan kelas (dapat juga menggunakan 'media')
  // Konfigurasi lainnya...

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#6b7280'
      }
    },
  },
  plugins: [],
}

