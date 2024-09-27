/* eslint-disable react/prop-types */
import classNames from 'classnames'

const Headshot = ({ src, alt, className, override, onClick }) => {
  const headShotStyling = 'lg:h-38 md:h-40 hover:scale-110 ease-in duration-200'

  const classes = override ? className : classNames(headShotStyling, className)
  return <img className={classes} src={src} alt={alt} onClick={onClick}></img>
}
export default Headshot
