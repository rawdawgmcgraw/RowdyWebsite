import youtube from '../images/youtube-cropped.png'
import spotify from '../images/spotify-cropped.png'
import facebook from '../images/facebook-cropped.png'
import instagram from '../images/instagram-cropped.png'

const Social = () => {
  const iconStyle =
    'h-[10vh] hover:scale-110 ease-in duration-200 cursor-pointer'
  return (
    <div className="flex items-center justify-center gap-10 pt-40">
      <a
        href="https://www.facebook.com/profile.php?id=100089875520742&sk=about"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className={iconStyle} src={facebook} alt="/" />
      </a>
      <a
        href="https://www.instagram.com/letsgetrowdy_htx/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className={iconStyle} src={instagram} alt="/" />
      </a>
      <a
        href="https://www.youtube.com/@Letsgetrowdyhtx"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className={iconStyle} src={youtube} alt="/" />
      </a>
      <a
        href="https://open.spotify.com/artist/4udrE3baOs3PK5k0CPr44V"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className={iconStyle} src={spotify} alt="/" />
      </a>
    </div>
  )
}
export default Social
