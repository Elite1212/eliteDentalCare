import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import { useLocation } from "react-router-dom";

export default function Nav() {
  const [open, setOpen] = useState(false);
//   const location = useLocation();

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Gallery",
      href: "/gallery",
    },
    {
      name: "Our Services",
      href: "/services",
    },
    {
      name: "About",
      href: "/about",
    },
  ];
//   const show = location.pathname == "/" ? false : true;
  return (
    <nav
      className={` w-full py-2 px-4 md:flex md:justify-between md:px-10 md:py-5 relative z-50 `}
    >
      <div className="flex items-center justify-between">
        {!open && (
          <Link to={"/"} className="w-[80px] md:w-[90px]">
            {
              <img
                alt="logo"
                src="/logo1.png"
                className="w-full h-full object-cover"
              />
            }
          </Link>
        )}
        {open ? (
          <div className=" bg-white backdrop-blur bg-opacity-30 w-[95%]  absolute top-2 right-2 flex flex-col gap-2 px-10 py-10 rounded-md md:hidden">
            <div className="absolute top-5 right-5 z-50">
              <h1
                onClick={() => setOpen(!open)}
                className="text-primary text-2xl font-bold cursor-pointer"
              >
                X
              </h1>
            </div>
            {links.map((item, index) => (
              <div
                onClick={() => setOpen(!open)}
                key={index}
                className="text-gray-900 text-xl font-bold"
              >
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-primary font-bold" : "text-gray-800"
                  }
                  exact="true"
                  activeclassname="text-primary"
                  to={item.href}
                >
                  {item.name}
                </NavLink>
              </div>
            ))}
          </div>
        ) : (
          <div
            onClick={() => setOpen(!open)}
            className="corsor-pointer md:hidden"
          >
            <ion-icon
              style={{ color: "black", fontSize: "40px", fontWeight: "bold" }}
              name="menu-outline"
            ></ion-icon>
          </div>
        )}
      </div>
      <div className="hidden  md:flex lg:hidden items-center gap-5">
        {links.slice(0, 4).map((item, index) => (
          <div key={index} className="text-gray-800 text-lg font-semibold">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "text-gray-800"
              }
              exact="true"
              activeclassname="text-primary"
              to={item.href}
            >
              {item.name}
            </NavLink>
            {/* <a href={item.href}>{item.name}</a> */}
          </div>
        ))}
        <a
          href="#footer"
          className="text-gray-800 text-lg font-semibold cursor-pointer"
        >
          More
        </a>
      </div>
      <div className="hidden lg:flex items-center gap-10">
        {links.slice(0, 8).map((item, index) => (
          <div key={index} className="text-gray-800 text-lg font-semibold">
            {/* <a href={item.href}>{item.name}</a> */}
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "text-gray-800"
              }
              exact="true"
              activeclassname="text-primary"
              to={item.href}
            >
              {item.name}
            </NavLink>
          </div>
        ))}
        <a
          href="#footer"
          className="text-gray-800 text-lg font-semibold cursor-pointer"
        >
          More
        </a>
      </div>
    </nav>
  );
}
