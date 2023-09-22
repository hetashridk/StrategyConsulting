"use client";
import React, { useState } from "react";
// import { useState } from "react";
import Image from "next/image";
import Header from "../public/images/Header.png";
import logo_mv from "../public/images/logo_mv.png";
import logo_wv from "../public/images/logo_wv.png";
import close from "../public/images/close.png";
import Hamburger from "../public/images/Hamburger.png";
function Nav() {
  const [navbar, setNavbar] = useState(false);

  function handleNavbar() {
    setNavbar(!navbar);
  }

  return (
    <>
      <div className="relative inline-block">
        <Image src={Header} />
        {/* <div className="absolute z-10 top-0 ml-28 mt-24 md:ml-[15rem] md:mt-44 lg:ml-[30rem] lg:mt-96">
          <p className="text-white text-center text-2xl md:text-5xl lg:text-7xl">Fintract Global</p>
        </div> */}
        <div className="absolute z-10 top-[0.85rem] left-14 lg:hidden">
          <Image src={logo_mv} />
        </div>
        <div className="absolute z-10 top-4 left-4 hidden lg:block">
          <Image src={logo_wv} />
        </div>
        <div className="absolute z-10 top-1 w-full bg-cover h-full">
          <button
            type="button"
            className="block mx-4 mt-4 lg:hidden"
            onClick={handleNavbar}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {navbar && (
                <>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                        fill="#ffffff"
                      ></path>{" "}
                    </g>
                  </svg>
                </>
              )}
              {!navbar && (
                <>
                  <svg
                    fill="#ffffff"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M2,4A1,1,0,0,1,3,3H21a1,1,0,0,1,0,2H3A1,1,0,0,1,2,4Zm1,9H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Zm0,8H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Z"></path>
                    </g>
                  </svg>
                </>
              )}
            </svg>
          </button>

          <ul
            className={`lg:flex ${
              navbar
                ? "block"
                : "hidden items-center justify-center m-10 space-x-6 "
            } `}
          >
            <div className="flex space-x-96">
              <div className="md:flex md:space-x-8 md:ml-44">
                <div className="">
                  <li className="text-white text-center text-xl">More</li>
                </div>
                <div className="">
                  <li className="text-white text-center text-xl">Products</li>
                </div>
              </div>
              <div className="flex space-x-12">
                <div className="hidden md:block">
                  <input placeholder="Search FG.." className="rounded-lg h-8 w-72"/>
                </div>
                <div className="hidden md:block">
                  <button className="border border-black bg-white p-2 text-black">Log in</button>
                </div>
                <div className="hidden md:block">
                  <button className="border border-black bg-black text-white p-2">Sign up</button>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div> 

      
    </>
  );
}

export default Nav;
