export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}" 
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#0a1929',
      },
      fontFamily: {
        comfortaa: ['Comfortaa', 'cursive'],
        cabin: ['Cabin', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
        nunito: ["Nunito"],
        playfair: ["Playfair"],
      }
    },
  },
  plugins: [],
};
