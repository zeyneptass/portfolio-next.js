"use client";

import Image from "next/image";
import logo from "../img/logo.svg";
import menu from "../img/hamburger.svg";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Flowbite'ı dinamik olarak import et
    import('flowbite');
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="fixed w-full">
        <nav className="bg-white border-gray-200 py-2.5">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <a href="#" className="flex items-center">
              <Image src={logo} alt="logo" width={100} height={100} className="h-6 mr-2"  />
              <span className="text-gray-900 text-xl font-semibold">Portfolio</span>
            </a>
            {/* button & mobile icon */}
            <div className="flex items-center lg:order-2">
              <a href="#" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2">Get Started</a>
              <button 
                onClick={toggleMenu}
                data-collapse-toggle="menu" 
                className="p-2 ml-1 text-sm text-gray-500 rounded-lg cursor-pointer lg:hidden"
              >
                <Image src={menu} alt="menu"  className="h-6 mr-2"  />
              </button>
            </div>
           {/*  menu */}
            <div 
              id="menu" 
              className={`w-full lg:w-auto lg:flex items-center justify-between lg:order-1 ${isMenuOpen ? 'block' : 'hidden'}`}
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8">
                <li>
                  <a href="#" className="block py-2 px-3 text-white rounded bg-purple-700 lg:bg-transparent lg:text-purple-700 lg:p-0">Home</a>
                </li>
                 <li>
                  <a href="#" className="block py-2 px-3 text-gray-700 border-b border-gray-100 rounded lg:bg-transparent lg:border-0 lg:p-0 lg:hover:text-purple-700">About</a>
                </li>
                 <li>
                  <a href="#" className="block py-2 px-3 text-gray-700 border-b border-gray-100 rounded lg:bg-transparent lg:border-0 lg:p-0 lg:hover:text-purple-700">Services</a>
                </li>
                 <li>
                  <a href="#" className="block py-2 px-3 text-gray-700 border-b border-gray-100 rounded lg:bg-transparent lg:border-0 lg:p-0 lg:hover:text-purple-700">Projects</a>
                </li>
                 <li>
                  <a href="#" className="block py-2 px-3 text-gray-700 border-b border-gray-100 rounded lg:bg-transparent lg:border-0 lg:p-0 lg:hover:text-purple-700">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}