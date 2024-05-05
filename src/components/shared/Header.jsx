import { Link, NavLink } from "react-router-dom";
import { BsBag, BsSearch } from "react-icons/bs";

const navlist = (
  <>
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive ? "text-red-811 lg:border-2 lg:border-red-811 rounded-md" : ""
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/about"
      className={({ isActive }) =>
        isActive ? "text-red-811 lg:border-2 lg:border-red-811 rounded-md" : ""
      }
    >
      About
    </NavLink>
    <NavLink
      to="/services"
      className={({ isActive }) =>
        isActive ? "text-red-811 lg:border-2 lg:border-red-811 rounded-md" : ""
      }
    >
      Services
    </NavLink>
    <NavLink
      to="/blog"
      className={({ isActive }) =>
        isActive ? "text-red-811 lg:border-2 lg:border-red-811 rounded-md" : ""
      }
    >
      Blog
    </NavLink>
    <NavLink
      to="/contact"
      className={({ isActive }) =>
        isActive ? "text-red-811 lg:border-2 lg:border-red-811 rounded-md" : ""
      }
    >
      Contact
    </NavLink>
  </>
);

const Header = () => {
  return (
    <div className="mx-auto container xl:max-w-[1140px] pr-4 lg:pl-4 font-inter drawer py-6 z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar p-0">
          <div className="flex-none lg:hidden mr-4">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <Link to="/" className="">
            <img src="/logo.svg" alt="car-doctor-logo" />
          </Link>
          <div className="flex-1 text-center hidden lg:block">
            <div className="menu menu-horizontal items-center text-lg text-dark-002 font-semibold *:px-5 *:py-2">
              {/* Navbar menu content here */}
              {navlist}
            </div>
          </div>
          <div className="flex-1 lg:flex-none justify-end gap-3.5 md:gap-6">
            <BsBag />
            <BsSearch />
            <button className="btn bg-white border-red-811 text-red-811 md:text-lg font-semibold">
              Appointment
            </button>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-80 min-h-full bg-base-200 md:text-lg text-dark-002 font-semibold *:px-5 *:py-2">
          {/* Sidebar content here */}
          {navlist}
        </div>
      </div>
    </div>
  );
};

export default Header;
