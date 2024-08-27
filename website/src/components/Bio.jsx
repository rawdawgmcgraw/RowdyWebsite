import bioBG from '../images/bio-cropped.png'
import Headshots from './Headshots'

const Bio = () => {
  return (
    <div className="flex flex-col h-screen w-full text-white font-bold items-center justify-center">
      <div className="flex flex-col h-full w-full md:bg-second bg-no-repeat bg-contain bg-center justify-center items-center mix-blend-screen">
        <div className="flex flex-col h-full bg-black/45 justify-center items-center">
          <div className="my-4 mt-28">
            <img className="lg:h-[24rem]" src={bioBG} alt="" />
          </div>

          <Headshots />
        </div>
      </div>
    </div>
  )
}

export default Bio
