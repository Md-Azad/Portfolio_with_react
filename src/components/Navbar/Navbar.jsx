// import { Link } from "react-scroll";

const Navbar = () => {
  return (
    // <div className="navbar  text-white">
    //   <div className="flex-1" >
    //     <a className="btn btn-ghost text-xl text-white">Azad Home</a>
    //   </div>
    //   <div className="flex-none">
    //     <ul className="menu menu-horizontal px-1">
    //       <li>
    //       <Link to="about" smooth={true} duration={500}>About</Link>
    //       </li>
    //       <li>
    //         <a>Experience_</a>
    //       </li>
    //       <li>
    //         <a>Projects_</a>
    //       </li>
    //       <li>
    //         <a>Skills_</a>
    //       </li>

    //       <li>
    //         <a>Contact Me</a>
    //       </li>

    //     </ul>
    //   </div>
    // </div>
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>

            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-[#4795A8]">Azad.dev</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 1</a>
          </li>

          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
