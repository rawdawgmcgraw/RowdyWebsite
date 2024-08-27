import back from '../images/backArrow.svg'
import LinkWrap from './LinkWrap'

const Back = () => {
  return (
    <div className="rounded-full bg-black/60 hover:bg-black p-4">
      <LinkWrap to={'/bio'}>
        <img className="h-12 hover:scale-105" src={back} alt="" />
      </LinkWrap>
    </div>
  )
}

export default Back
