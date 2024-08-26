// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
  return (
    <div className='flex flex-col h-screen w-full text-white items-center'>
      {children}
    </div>
  );
};

export default Container;
