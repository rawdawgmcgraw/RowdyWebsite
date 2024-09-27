/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
<<<<<<< HEAD
        bronco: ["BroncoFont", "sans-serif"], // Add your custom font here
        texas: ["TexasFont", "calibri"],
=======
        bronco: ['BroncoFont', 'sans-serif'],
        carnivale: ['CarnivaleeFreakshow', 'serif'],
>>>>>>> f0a7facadda84a240b863ebf7fe5ce15ac0ddc11
      },
      backgroundImage: {
        background: 'url(images/bkgrndImage1.png)',
        second: 'url(images/background-bio-cropped.png)',
        jefeBio: 'url(images/jefes_bio_pic_cropped.png)',
        billyBio: 'url(images/Billys_bio_pic_cropped.png)',
        geronimoBio: 'url(images/Geronimos_bio_pic_cropped.png)',
        nickBio: 'url(images/Nicks_bio_pic_cropped.png)',
        treyBio: 'url(images/Treys_bio_pic_cropped.png)',
      },
    },
  },
  plugins: [],
}
