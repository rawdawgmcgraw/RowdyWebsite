import youtube from "../images/youtube-cropped.png";
import spotify from "../images/spotify-cropped.png";
import facebook from "../images/facebook-cropped.png";
import instagram from "../images/instagram-cropped.png";

const Hero = () => {
  return (
    <div className='hidden md:flex flex-col h-screen w-full items-center'>
      <div className='w-full h-full bg-background bg-contain bg-no-repeat bg-center mix-blend-screen'>
        <div className='flex items-center justify-center h-full bg-black/30'>
          <div className='flex items-center justify-center gap-10 pt-40'>
            <a href='https://www.facebook.com/profile.php?id=100089875520742&sk=about'>
              <img
                className='h-20 hover:scale-110 ease-in duration-200 cursor-pointer'
                src={facebook}
                alt='/'
              />
            </a>
            <a href='https://www.instagram.com/letsgetrowdy_htx/'>
              <img
                className='h-20 hover:scale-110 ease-in duration-200 cursor-pointer'
                src={instagram}
                alt='/'
              />
            </a>
            <a href='https://www.youtube.com/@Letsgetrowdyhtx'>
              <img
                className='h-20 hover:scale-110 ease-in duration-200 cursor-pointer'
                src={youtube}
                alt='/'
              />
            </a>
            <a href='https://open.spotify.com/artist/4udrE3baOs3PK5k0CPr44V'>
              <img
                className='h-20 hover:scale-110 ease-in duration-200 cursor-pointer'
                src={spotify}
                alt='/'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
