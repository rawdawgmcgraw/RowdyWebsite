import { useEffect, useState } from "react";
import pic1 from "../images/mobilePic.jpg";
import pic2 from "../images/mobilePic2.jpg";

const ImgCarousel = () => {
  const images = [pic1, pic2, pic1, pic2, pic1];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className='relative overflow-hidden'>
      <div
        className='flex transition-transform duration-700 ease-out'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className='min-w-90'>
            <img
              src={image}
              alt={`Slide ${index}`}
              className='object-cover w-90'
            />
          </div>
        ))}
      </div>
      <button
        className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 p-2'
        onClick={() =>
          setCurrentIndex((currentIndex - 1 + images.length) % images.length)
        }
      >
        &#8592;
      </button>
      <button
        className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 p-2'
        onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
      >
        &#8594;
      </button>
    </div>
  );
};

export default ImgCarousel;
