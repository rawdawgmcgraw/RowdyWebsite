const Embeds = () => {
  return (
    <div className='flex flex-col items-center h-full w-full'>
      <iframe
        className='vid'
        width='560'
        height='315'
        src='https://www.youtube.com/embed/B8N9qrY00Ww?si=mVlcgESyhGfiXBxT'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowfullscreen
      ></iframe>
      <div className='w-full mt-3 grid grid-cols-4 grid-rows-1'>
        <iframe
          className='vids'
          src='https://www.youtube.com/embed/HV4P7Xx7SWU?si=OmTeejrrYfJmZpeZ'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowfullscreen
        ></iframe>
        <iframe
          className='vids'
          src='https://www.youtube.com/embed/r0Th11HFyC0?si=yLxMNSx4lWz0yZjl'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowfullscreen
        ></iframe>
        <iframe
          className='vids'
          src='https://www.youtube.com/embed/Z9f-nLc71nY?si=hJOqsZdocrMH1hZJ'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowfullscreen
        ></iframe>
        <iframe
          className='vids'
          src='https://www.youtube.com/embed/bAYzAUcurik?si=ZpUqU48NjdHKy2bc'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Embeds;
