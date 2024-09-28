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
import { useMenu } from "../context/menu";

const Popup1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [bioOpen, setBioOpen] = useState(false);
  const { bioOpen, setBioOpen } = useMenu();
  const headshotsData = [
    { src: jefe, alt: "jefe", link: "/jefebio", name: "Jefe" },
    { src: billy, alt: "billy", link: "/billybio", name: "Billy" },
    { src: geronimo, alt: "geronimo", link: "/geronimobio", name: "Geronimo" },
    { src: nick, alt: "nick", link: "/nickbio", name: "Nick" },
    { src: trey, alt: "trey", link: "/treybio", name: "Trey" },
  ];

  const navBarLinkStyle =
    "text-white font-carnivale sm:w-[60%] w-[70%] flex justify-center items-center rounded-full shadow-md bg-black/60 shadow-slate-600 hover:bg-slate-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200";

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleBio = () => {
    setBioOpen(!bioOpen);
  };

  const handleBioClick = () => {
    setBioOpen(true);
    setIsOpen(false);
  };

  return (
    <div>
      <div className='md:hidden'>
        {/* NAV BAR MENU POPUP */}
        {!isOpen && !bioOpen && (
          <div className='w-full flex justify-center z-30'>
            <div className='bg-black/70 p-4 rounded-full cursor-pointer hover:bg-black/80 ease-in duration-200'>
              <AiOutlineMenu
                onClick={handleNav}
                className='text-5xl text-white'
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
              <a onClick={handleBioClick} className={navBarLinkStyle}>
                <span>The Band</span>
              </a>
              <Link
                to='/videos'
                onClick={handleNav}
                className={navBarLinkStyle}
              >
                <span>Videos</span>
              </Link>
              <Link
                to='/contact'
                onClick={handleNav}
                className={navBarLinkStyle}
              >
                <span>Contact</span>
              </Link>
              <Link to='/extra' onClick={handleNav} className={navBarLinkStyle}>
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
          <div className='flex flex-col items-center w-full justify-center h-5/6 p-4'>
            <div className='flex flex-col items-start mt-16'>
              {headshotsData.map((person, index) => (
                <LinkWrap
                  className='flex justify-center'
                  key={index}
                  to={person.link}
                >
                  <Headshot
                    src={person.src}
                    alt={person.name}
                    override={true}
                    className='w-24'
                    onClick={handleBio}
                  />
                  <span className='mt-8 font-carnivale text-5xl ml-6'>
                    {person.name}
                  </span>
                </LinkWrap>
              ))}
            </div>
          </div>
          <div className='h-1/6 flex justify-center items-center'>
            <AiOutlineClose
              onClick={handleBio}
              className='text-6xl text-white cursor-pointer'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup1;
