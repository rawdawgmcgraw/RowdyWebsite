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
        className='mb-3 text-xl text-white/80 hover:text-white mx-4'
        activeClassName='font-bold border-l-4 border-white pl-2'
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className='hidden my-4 md:flex items-center text-center bg-gray-800/40 rounded-full'>
      <div>{renderedLinks}</div>
    </div>
  );
};
export default NavBar;
