/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        heroDesktopImage:"url('/src/images/desktop/image-header.jpg')",
        heroMobileImage:"url('/src/images/mobile/image-header.jpg')",
        graphicDesignImage:"url('/src/images/desktop/image-graphic-design.jpg')",
        photographyImage:"url('/src/images/desktop/image-photography.jpg')",
        emily:"url('/src/images/image-emily.jpg')",
        thomas:"url('/src/images/image-thomas.jpg')",
        jenny:"url('/src/images/image-jennie.jpg')"
      },
      fontFamily:{
        barlow:['Barlow', 'sans-serif'],
        fraunces:['Fraunces', 'serif']
      }
    },
  },
  plugins: [],
}