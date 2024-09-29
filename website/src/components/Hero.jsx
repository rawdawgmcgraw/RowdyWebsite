import mobilePic from '../images/mobilePic.jpg'
import Popup1 from './Popup1'
import Social from './Social'
const Hero = () => {
  return (
    <div className="h-full w-full">
      <div className="md:hidden h-full flex justify-center flex-col items-center ">
        <img
          className="h-[50%] rounded-3xl shadow-md shadow-purple-800 opacity-80"
          src={mobilePic}
          alt="/"
        />
        <div className="pt-16">
          <Popup1 />
        </div>
      </div>
      <div className="hidden md:flex h-full w-full items-center">
        <div className="flex flex-col items-center justify-end pb-16 w-full h-full bg-background bg-contain bg-no-repeat bg-center mix-blend-screen">
          <Social />
        </div>
      </div>
    </div>
  )
}

export default Hero
