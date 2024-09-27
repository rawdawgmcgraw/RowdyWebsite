import youtube from "../images/youtube-cropped.png";
import spotify from "../images/spotify-cropped.png";
import facebook from "../images/facebook-cropped.png";
import instagram from "../images/instagram-cropped.png";
import mobilePic from "../images/mobilePic.jpg";
import Popup1 from "./Popup1";
const Hero = () => {
  const imgStyle =
    "h-[10vh] hover:scale-110 ease-in duration-200 cursor-pointer";
  return (
    <div className='h-full w-full'>
      <div className='md:hidden h-full flex justify-center flex-col items-center'>
        <img
          className='h-[50%] mb-6 rounded-3xl shadow-md shadow-purple-800 opacity-80'
          src={mobilePic}
          alt='/'
        />
        <div className='mb-20'>
          <Popup1 />
        </div>
      </div>
      <div className='hidden md:flex flex-col h-full w-full items-center'>
        <div className='flex flex-col items-center justify-end pb-16 w-full h-full bg-background bg-contain bg-no-repeat bg-center mix-blend-screen'>
          <div className='flex items-center justify-center gap-10 pt-40'>
            <a
              href='https://www.facebook.com/profile.php?id=100089875520742&sk=about'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className={imgStyle} src={facebook} alt='/' />
            </a>
            <a
              href='https://www.instagram.com/letsgetrowdy_htx/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className={imgStyle} src={instagram} alt='/' />
            </a>
            <a
              href='https://www.youtube.com/@Letsgetrowdyhtx'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className={imgStyle} src={youtube} alt='/' />
            </a>
            <a
              href='https://open.spotify.com/artist/4udrE3baOs3PK5k0CPr44V'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className={imgStyle} src={spotify} alt='/' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
