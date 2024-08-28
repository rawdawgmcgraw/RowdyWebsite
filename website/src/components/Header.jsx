import header from "../images/RowdyHeader.png";

const Header = () => {
  return (
    <div className='md:block md:h-auto flex items-center h-full'>
      <img
        className='xl:h-[16rem] md:h-[15rem] mix-blend-screen'
        src={header}
        alt='/'
      ></img>
    </div>
  );
};
export default Header;
