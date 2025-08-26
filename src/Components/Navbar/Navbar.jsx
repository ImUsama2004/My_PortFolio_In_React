import React, { useState,useEffect } from 'react';

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [animate, setAnimate] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

    useEffect(() => {
    setAnimate(true);
  }, []);

  const title = "My Portfolio";

    return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 bg-[#0f172a] shadow-lg sticky top-0 z-50">
      <span className="font-bold tracking-wide text-2xl text-[#38bdf8] flex">
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

      <ul className={`${menu ? 'block' : 'hidden'} mx-24 py-2 mt-4 font-semibold bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex md:items-center gap-6`}>

        <a href="#About">
          <li className="text-md transition-all duration-300 p-1 md:p-0 rounded-md hover:bg-[#1e293b] hover:shadow-md hover:text-[#38bdf8]">About</li>
        </a>
        <a href="#Projects">
          <li className="text-md transition-all duration-300 p-1 md:p-0 rounded-md hover:bg-[#1e293b] hover:shadow-md hover:text-[#38bdf8]">Projects</li>
        </a>
        <a href="#Experience">
          <li className="text-md transition-all duration-300 p-1 md:p-0 rounded-md hover:bg-[#1e293b] hover:shadow-md hover:text-[#38bdf8]">Experience</li>
        </a>
        <a href="#Contact">
          <li className="text-md transition-all duration-300 p-1 md:p-0 rounded-md hover:bg-[#1e293b] hover:shadow-md hover:text-[#38bdf8]">Contact</li>
        </a>
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
