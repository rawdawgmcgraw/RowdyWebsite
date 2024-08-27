import Headshot from "./Headshot";
import jefe from "../images/jefe-cropped.png";
import billy from "../images/billy-cropped.png";
import geronimo from "../images/geronimo-cropped.png";
import nick from "../images/nick-cropped.png";
import trey from "../images/trey-cropped.png";
import LinkWrap from "./LinkWrap";

const Headshots = () => {
  return (
    <div className='flex lg:gap-12 mr-2 md:gap-6'>
      <LinkWrap to={"/jefebio"}>
        <Headshot src={jefe} alt='jefe' />
      </LinkWrap>
      <LinkWrap to={"/billybio"}>
        <Headshot src={billy} alt='billy' />
      </LinkWrap>
      <LinkWrap to={"/geronimobio"}>
        <Headshot src={geronimo} alt='geronimo' />
      </LinkWrap>
      <LinkWrap to={"/nickbio"}>
        <Headshot src={nick} alt='nick' />
      </LinkWrap>
      <LinkWrap to={"/treybio"}>
        <Headshot src={trey} alt='trey' />
      </LinkWrap>
    </div>
  );
};
export default Headshots;
