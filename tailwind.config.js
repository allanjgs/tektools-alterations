module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'omegle2': ['OMEGLE', 'sans-serif'],
      'Roboto' : ['roboto-slab', 'sans-serif'],
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      basic: '#393D5E',
      second: '#2C2F48',
      third: '#4E537B',
      shadow: '#240060',
      accent: '#7963F7',
      accentHouver: '#6527F7 ',
      main: '#B420FF',
      mainHover: '#9945ff',
      dark: '#1E1E1E',
      gray: '#4F566A',
      white: '#fff',
      transparent: 'transparent',
    },
    extend: {
      backgroundImage: {
        //image: "url('/src/assets/img/image.svg')",
        bg: "url('/src/img/Bg.png')",
        bgAdmin: "url('/src/img/bg-admin.png')",
      },
      boxShadow: {
        primary: '0px 4px 40px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
