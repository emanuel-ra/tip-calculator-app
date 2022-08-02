/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {   
    extend: {
      backgroundColor:{
        skin:{
          'base': 'var(--light-grayish-cyan-a)' ,
          'base2': 'var(--strong-cyan)' ,
          'secondary': 'var(--light-grayish-cyan-b)' ,
          'white': 'var(--white)' ,       
          'primary': 'var(--very-dark-cyan)' ,      
          'info': 'var(--strong-cyan)' ,   
        }
      },
      textColor:{
        skin:{
          'primary': 'var(--very-dark-cyan)' ,         
          'secondary': 'var(--dark-grayish-cyan-a)' ,
          'info': 'var(--strong-cyan)' ,
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
