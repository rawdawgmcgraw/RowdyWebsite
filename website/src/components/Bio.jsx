import Headshots from './Headshots'

const Bio = () => {
  const fontStyling =
    'text-sm md:text-md 2xl:text-xl xl:text-l font-semibold font-serif mb-4'
  return (
    <div className="hidden md:flex flex-col h-full w-full text-gray-100 font-bold items-center justify-center">
      <div className="flex h-full w-full bg-no-repeat bg-contain bg-center md:bg-second justify-center items-center mix-blend-screen">
        <div className="flex flex-col h-full bg-black/65 justify-around items-center rounded-3xl">
          <div className="pt-6 h-[70%] lg:h-[60%] w-[80%] md:w-[70%] text-center flex flex-col justify-center bg-black/30 rounded-2xl p-6">
            <h1 className={fontStyling}>
              From the depths of the bayou city comes a multigenerational
              gathering of some of the scene's greatest individuals that came
              together to create what some say is a PASADENA, TEXAS SUPER GROUP
              years in the making.
            </h1>
            <p className={fontStyling}>
              Nothing falls short on these five fellas' shoulders. They have
              been noted as saying, “We’re not trying to reinvent the wheel
              here, we’re just putting 4x4 tires on it.”
            </p>
            <p className={fontStyling}>
              With major influences of southern rock, groove metal, rockin'
              riffs, heavy metal, and a whole host of other extravagancies, you
              will leave their live set begging for more.
            </p>
            <p className={fontStyling}>
              A complete working man’s band, they are constantly putting out new
              material and videos to boot. Conquering Texas is the short-term
              goal. The big picture has them playing on major stages across the
              greatest planet in our solar system.
            </p>
            <p className={`${fontStyling} mb-0`}>
              With the moniker “LET’S GET ROWDY!” how can you not be infatuated
              with this super-group five-piece?
            </p>
          </div>

          <Headshots />
        </div>
      </div>
    </div>
  )
}

export default Bio
