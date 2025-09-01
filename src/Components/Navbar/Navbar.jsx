import React, { useState, useEffect } from 'react';

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [animate, setAnimate] = useState(false);

  const toggleMenu = () => setMenu(!menu);

  useEffect(() => setAnimate(true), []);

  const title = "My Portfolio";

  const links = [
    { href: "#About", text: "About" },
    { href: "#Projects", text: "Projects" },
    { href: "#Experience", text: "Experience" },
    { href: "#Contact", text: "Contact" },
  ];

  return (
<nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 bg-[#0f172a] sticky top-0 z-50 shadow-[0_4px_20px_#38bdf8]">
      
      {/* Portfolio Title */}
      <span className="font-bold tracking-wider text-5xl md:text-4xl text-[#38bdf8] flex">
        {title.split("").map((letter, index) => (
          <span
            key={index}
            className={`inline-block transition-transform duration-700 ease-out
              ${animate ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            {letter}
          </span>
        ))}
      </span>

      {/* Links */}
      <ul className={`${menu ? 'block' : 'hidden'} mx-24 py-2 mt-4 font-semibold md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex md:items-center gap-6`}>
        {links.map((link, index) => (
          <a key={index} href={link.href}>
            <li className="text-md text-[#38bdf8] transition-colors duration-300 hover:text-white p-1 md:p-0">
              {link.text}
            </li>
          </a>
        ))}
      </ul>

      {/* Hamburger / Close Icon */}
      <div className="md:hidden absolute right-10 top-6 cursor-pointer text-white text-2xl">
        {menu ? (
          <i className="ri-close-line" onClick={toggleMenu}></i>
        ) : (
          <i className="ri-menu-2-line" onClick={toggleMenu}></i>
        )}
      </div>
    </nav>
  );
};
