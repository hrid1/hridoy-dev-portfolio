import React, { useState } from "react";
import logo from "../assets/hrlogo2.png";
import { NAVIGATION_LINKS } from "../constants";
import { Link, NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className="fixed z-20 inset-x-0 top-0 ">
        {/* desktop menu */}
        <div className="mx-auto hidden max items-center justify- rounded-lg border-b-2 border-stone-50/30 bg-black/20 py-3  backdrop-blur-lg lg:flex justify-between px-2">
          <div className="flex justify-between gap-6">
            <Link to="/">
              <img src={logo} width={150} alt="logo" />
            </Link>
          </div>
          {/* <div>
            <ul className="flex items-center gap-6 group">
              {NAVIGATION_LINKS.map((item, idx) => (
                <li key={idx}>
                  <NavLink
                    onClick={(e) => handleLinkClick(e, item.href)}
                    to={item.href}
                    className=" group-hover:text-gray-500 hover:text-white"
                  >
                    {"// "}
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div> */}
          <div>
            <ul className="flex items-center gap-6 group">
              {NAVIGATION_LINKS.map((item, idx) => (
                <li key={idx} className="relative group-hover:text-gray-400">
                  <NavLink
                    onClick={(e) => handleLinkClick(e, item.href)}
                    to={item.href}
                    className="hover:text-white"
                  >
                    {"// "}
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <a
              href="https://docs.google.com/document/d/1iffJJs6aYtAwBeeIPMse1pq10blzldbkyq5HIOQqhFo/export?format=pdf"
              className="font-medium px-4 py-2 bg-white text-black rounded-lg"
              // target="_blank"
              rel="noopener noreferrer"
              download="Hridoy_ShilCV.pdf"
            >
              Download CV
            </a>
          </div>
        </div>
        {/* mobile menu */}
        <div className="rounded-lg backdrop-blur-md  lg:hidden">
          <div className="flex items-center justify-between">
            <div>
              <a href="#">
                <img src={logo} width={90} alt="logo" className="m-2" />
              </a>
            </div>
            <div className="flex items-center">
              <a
                href="https://docs.google.com/document/d/1iffJJs6aYtAwBeeIPMse1pq10blzldbkyq5HIOQqhFo/export?format=pdf"
                className="px-2 py-1 font-medium text-sm  bg-white text-black rounded-lg"
              >
                Download CV
              </a>
              <button
                className="focus:outline-none lg:hidden "
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <FaTimes className="m-2 h-6 w-5" />
                ) : (
                  <FaBars className="m-2 h-6 w-5"></FaBars>
                )}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
              {NAVIGATION_LINKS.map((item, idx) => (
                <li key={idx}>
                  <Link
                    onClick={(e) => handleLinkClick(e, item.href)}
                    to={item.href}
                    className="block w-full text-lg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
