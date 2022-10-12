/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
   
    extend: { colors: {
      rosa: '#ff52bf',
      fondo: '#ebfbff',
      footer: '#00252e',
      bordes: '#808d99',
    },
    screens: {
      'sm': '375px',
      // => @media (min-width: 375px) { ... }
    },
    fontFamily: {
      'head': ['Poppins', 'system-ui'],
      'body': ['Open Sans', 'Georgia'],
      
    },
    backgroundImage: {
      'hero-desktop': "url('/public/images/bg-hero-desktop.svg')",
      'hero-mobile': "url('/public/images/bg-hero-mobile.svg')",
    }
  },

  },
  plugins: [],
}
