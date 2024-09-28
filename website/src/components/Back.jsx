import back from "../images/backArrow.svg";
import LinkWrap from "./LinkWrap";
import { useState, useEffect } from "react";
import { useMenu } from "../context/menu";

const Back = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { setBioOpen } = useMenu();

  const mdBreakpoint = 768;

  const handleResize = () => {
    setIsMobile(window.innerWidth < mdBreakpoint);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleBackClick = () => {
    if (isMobile) {
      setBioOpen(true);
    }
  };

  return (
    <div className='rounded-full bg-black/60 hover:bg-black p-4'>
      <LinkWrap to={isMobile ? "/" : "/bio"} onBeforeNavigate={handleBackClick}>
        <img className='h-12 hover:scale-105' src={back} alt='Back Arrow' />
      </LinkWrap>
    </div>
  );
};

export default Back;
