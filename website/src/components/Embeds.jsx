import { useState } from "react";

const Embeds = () => {
  // const video1ID = 'B8N9qrY00Ww?si=mVlcgESyhGfiXBxT'
  // const video2ID = 'HV4P7Xx7SWU?si=OmTeejrrYfJmZpeZ'
  // const video3ID = 'r0Th11HFyC0?si=yLxMNSx4lWz0yZjl'
  // const video4ID = 'Z9f-nLc71nY?si=hJOqsZdocrMH1hZJ'
  // const video5ID = 'bAYzAUcurik?si=ZpUqU48NjdHKy2bc'

  // const video1ID = "B8N9qrY00Ww";
  const video2ID = "HV4P7Xx7SWU";
  const video3ID = "r0Th11HFyC0";
  const video4ID = "Z9f-nLc71nY";
  const video5ID = "bAYzAUcurik";
  const [featuredVideoId, setFeaturedVideoId] = useState("B8N9qrY00Ww");
  const [thumbnails, setThumbnails] = useState([
    // { id: video1ID },
    { id: video2ID },
    { id: video3ID },
    { id: video4ID },
    { id: video5ID },
  ]);

  const handleThumbnailClick = (index) => {
    // Swap the featured video with the clicked thumbnail
    const newFeaturedVideoId = thumbnails[index].id;
    const newThumbnails = thumbnails.map((thumbnail, i) =>
      i === index ? { id: featuredVideoId } : thumbnail
    );
    setFeaturedVideoId(newFeaturedVideoId);
    setThumbnails(newThumbnails);
  };

  return (
    <div className='max-w-4xl h-full mx-auto mt-12 text-center flex flex-col'>
      {/* Featured Video */}
      <div className='mb-4'>
        <iframe
          className='vid'
          src={`https://www.youtube.com/embed/${featuredVideoId}?autoplay=1`}
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
        ></iframe>
      </div>

      {/* Thumbnails Row */}
      <div className='flex justify-center gap-4'>
        {thumbnails.map((thumbnail, index) => (
          <div
            key={index}
            className='vids'
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              className='w-40 h-24 md:w-56 md:h-32 object-cover rounded-2xl'
              src={`https://img.youtube.com/vi/${thumbnail.id}/hqdefault.jpg`}
              alt={`Thumbnail of video ${thumbnail.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Embeds;
