import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Link from "./Link";
import Headshot from "./Headshot";
import jefe from "../images/jefe-cropped.png";
import billy from "../images/billy-cropped.png";
import geronimo from "../images/geronimo-cropped.png";
import nick from "../images/nick-cropped.png";
import trey from "../images/trey-cropped.png";
import LinkWrap from "./LinkWrap";

const Popup1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bioOpen, setBioOpen] = useState(false);

  const navBarLinkStyle =
    "text-white font-carnivale sm:w-[60%] w-[70%] flex justify-center items-center rounded-full shadow-md bg-black/60 shadow-slate-600 hover:bg-slate-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200";

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleBio = () => {
    setBioOpen(!bioOpen);
  };

  const handleBioClick = () => {
    handleBio();
    handleNav();
  };

  const headShotStyling = "w-1/4 h-auto";

  return (
    <div className='md:hidden'>
      {/* NAV BAR MENU POPUP */}

      {!isOpen && !bioOpen && (
        <div className='w-full flex justify-center z-30'>
          <div className='bg-black/70 p-4 rounded-full cursor-pointer hover:bg-black/80 ease-in duration-200'>
            <AiOutlineMenu
              onClick={handleNav}
              className='text-6xl text-white'
            />
          </div>
        </div>
      )}

      <div
        className={`fixed inset-0 bg-black bg-opacity-75 z-20 transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className='h-1/3'></div>
        <div className='h-2/3 flex flex-col justify-between'>
          <div className='text-4xl w-full h-full mb-5 flex flex-col justify-between items-center sm:space-y-6'>
            <Link to='/' onClick={handleNav} className={navBarLinkStyle}>
              <span>Home</span>
            </Link>
            <Link onClick={handleBioClick} className={navBarLinkStyle}>
              <span>The Band</span>
            </Link>
            <Link to='/videos' onClick={handleNav} className={navBarLinkStyle}>
              <span>Videos</span>
            </Link>
            <Link to='/contact' onClick={handleNav} className={navBarLinkStyle}>
              <span>Contact</span>
            </Link>
            <Link
              to='/lilextrasumthin'
              onClick={handleNav}
              className={navBarLinkStyle}
            >
              <span>Lil Extra</span>
            </Link>
          </div>
          {/* CLOSE BUTTON */}
          <div className='mb-20 w-full flex justify-center items-center'>
            <AiOutlineClose
              onClick={handleNav}
              className='text-6xl text-white'
            />
          </div>
        </div>
      </div>

      {/* BIO POP UP MENU w/ HEADSHOTS */}

      <div
        className={`fixed inset-0 bg-black bg-opacity-90 z-20 transition-transform duration-300 ${
          bioOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className='flex flex-wrap justify-center items-center h-5/6 p-4'>
          <LinkWrap to={"/jefebio"}>
            <Headshot
              src={jefe}
              alt='jefe'
              override={true}
              className={headShotStyling}
              onClick={handleBio}
            />
          </LinkWrap>
          <LinkWrap to={"/billybio"}>
            <Headshot
              src={billy}
              alt='billy'
              override={true}
              className={headShotStyling}
              onClick={handleBio}
            />
          </LinkWrap>
          <LinkWrap to={"/geronimobio"}>
            <Headshot
              src={geronimo}
              alt='geronimo'
              override={true}
              className={headShotStyling}
              onClick={handleBio}
            />
          </LinkWrap>
          <LinkWrap to={"/nickbio"}>
            <Headshot
              src={nick}
              alt='nick'
              override={true}
              className={headShotStyling}
              onClick={handleBio}
            />
          </LinkWrap>
          <LinkWrap to={"/treybio"}>
            <Headshot
              src={trey}
              alt='trey'
              override={true}
              className={headShotStyling}
              onClick={handleBio}
            />
          </LinkWrap>
        </div>

        <div className='h-1/6 flex justify-center items-center'>
          <AiOutlineClose onClick={handleBio} className='text-6xl text-white' />
        </div>
      </div>
    </div>
  );
};

export default Popup1;
