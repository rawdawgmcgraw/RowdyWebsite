const Embeds = () => {
  return (
    <div className='flex w-full mt-8'>
      <div className='w-[80%] overflow-hidden rounded-2xl'>
        <iframe
          className=''
          width='560'
          height='315'
          src='https://www.youtube.com/embed/OO6QUgGMp2A?si=-HFKhJNmkYvDis57'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <iframe
          className=''
          width='560'
          height='315'
          src='https://www.youtube.com/embed/3pYHCGYJbw0?si=WwxcGYToQqxsFMX2'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <iframe
          className=''
          width='560'
          height='315'
          src='https://www.youtube.com/embed/aGqzaGKzZmk?si=nlNoZmTMNg7rJHpW'
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
