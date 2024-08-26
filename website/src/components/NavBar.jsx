import Link from "./Link";

const NavBar = () => {
  const links = [
    { label: "Home", path: "/" },
    { label: "Bio", path: "/bio" },
    { label: "Nick's Bio", path: "/nickbio" },
    { label: "Geronimos's Bio", path: "/geronimobio" },
    { label: "Billy's Bio", path: "/billybio" },
    { label: "Trey's Bio", path: "/treybio" },
    { label: "Jefe's Bio", path: "/jefebio" },
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
    <div className='text-center'>
      <div>{renderedLinks}</div>
    </div>
  );
};
export default NavBar;
