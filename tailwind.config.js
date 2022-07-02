/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundColor:{
        skin:{
          'base': 'var(--light-grayish-cyan-a)' ,
          'base2': 'var(--strong-cyan)' ,
          'white': 'var(--white)' ,       
          'primary': 'var(--very-dark-cyan)' ,       
        }
      },
      textColor:{
        skin:{
          'primary': 'var(--very-dark-cyan)' ,         
          'secondary': 'var(--dark-grayish-cyan-a)' ,
        }
      },
      fontFamily:{
        SpaceMono: 'Space Mono, monospace'
      },
      borderColor:{
        skin:{
          'primary': 'var(--light-grayish-cyan-a)',
          'info': 'var(--strong-cyan)' ,          
        }
      }
    },
  },
  plugins: [],
}
