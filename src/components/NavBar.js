import React from "react";
import logo_1 from '../images/logo.svg'
import indiaflag from '../images/india-flag.svg'

const NavBar = () => {
  return (
    <div>
      <nav className="bg-deepBlue">
        <div className="relative w-[1080px] mx-auto flex items-center justify-between ">
          {/* logo */}
          <a href="/" className="cursor-pointer py-7 pr-7">
            <img src={logo_1} width="125px" height="30px" />
          </a>
          <ul className="flex space-x-6">
            <li
              className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
         transition-all duration-200 relative group hidden lg:block"
            >
              <a href="#">Payments</a>
              <div
                className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
        transition-all duration-200"
              />
            </li>
            <li
              className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
         transition-all duration-200 relative group hidden lg:block"
            >
              <a href="#">Banking</a>
              <div
                className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
        transition-all duration-200"
              />
            </li>
            <li
              className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
         transition-all duration-200 relative group hidden lg:block"
            >
              <a href="#">Corporate Card</a>
            </li>
            <li
              className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
         transition-all duration-200 relative group hidden lg:block"
            >
              <a href="#">Payroll</a>
            </li>
            <li
              className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
         transition-all duration-200 relative group hidden lg:block"
            >
              <a href="#">Resources</a>
              <div
                className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
        transition-all duration-200"
              />
            </li>
            <li
              className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
         transition-all duration-200 relative group hidden lg:block"
            >
              <a href="#">Support</a>
              <div
                className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
        transition-all duration-200"
              />
            </li>
            <li
              className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
         transition-all duration-200 relative group hidden lg:block"
            >
              <a href="#">Pricing</a>
              <div
                className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
        transition-all duration-200"
              />
            </li>
          </ul>
          <div className="flex space-x-6">
            <img
              src={indiaflag}
              width="28px"
              height="20px"
              className="hidden lg:block"
            />
            <button
              className="py-3 px-5 font-mullish text-white border-lightBlue border
        rounded-sm text-sm  font-bold"
            >
              Log in
            </button>
            <button
              className="py-3 px-4 font-mullish rounded-sm text-sm font-bold
        bg-white text-lightBlue300 border transition-all duration-200
        hover:text-lightBlue500 hidden lg:flex"
            >
              Sign Up
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                className="w-[14px] h-[14px] ml-3"
              >
                <path
                  fill="currentColor"
                  d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
