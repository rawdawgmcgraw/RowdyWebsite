import Headshots from "./Headshots";

const Bio = () => {
  return (
    <div className='hidden md:flex flex-col h-screen w-full text-gray-100 font-bold items-center justify-center'>
      <div className='flex flex-col h-full w-full md:bg-second bg-no-repeat bg-contain bg-center justify-center items-center mix-blend-screen'>
        <div className='flex flex-col h-full bg-black/65 justify-center items-center rounded-3xl'>
          <div className='pt-6 h-[70%] w-[80%] lg:h-[60%] lg:w-[70%] xl:w-[55%] text-center flex flex-col justify-center bg-black/30'>
            <h1 className='text-md font-semibold font-serif mb-4'>
              From the depths of the bayou city comes a multigenerational
              gathering of some of the scene's greatest individuals that came
              together to create what some say is a PASADENA, TEXAS SUPER GROUP
              years in the making.
            </h1>
            <p className='text-md font-semibold font-serif mb-4'>
              Nothing falls short on these five fellas' shoulders. They have
              been noted as saying, “We’re not trying to reinvent the wheel
              here, we’re just putting 4x4 tires on it”.
            </p>
            <p className='text-md font-semibold font-serif mb-4'>
              With major influences of southern rock, groove metal, rockin
              riffs, heavy metals, and a whole host of other extravagancies, you
              will leave their live set begging for more.
            </p>
            <p className='text-md font-semibold font-serif mb-4'>
              A complete working man’s band, they are constantly putting out new
              material and videos to boot. Conquering Texas is the short term
              goal. The big picture has them playing on major stages across the
              greatest planet in our solar system.
            </p>
            <p className='text-md font-semibold font-serif'>
              With the moniker “LET’S GET ROWDY!” how can you not be infatuated
              with this super-group five piece?
            </p>
          </div>

          <Headshots />
        </div>
      </div>
    </div>
  );
};

export default Bio;
