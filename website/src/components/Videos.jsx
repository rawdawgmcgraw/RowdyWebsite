const Videos = () => {
  return (
    <div className='flex flex-col items-center'>
      <iframe
        src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
        height={390}
        width={640}
      />
    </div>
  );
};

export default Videos;
