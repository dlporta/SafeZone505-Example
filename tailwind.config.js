/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'header-background': "url('/public/img/background_sz505.jpeg')",
        'phone-background': "url('/public/img/telefono-removebg-preview.png')"
      }
    },
  },
  plugins: [],
}

