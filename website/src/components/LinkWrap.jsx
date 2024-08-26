import useNavigation from "../hooks/use-navigation";

const LinkWrap = ({ to, children, className, activeClassName }) => {
  const { navigate, currentPath } = useNavigation();

  const classes = `${className} ${currentPath === to ? activeClassName : ""}`;

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} className={classes} onClick={handleClick}>
      {children}
    </a>
  );
};

export default LinkWrap;
