import React from "react";
import dottedRows from "../images/feature-section1-dottedrows.png"
import razorpayx from "../images/razorpayXicon.svg"

const NewFeature = () => {
  return (
    <div>
      <section className="bg-white relative">
        <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4">
          <img
            src={dottedRows=""}
            alt=""
            className="absolute w-[233px] left-[300px] -top-[6rem] z-10"
          />
          <img
            src={dottedRows}
            alt=""
            className="absolute w-[233px] -right-[3.5rem] -top-[6rem] z-10"
          />
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 relative z-[100]">
            {/*item 1*/}
            <div className="relative flex items-center z-0">
              <h2 className="text-deepBlueHead font-mullish font-extrabold text-4xl leading-[3.375rem]">
                New in the
                <span className="text-lightBlue500">Razorpay</span> <br />
                Product Suite
              </h2>
            </div>
            {/*card 1*/}
            <div
              className="p-10 bg-[url(./images/instant-settlement-bg.svg)] w-full max-h-[300px] cursor-pointer
        bg-no-repeat hover:scale-105 transition-all duration-200
        hover:bg-[url(./images/instant-settlement-bghover.svg)]
        bg-white"
            >
              <img
                src={razorpayx}
                alt=""
                className="w-10 h-10"
              />
              <h3 className="font-mullish text-lg font-bold pt-4">
                Corporate Cards
              </h3>
              <p className="font-mullish py-3 text-grayText leading-normal">
                Simplify your recurring, international and team expenses with
                savings on every spend. Save upto 10 lacs every month.
              </p>
              <div className="flex flex-row items-center cursor-pointer group">
                <a
                  href=""
                  className="font-mullish font-bold text-lightBlue500 group-hover:text-lightBlue
                transition-all duration-200"
                >
                  Know More
                </a>
                <i
                  data-feather="chevron-right"
                  className="w-5 h-5 text-lightBlue500 
                    group-hover:text-grayBlue transition-all duration-200"
                />
              </div>
            </div>
            {/*card 2*/}
            <div
              className="p-10 bg-[url(./images/instant-settlement-bg.svg)] w-full max-h-[300px] cursor-pointer
        bg-no-repeat hover:scale-105 transition-all duration-200
        hover:bg-[url(./images/instant-settlement-bghover.svg)] bg-white"
            >
              <img
                src={razorpayx}
                alt=""
                className="w-10 h-10"
              />
              <h3 className="font-mullish text-lg font-bold pt-4">
                Corporate Cards
              </h3>
              <p className="font-mullish py-3 text-grayText leading-normal">
                Simplify your recurring, international and team expenses with
                savings on every spend. Save upto 10 lacs every month.
              </p>
              <div className="flex flex-row items-center cursor-pointer group">
                <a
                  href=""
                  className="font-mullish font-bold text-lightBlue500 group-hover:text-lightBlue
                transition-all duration-200"
                >
                  Know More
                </a>
                <i
                  data-feather="chevron-right"
                  className="w-5 h-5 text-lightBlue500 
                    group-hover:text-grayBlue transition-all duration-200"
                />
              </div>
            </div>
            {/*card 3*/}
            <div
              className="p-10 bg-[url(./images/instant-settlement-bg.svg)] w-full max-h-[300px] cursor-pointer
        bg-no-repeat hover:scale-105 transition-all duration-200
        hover:bg-[url(./images/instant-settlement-bghover.svg)] bg-white"
            >
              <img
                src={razorpayx}
                alt=""
                className="w-10 h-10"
              />
              <h3 className="font-mullish text-lg font-bold pt-4">
                Corporate Cards
              </h3>
              <p className="font-mullish py-3 text-grayText leading-normal">
                Simplify your recurring, international and team expenses with
                savings on every spend. Save upto 10 lacs every month.
              </p>
              <div className="flex flex-row items-center cursor-pointer group">
                <a
                  href=""
                  className="font-mullish font-bold text-lightBlue500 group-hover:text-lightBlue
                transition-all duration-200"
                >
                  Know More
                </a>
                <i
                  data-feather="chevron-right"
                  className="w-5 h-5 text-lightBlue500 
                    group-hover:text-grayBlue transition-all duration-200"
                />
              </div>
            </div>
            {/*card 4*/}
            <div
              className="p-10 bg-[url(./images/instant-settlement-bg.svg)] w-full max-h-[300px] cursor-pointer
        bg-no-repeat hover:scale-105 transition-all duration-200
        hover:bg-[url(./images/instant-settlement-bghover.svg)] bg-white"
            >
              <img
                src={razorpayx}
                alt=""
                className="w-10 h-10"
              />
              <h3 className="font-mullish text-lg font-bold pt-4">
                Corporate Cards
              </h3>
              <p className="font-mullish py-3 text-grayText leading-normal">
                Simplify your recurring, international and team expenses with
                savings on every spend. Save upto 10 lacs every month.
              </p>
              <div className="flex flex-row items-center cursor-pointer group">
                <a
                  href=""
                  className="font-mullish font-bold text-lightBlue500 group-hover:text-lightBlue
                transition-all duration-200"
                >
                  Know More
                </a>
                <i
                  data-feather="chevron-right"
                  className="w-5 h-5 text-lightBlue500 
                    group-hover:text-grayBlue transition-all duration-200"
                />
              </div>
            </div>
            {/*card 5*/}
            <div
              className="p-10 bg-[url(./images/instant-settlement-bg.svg)] w-full max-h-[300px] cursor-pointer
        bg-no-repeat hover:scale-105 transition-all duration-200
        hover:bg-[url(./images/instant-settlement-bghover.svg)] bg-white"
            >
              <img
                src={razorpayx}
                alt=""
                className="w-10 h-10"
              />
              <h3 className="font-mullish text-lg font-bold pt-4">
                Corporate Cards
              </h3>
              <p className="font-mullish py-3 text-grayText leading-normal">
                Simplify your recurring, international and team expenses with
                savings on every spend. Save upto 10 lacs every month.
              </p>
              <div className="flex flex-row items-center cursor-pointer group">
                <a
                  href=""
                  className="font-mullish font-bold text-lightBlue500 group-hover:text-lightBlue
                transition-all duration-200"
                >
                  Know More
                </a>
                <i
                  data-feather="chevron-right"
                  className="w-5 h-5 text-lightBlue500 
                    group-hover:text-grayBlue transition-all duration-200"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewFeature;
