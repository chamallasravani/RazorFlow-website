import React from "react";
import illustrationLogo from "../images/hero-illustration.jpg";
import heroLogo from "../images/hero-shape.svg";

const HeroSection = () => {
  return (
    <div>
      <section className="relative bg-deepBlue">
        <div className="w-10/12 max-w-[1080px] flex flex-col lg:flex-row justify-between items-center mx-auto ">
          <div className="space-y-8">
            <h1 className="font-mullish font-bold text-[40px] leading-[1.2] text-white">
              Power your finance, grow your business
            </h1>
            <div className="w-6 h-1 bg-greenLight" />
            <p className="font-mullish text-[18px] leading-7 text-white opacity-70">
              Accept payments from customers. Automate payouts to vendors &amp;
              employees. Never run out of working capital.
            </p>
            <button
              className="bg-lightBlue text-white  py-[14px] px-[18px] rounded-md font-mullish font-bold
    hover:bg-lightBlue500 transition-all duration-200"
            >
              Sign Up Now
            </button>
          </div>
          <img src={illustrationLogo} alt="" className="w-full max-w-[680px]" />
        </div>
        <div className="w-[103%] absolute left-0 right-0">
          <img src={heroLogo} alt="" className="w-full object-fill " />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
