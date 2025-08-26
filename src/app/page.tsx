"use client";

import Image from "next/image";
import logo from "../img/logo.svg";
import menu from "../img/hamburger.svg";
import profile from "../img/profile.png";
import portrait from "../img/portrait.jpg";
import user from "../img/user.png";
import p1 from "../img/p1.jpg";
import p2 from "../img/p2.jpg";
import p3 from "../img/p3.jpg";
import p4 from "../img/p4.jpg";
import p5 from "../img/p5.jpg";
import p6 from "../img/p6.jpg";

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
      <header className="fixed w-full z-10">
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
      <section className="bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-4 pt-30  pb-10 py-8 lg:pb-0 lg:pt-20 grid lg:grid-cols-12">
          {/* left */}
          <div className="lg:col-span-7 place-self-center">
           <div className="text">
            <h1 className="max-w-2xl mt-10 mb-4 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">Hi, I'm John </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus repudiandae ducimus iusto alias asperiores delectus dolore illo nostrum perspiciatis itaque. Cum reiciendis ipsam provident in distinctio magni ad perspiciatis eveniet?</p>
           </div>
           <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a href="#" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-purple-500 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">View on Github</a>
           </div>
          </div>
          {/* right */}
          <div className="hidden lg:flex lg:mt-0 lg:col-span-5">
             <Image src={profile} alt="profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 border-t border-gray-300">
        <div className="pt-5 pb-5">
          <div className="max-w-screen-xl mx-auto px-7 py-15">
            <div className="flex flew-wrap tex-center gap-y-3">
              <div className="w-[50%] lg:w-1/4 flex items-center justify-start">
                <div className="bg-purple-300 text-white p-3 lg:p-4 border-3 lg:border-4 rounded-full border-purple-500">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z"/></svg>
                </div>
                <div className="flex flex-col items-start ms-2">
                  <span className="text-lg lg:text-xl font-bold">750</span>
                  <span className="text-sm lg:text-lg font-light">Project Complete</span>
                </div>
              </div>
              <div className="w-[50%] lg:w-1/4 flex items-center justify-start">
                <div className="bg-purple-300 text-white p-3 lg:p-4 border-3 lg:border-4 rounded-full border-purple-500">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
                </div>
                <div className="flex flex-col items-start ms-2">
                  <span className="text-lg lg:text-xl font-bold">75</span>
                  <span className="text-sm lg:text-lg font-light">Happy Clients</span>
                </div>
              </div>
              <div className="w-[50%] lg:w-1/4 flex items-center justify-start">
                <div className="bg-purple-300 text-white p-3 lg:p-4 border-3 lg:border-4 rounded-full border-purple-500">
                  
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M440-240q-117 0-198.5-81.5T160-520v-240q0-33 23.5-56.5T240-840h500q58 0 99 41t41 99q0 58-41 99t-99 41h-20v40q0 117-81.5 198.5T440-240ZM240-640h400v-120H240v120Zm200 320q83 0 141.5-58.5T640-520v-40H240v40q0 83 58.5 141.5T440-320Zm280-320h20q25 0 42.5-17.5T800-700q0-25-17.5-42.5T740-760h-20v120ZM160-120v-80h640v80H160Zm280-440Z"/></svg>
                </div>
                <div className="flex flex-col items-start ms-2">
                  <span className="text-lg lg:text-xl font-bold">670</span>
                  <span className="text-sm lg:text-lg font-light">Cups of Coffee</span>
                </div>
              </div>
              <div className="w-[50%] lg:w-1/4 flex items-center justify-start">
                <div className="bg-purple-300 text-white p-3 lg:p-4 border-3 lg:border-4 rounded-full border-purple-500">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>
                </div>
                <div className="flex flex-col items-start ms-2">
                  <span className="text-lg lg:text-xl font-bold">10</span>
                  <span className="text-sm lg:text-lg font-light">Years of Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pt-10 pb-10 mb-10">
        <div className="max-w-screen-xl mx-auto px-7 py-15 grid lg:grid-cols-5 space-x-5">
          <div className="hidden lg:flex lg:col-span-2 mt-4">
            <Image src={portrait} alt="portrait" width={500} height={500} className="rounded-xl"/>
          </div>
          <div className="lg:col-span-3 flex flex-col justify-center lg:ms-3">
            <h1 className="max-w-2xl mt-10 mb-4 text-xl font-bold tracking-tight md:text-2xl xl:text-3xl">About Me </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus repudiandae ducimus iusto alias asperiores delectus dolore illo nostrum perspiciatis itaque. Cum reiciendis ipsam provident in distinctio magni ad perspiciatis eveniet?
            </p>
            <ul className="mt-4 md:px-0 px-2">
              <li className="flex">
                <span className="w-[130px]">Name:</span>
                <span className="text-gray-500">John Doe</span>
              </li>
              <li className="flex">
                <span className="w-[130px]">Date of Birth:</span>
                <span className="text-gray-500">January 1, 1990</span>
              </li>
               <li className="flex">
                <span className="w-[130px]">Adress:</span>
                <span className="text-gray-500">San Francisco, CA 97987 USA</span>
              </li>
              <li className="flex">
                <span className="w-[130px]">Zip Code:</span>
                <span className="text-gray-500">41000</span>
              </li>
              <li className="flex">
                <span className="w-[130px]">Email:</span>
                <span className="text-gray-500">johndoe@gmail.com</span>
              </li>

            </ul>
          </div>

        </div>
      </section>

      <section className="bg-gray-100 pt-10 ">
        <div className="max-w-screen-lg mx-auto px-7 pt-15 text-center">
           <h1 className="mb-4 text-xl font-bold tracking-tight md:text-2xl xl:text-3xl">My Skills</h1>
            <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus repudiandae ducimus iusto alias asperiores delectus dolore illo nostrum perspiciatis itaque. Cum reiciendis ipsam provident in distinctio magni ad perspiciatis eveniet?</p>
            <div className="skills grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10">
             
              <div className="bg-white p-10 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center gap-y-4">
                  <span className="font-semibold text-xl">CSS</span>
                  <div className="size-30 relative">
                    <svg className="size-full" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200" strokeWidth="2">
                        </circle>
                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-purple-600" strokeWidth="2" strokeDasharray="100, 100" strokeDashoffset="10" strokeLinecap="round">
                        </circle>
                    </svg>
                    <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <span className="text-center text-xl font-semibold text-purple-600">90%</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between px-5 mt-3">
                  <div className="flex flex-col">
                    <span className="text-purple-500 font-semibold text-lg">28%</span>
                    <span className="text-gray-600 text-sm">Last Week</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-purple-500 font-semibold text-lg">60%</span>
                    <span className="text-gray-600 text-sm">Last Month</span>
                  </div>
                </div>
              </div>
               <div className="bg-white p-10 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center gap-y-4">
                  <span className="font-semibold text-xl">JavaScript</span>
                  <div className="size-30 relative">
                    <svg className="size-full" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200" strokeWidth="2">
                        </circle>
                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-purple-600" strokeWidth="2" strokeDasharray="100, 100" strokeDashoffset="20" strokeLinecap="round">
                        </circle>
                    </svg>
                    <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <span className="text-center text-xl font-semibold text-purple-600">80%</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between px-5 mt-3">
                  <div className="flex flex-col">
                    <span className="text-purple-500 font-semibold text-lg">28%</span>
                    <span className="text-gray-600 text-sm">Last Week</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-purple-500 font-semibold text-lg">60%</span>
                    <span className="text-gray-600 text-sm">Last Month</span>
                  </div>
                </div>
              </div>
               <div className="bg-white p-10 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center gap-y-4">
                  <span className="font-semibold text-xl">React</span>
                  <div className="size-30 relative">
                    <svg className="size-full" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200" strokeWidth="2">
                        </circle>
                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-purple-600" strokeWidth="2" strokeDasharray="100, 100" strokeDashoffset="30" strokeLinecap="round">
                        </circle>
                    </svg>
                    <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <span className="text-center text-xl font-semibold text-purple-600">70%</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between px-5 mt-3">
                  <div className="flex flex-col">
                    <span className="text-purple-500 font-semibold text-lg">28%</span>
                    <span className="text-gray-600 text-sm">Last Week</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-purple-500 font-semibold text-lg">60%</span>
                    <span className="text-gray-600 text-sm">Last Month</span>
                  </div>
                </div>
              </div>
               <div className="bg-white p-10 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center gap-y-4">
                  <span className="font-semibold text-xl">Node.js</span>
                  <div className="size-30 relative">
                    <svg className="size-full" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200" strokeWidth="2">
                        </circle>
                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-purple-600" strokeWidth="2" strokeDasharray="100, 100" strokeDashoffset="15" strokeLinecap="round">
                        </circle>
                    </svg>
                    <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <span className="text-center text-xl font-semibold text-purple-600">85%</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between px-5 mt-3">
                  <div className="flex flex-col">
                    <span className="text-purple-500 font-semibold text-lg">28%</span>
                    <span className="text-gray-600 text-sm">Last Week</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-purple-500 font-semibold text-lg">60%</span>
                    <span className="text-gray-600 text-sm">Last Month</span>
                  </div>
                </div>
              </div>
               <div className="bg-white p-10 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center gap-y-4">
                  <span className="font-semibold text-xl">Laravel</span>
                  <div className="size-30 relative">
                    <svg className="size-full" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200" strokeWidth="2">
                        </circle>
                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-purple-600" strokeWidth="2" strokeDasharray="100, 100" strokeDashoffset="20" strokeLinecap="round">
                        </circle>
                    </svg>
                    <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <span className="text-center text-xl font-semibold text-purple-600">80%</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between px-5 mt-3">
                  <div className="flex flex-col">
                    <span className="text-purple-500 font-semibold text-lg">28%</span>
                    <span className="text-gray-600 text-sm">Last Week</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-purple-500 font-semibold text-lg">60%</span>
                    <span className="text-gray-600 text-sm">Last Month</span>
                  </div>
                </div>
              </div>
               <div className="bg-white p-10 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center gap-y-4">
                  <span className="font-semibold text-xl">Php</span>
                  <div className="size-30 relative">
                    <svg className="size-full" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200" strokeWidth="2">
                        </circle>
                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-purple-600" strokeWidth="2" strokeDasharray="100, 100" strokeDashoffset="30" strokeLinecap="round">
                        </circle>
                    </svg>
                    <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <span className="text-center text-xl font-semibold text-purple-600">70%</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between px-5 mt-3">
                  <div className="flex flex-col">
                    <span className="text-purple-500 font-semibold text-lg">28%</span>
                    <span className="text-gray-600 text-sm">Last Week</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-purple-500 font-semibold text-lg">60%</span>
                    <span className="text-gray-600 text-sm">Last Month</span>
                  </div>
                </div>
              </div>
              
            </div>
        </div>
      </section>

      <section className="bg-gray-100 ">
        <div className="max-w-screen-lg px-7 mx-auto py-15 text-center">
          <h1 className="mb-4 pt-8 text-xl font-bold tracking-tight md:text-2xl xl:text-3xl">Services</h1>
          <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, animi?</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 space-y-10 lg:space-y-0 my-20">
            <div className="group relative bg-white hover:bg-purple-400 hover:text-white rounded-md p-5 shadow-lg">
              <div className="flex justify-center items-center absolute -top-8 size-15 bg-purple-300  group-hover:bg-white before:text-white p-3 lg:p-4 border-1 lg:border-2 rounded-full border-purple-500 group-hover:translate-x-3 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Zm320-228Z"/></svg>
              </div>
              <div className="flex flex-col text-start space-y-5 pt-4">
                <h3 className="font-semibold group-hover:text-white">Web Development</h3>
                <p className="text-gray-500 group-hover:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              </div>
            </div>

            <div className="group relative bg-white hover:bg-purple-400 hover:text-white rounded-md p-5 shadow-lg">
              <div className="flex justify-center items-center absolute -top-8 size-15 bg-purple-300  group-hover:bg-white before:text-white p-3 lg:p-4 border-1 lg:border-2 rounded-full border-purple-500 group-hover:translate-x-3 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Zm320-228Z"/></svg>
              </div>
              <div className="flex flex-col text-start space-y-5 pt-4">
                <h3 className="font-semibold group-hover:text-white">Web Development</h3>
                <p className="text-gray-500 group-hover:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              </div>
            </div>

            <div className="group relative bg-white hover:bg-purple-400 hover:text-white rounded-md p-5 shadow-lg">
              <div className="flex justify-center items-center absolute -top-8 size-15 bg-purple-300  group-hover:bg-white before:text-white p-3 lg:p-4 border-1 lg:border-2 rounded-full border-purple-500 group-hover:translate-x-3 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Zm320-228Z"/></svg>
              </div>
              <div className="flex flex-col text-start space-y-5 pt-4">
                <h3 className="font-semibold group-hover:text-white">Web Development</h3>
                <p className="text-gray-500 group-hover:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              </div>
            </div>

            <div className="group relative bg-white hover:bg-purple-400 hover:text-white rounded-md p-5 shadow-lg">
              <div className="flex justify-center items-center absolute -top-8 size-15 bg-purple-300  group-hover:bg-white before:text-white p-3 lg:p-4 border-1 lg:border-2 rounded-full border-purple-500 group-hover:translate-x-3 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Zm320-228Z"/></svg>
              </div>
              <div className="flex flex-col text-start space-y-5 pt-4">
                <h3 className="font-semibold group-hover:text-white">Web Development</h3>
                <p className="text-gray-500 group-hover:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-screen-md px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
          <figure className="">
            <svg className="h-12 mx-auto mb-3 fill-gray-600 rotate-180 " xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.62 18h-5.24l2-4H13V6h8v7.24L18.62 18zm-2-2h.76L19 12.76V8h-4v4h3.62l-2 4zm-8 2H3.38l2-4H3V6h8v7.24L8.62 18zm-2-2h.76L9 12.76V8H5v4h3.62l-2 4z"/></svg>
            <blockquote>
              <p className="text-xl font-medium text-gray-900 md:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolore commodi soluta perferendis in, quaerat praesentium esse inventore sapiente. Quam autem nulla modi excepturi, dolorem tempore mollitia corrupti vitae sequi!</p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <Image src={user} alt="portrait" className="size-6 rounded-full"/>
              <div className="flex items-center divide-x-2 divide-gray-500">
                <div className="pr-3 font-medium text-gray-900">Micheal Gough</div>
                <div className="pl-3 text-sm font-light text-gray-500">CEO at Google</div>

              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-screen-lg mx-auto px-7 py-15 text-center">
          <h1 className="mb-4 text-xl font-bold tracking-tight md:text-2xl xl:text-3xl">Projects</h1>
          <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="relative group">
              <Image src={p1} alt="user" className="h-auto max-w-full rounded-lg group-hover:brightness-50 duration-500"/>
              <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 duration-500">
                <span className="text-xl lg:text-2xl xl:text-3xl font-bold text-white">Project 1</span>
              </div>
              
            </div>
            <div className="relative group">
              <Image src={p2} alt="user" className="h-auto max-w-full rounded-lg group-hover:brightness-50 duration-500"/>
              <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 duration-500">
                <span className="text-xl lg:text-2xl xl:text-3xl font-bold text-white">Project 2</span>
              </div>
              
            </div>
            <div className="relative group">
              <Image src={p3} alt="user" className="h-auto max-w-full rounded-lg group-hover:brightness-50 duration-500"/>
              <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 duration-500">
                <span className="text-xl lg:text-2xl xl:text-3xl font-bold text-white">Project 3</span>
              </div>
              
            </div>
            <div className="relative group">
              <Image src={p4} alt="user" className="h-auto max-w-full rounded-lg group-hover:brightness-50 duration-500"/>
              <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 duration-500">
                <span className="text-xl lg:text-2xl xl:text-3xl font-bold text-white">Project 4</span>
              </div>
              
            </div>
            <div className="relative group">
              <Image src={p5} alt="user" className="h-auto max-w-full rounded-lg group-hover:brightness-50 duration-500"/>
              <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 duration-500">
                <span className="text-xl lg:text-2xl xl:text-3xl font-bold text-white">Project 5</span>
              </div>
              
            </div>
            <div className="relative group">
              <Image src={p6} alt="user" className="h-auto max-w-full rounded-lg group-hover:brightness-50 duration-500"/>
              <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 duration-500">
                <span className="text-xl lg:text-2xl xl:text-3xl font-bold text-white">Project 6</span>
              </div>
              
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}