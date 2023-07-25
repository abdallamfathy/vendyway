import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "/src/assets/theme1/icons/logo.png";
import shopBag from "/src/assets/theme1/icons/shopBag.png";
import SearchInput from "../SearchInput";
import { BsPerson, BsSearch } from "react-icons/bs";
import { RiMenu2Fill } from "react-icons/ri";
import home from "/src/assets/theme1/icons/sidemenu/home.svg";
import menu from "/src/assets/theme1/icons/sidemenu/menu.svg";
import about from "/src/assets/theme1/icons/sidemenu/about.svg";
import contact from "/src/assets/theme1/icons/sidemenu/contact.svg";
import avatar from "/src/assets/theme1/images/avatar.png";
import off from "/src/assets/theme1/icons/sidemenu/off.svg";
import { useOrderContext } from "../../../utils/OrderContext";

const useClickOutside = (callback: () => void) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]);

  return ref;
};

const Navbar: React.FC = () => {
  const Navigation = [
    {
      title: "Home",
      link: "/",
      icon: home,
    },
    {
      title: "Menu",
      link: "/products",
      icon: menu,
    },
    {
      title: "About Us",
      link: "/about-us",
      icon: about,
    },
    {
      title: "Contact",
      link: "/contact-us",
      icon: contact,
    },
  ];

  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleOutsideClick = () => {
    if (showMenu) {
      setShowMenu(false);
    }
  };

  const divRef = useClickOutside(handleOutsideClick);
  const { toggleMenu } = useOrderContext();

  return (
    <>
      <div className="bg-white sticky top-0  shadow-sm z-40">
        <div className="container mx-auto py-4 max-md:p-4 ">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-5">
              <RiMenu2Fill
                size={24}
                className="md:hidden"
                onClick={handleShowMenu}
              />
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="flex items-center md:gap-5 gap-3">
              <div className="max-md:hidden">
                <SearchInput />
              </div>
              <Link to="/cart">
                <img src={shopBag} alt="shopBag" />
              </Link>
              <BsSearch className="hidden max-md:block text-xl" />
              <Link onClick={toggleMenu} to="/user-dashboard">
                <BsPerson size={30} className="" />
              </Link>
              <Link
                to={"/sign-up"}
                className="max-md:hidden bg-pink1 text-white rounded-full p-2 px-5 hover:bg-orange-500 transition-colors duration-400 ease-in ">
                Sign In
              </Link>
            </div>
          </div>
        </div>
        <div className="md:flex hidden justify-center items-center md:gap-20 gap-5  bg-pink1 text-[#EBEBEB] font-medium py-4 ">
          {Navigation.map((nav, index) => {
            return (
              <NavLink key={index} to={nav.link}>
                {nav.title}
              </NavLink>
            );
          })}
        </div>
        

        {/* side menu */}

        <div
          id="drawer-example"
          className={`fixed top-0 left-0 z-50 h-screen p-4 overflow-y-auto transition-transform bg-gray1 w-80  ${
            showMenu ? "" : "-translate-x-full"
          }`}
          tabIndex={-1}
          aria-labelledby="drawer-label">
          <div
            className="flex flex-col justify-between h-full p-4"
            ref={divRef}>
            <div className="flex justify-between items-center ">
              <div className="flex gap-2 items-center">
                <img src={avatar} alt="perosn" className="w-14 h-14" />
                <p className="text-sm font-semibold">Imran Molla</p>
              </div>

              <button
                type="button"
                onClick={handleShowMenu}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center border border-lgray1">
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close menu</span>
              </button>
            </div>

            <div className="flex flex-col gap-10">
              {Navigation.map((nav, index) => {
                return (
                  <div
                    className="flex  items-center gap-4 text-lgray1"
                    key={index}>
                    <img src={nav.icon} alt="icon" />
                    <NavLink
                      className=" sideMenu text-sm text-dark1"
                      to={nav.link}>
                      {nav.title}
                    </NavLink>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-6">
              <button className="flex w-fit gap-2 items-center px-2 py-2 rounded-full bg-pink1 text-white text-sm">
                <img src={off} alt="off icon" /> Log Out
              </button>
              <p className="text-sm text-lgray1">made by @vandyway</p>
            </div>
          </div>
        </div>
      </div>
      <div  className="md:hidden relative  top-0 flex justify-center mt-5">
            <SearchInput />
      </div>
    </>
  );
};

export default Navbar;
