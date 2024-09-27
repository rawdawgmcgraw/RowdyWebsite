import Embeds from "./Embeds";
import Popup1 from "./Popup1";

const Videos = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <Embeds />
      <div className='mb-16'>
        <Popup1 />
      </div>
    </div>
  );
};

export default Videos;
