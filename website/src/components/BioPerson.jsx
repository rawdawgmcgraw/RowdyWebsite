import Container from './Container'

import JefeText from '../images/Jefes_bio_cropped.png'
import NickText from '../images/Nicks_bio_cropped.png'
import BillyText from '../images/Billys_bio_cropped.png'
import GeronimoText from '../images/Geronimos_bio_cropped.png'
import Back from './Back'
import TreyText from '../images/Treys_bio_cropped.png'

/* eslint-disable react/prop-types */
const BioPerson = ({ bgImage, name }) => {
  //   const source = `../images/${name}s_bio_cropped.png`;

  const imageMap = {
    Billy: BillyText,
    Geronimo: GeronimoText,
    Trey: TreyText,
    Jefe: JefeText,
    Nick: NickText,
  }

  const source = imageMap[name]

  return (
    <Container>
      <div
        className={`flex flex-col h-full w-full ${bgImage} bg-no-repeat bg-contain bg-center items-center mix-blend-screen`}
      >
        <div className="flex flex-col h-full items-center bg-black/20 justify-center">
          <img className="lg:h-[22rem] mt-20" src={source} alt={name} />
          <Back />
        </div>
      </div>
    </Container>
  )
}
export default BioPerson
