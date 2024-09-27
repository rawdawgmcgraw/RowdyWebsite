/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bronco: ["BroncoFont", "sans-serif"], // Add your custom font here
        texas: ["TexasFont", "calibri"],
      },
      backgroundImage: {
        background: "url(images/bkgrndImage1.png)",
        second: "url(images/background-bio-cropped.png)",
        jefeBio: "url(images/jefes_bio_pic_cropped.png)",
        billyBio: "url(images/Billys_bio_pic_cropped.png)",
        geronimoBio: "url(images/Geronimos_bio_pic_cropped.png)",
        nickBio: "url(images/Nicks_bio_pic_cropped.png)",
        treyBio: "url(images/Treys_bio_pic_cropped.png)",
      },
    },
  },
  plugins: [],
};
