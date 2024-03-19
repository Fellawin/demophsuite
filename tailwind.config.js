/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
    "**/*.{html,js}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-login': "url('public/img/login-bg.png')",
      }
    },
    fontFamily: {
      'fmPoppins': ['"Poppins", sans-serif'],
      'fmMontserrat': ['"Montserrat", sans-serif']
    }
  },
  plugins: [],
}

