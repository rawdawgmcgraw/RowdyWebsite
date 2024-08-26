import youtube from "../images/youtube.svg";
import spotify from "../images/spotify.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";

const Hero = () => {
  return (
    <div className='flex flex-col h-screen w-full items-center'>
      <div className='w-full h-full bg-background bg-contain bg-no-repeat bg-center'>
        <div className='flex items-center justify-center h-full w-full bg-black/40'>
          <div className='flex items-center justify-center gap-10 pt-40'>
            <img
              className='h-20 hover:scale-110 ease-in duration-200 cursor-pointer'
              src={facebook}
              alt='/'
            />
            <img
              className='h-20 hover:scale-110 ease-in duration-200 cursor-pointer'
              src={instagram}
              alt='/'
            />
            <img
              className='h-20 hover:scale-110 ease-in duration-200 cursor-pointer'
              src={youtube}
              alt='/'
            />
            <img
              className='h-20 hover:scale-110 ease-in duration-200 cursor-pointer'
              src={spotify}
              alt='/'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
