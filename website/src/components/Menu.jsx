import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Link from './Link'

const Menu = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  const navBarLinkStyle =
    'sm:w-[60%] w-[70%] flex justify-center items-center rounded-full shadow-md bg-black/60 shadow-slate-600 hover:bg-slate-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'

  return (
    <div className="md:hidden absolute h-20 w-full text-white bottom-[15%]">
      <div className="flex h-full w-full justify-center items-center">
        <AiOutlineMenu onClick={handleNav} className="size-10" />
      </div>
      {nav ? (
        <div className="fixed w-full h-screen bg-black/80 flex flex-col justify-center items-center z-20 text-white font-bronco text-xl">
          <Link to="/" onClick={handleNav} className={navBarLinkStyle}>
            <span>Home</span>
          </Link>
          <Link to="/bio" onClick={handleNav} className={navBarLinkStyle}>
            <span>Bio</span>
          </Link>
          <Link to="/videos" onClick={handleNav} className={navBarLinkStyle}>
            <span>Videos</span>
          </Link>
          <Link to="/contact" onClick={handleNav} className={navBarLinkStyle}>
            <span>Contact</span>
          </Link>
          <Link
            to="/lilextrasumthin"
            onClick={handleNav}
            className={navBarLinkStyle}
          >
            <span>Lil Extra Sumthin</span>
          </Link>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Menu
