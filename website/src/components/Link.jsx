import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";
/* eslint-disable react/prop-types */

function Link({ to, children, className, activeClassName, onClick }) {
  const { navigate, currentPath } = useNavigation();

  const isActive = currentPath === to;

  const classes = classNames(
    "cursor-pointer",
    "active:text-blue-500",

    activeClassName && isActive && activeClassName,
    className
    // currentPath === to && activeClassName
  );
  const handleClick = (event) => {
    event.preventDefault();
    if (onClick) {
      onClick();
    }
    navigate(to);
  };

  return (
    <a className={classes} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
