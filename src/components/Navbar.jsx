import { useState } from "react";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";
import { nanoid } from "nanoid";
import style from "../style";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleNavClick = (id) => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      if (section.id === id) {
        window.scrollTo(0, section.offsetTop);
      }
    });
  };

  return (
    <nav
      className={`${style.boxWidth} ${style.paddingX} py-6 font-poppins relative flex justify-between items-center`}
    >
      <a href="/">
        <img
          className="w-[124px] h-[75px] lg:w-[200px]"
          src={logo}
          alt="logo"
        />
      </a>

      <div className="hidden sm:flex">
        <ul className="flex items-center">
          {navLinks.map((e) => {
            return (
              <li
                className={`${
                  e === navLinks[navLinks.length - 1] ? "mr-0" : "mr-5"
                } ${
                  e.id === navLinks[0].id ? "nav-active" : ""
                } cursor-pointer transition-all duration-200 text-dimWhite hover:text-white md:text-[18px]`}
                id={e.id}
                key={nanoid()}
                onClick={() => {
                  handleNavClick(e.id);
                }}
              >
                {e.title}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="sm:hidden flex items-center justify-end flex-1">
        <img
          className="w-[28px] h-[28px] cursor-pointer object-contain"
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => {
            setToggle((prev) => {
              return !prev;
            });
          }}
        />
      </div>

      <div
        className={`${
          toggle ? "flex" : "hidden"
        } sm:hidden sidebar bg-black-gradient p-6 z-40 absolute top-20 right-0 px-10 rounded-xl`}
      >
        <ul className="flex flex-col items-center">
          {navLinks.map((e) => {
            return (
              <li
                className={`${
                  e === navLinks[navLinks.length - 1] ? "mb-0" : "mb-5"
                } ${
                  e.id === navLinks[0].id ? "nav-active" : ""
                } cursor-pointer transition-all duration-200 text-White hover:text-white`}
                id={e.id}
                key={nanoid()}
                onClick={() => {
                  handleNavClick(e.id);
                }}
              >
                {e.title}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
