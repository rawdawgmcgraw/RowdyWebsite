import back from "../images/backArrow.svg";
import LinkWrap from "./LinkWrap";

const Back = () => {
  return (
    <div>
      <LinkWrap to={"/bio"}>
        <img className='h-20 mt-12' src={back} alt='' />
      </LinkWrap>
    </div>
  );
};

export default Back;
