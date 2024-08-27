import Link from "./Link";

const NavBar = () => {
  const links = [
    { label: "Home", path: "/" },
    { label: "Bio", path: "/bio" },
    { label: "Contact", path: "/contact" },
    { label: "Videos", path: "/videos" },
    { label: "Merch", path: "/merch" },
    { label: "Lil Extra Sumthin'", path: "/extra" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className='mb-3 text-white hover:text-purple-700 mx-2'
        activeClassName='font-bold border-l-4 border-purple-700 pl-2 text-purple-600'
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className='hidden md:flex items-center text-center'>
      <div>{renderedLinks}</div>
    </div>
  );
};
export default NavBar;
