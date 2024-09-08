import header from "../images/RowdyHeader.png";

const Header = () => {
  return (
    <div className='md:block sm:h-1/5 flex items-center mt-32 md:mt-0'>
      <img className='h-full mix-blend-screen' src={header} alt='/'></img>
    </div>
  );
};
export default Header;
