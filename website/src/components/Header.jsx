import header from "../images/RowdyHeader.png";

const Header = () => {
  return (
    <div className='md:block md:h-auto flex items-end h-full'>
      <img className='md:h-[15rem] mix-blend-screen' src={header} alt='/'></img>
    </div>
  );
};
export default Header;
