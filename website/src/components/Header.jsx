import header from "../images/RowdyHeader.png";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className='h-1/5 flex flex-col items-center'>
      <div className='md:block h-[90%] mt-2 md:mt-0'>
        <img className='h-full mix-blend-screen' src={header} alt='/'></img>
      </div>
      <div className='z-20'>
        <NavBar />
      </div>
    </div>
  );
};
export default Header;
