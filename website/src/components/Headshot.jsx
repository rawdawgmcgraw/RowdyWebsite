/* eslint-disable react/prop-types */
const Headshot = ({ src, alt }) => {
  const headShotStyling = "md:h-36 hover:scale-110 ease-in duration-200";

  return <img className={headShotStyling} src={src} alt={alt}></img>;
};
export default Headshot;
