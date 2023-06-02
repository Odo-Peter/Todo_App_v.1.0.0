/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '400px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    backgroundColor: {
      'bg-color': 'hsl(226, 43%, 10%)',
      'container-bg': 'hsl(235, 46%, 20%)',
    },
    colors: {
      'txt-color': 'hsl(236, 100%, 87%)',
      // 'scroll-color': 'rgba()',
      btn: 'rgb(5, 136, 5)',
    },
    extend: {
      boxShadow: {
        'card-shadow': '18px 18px 1.4rem rgba(0, 0, 0, 0.4)',
        'img-shadow': '8px 6px 8px rgba(0, 0, 0, 0.4)',
        'time-shadow': '0 5px 8px rgba(0, 255, 255, 0.06)',
      },
      height: {
        card: '98vh',
        home: '80vh',
        todo: '84vh',
      },
      width: {
        home: '95%',
        txt: '82%',
      },
      borderColor: {
        'border-purple': 'hsl(264, 64%, 52%)',
        'border-green': 'hsl(145, 58%, 55%)',
        'border-orange': 'hsl(43, 84%, 65%)',
        'border-red': 'hsl(15, 100%, 70%)',
        'border-pale-blue': 'hsl(236, 100%, 87%)',
        'border-blue': 'hsl(246, 80%, 60%)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
