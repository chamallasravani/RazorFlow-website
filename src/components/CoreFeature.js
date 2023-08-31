import React from "react";
import activationicon from "../images/instant-activation-icon.svg"

const CoreFeature = () => {
  return (
    <div>
      <section
        className="w-full bg-[url(./images/core-features-sectionBg.svg)] 
  bg-no-repeat bg-cover bg-center mt-14 relative corefeaturesection pt-[12rem] pb-[10rem]"
      >
        <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4">
          <h2 className="font-mullish font-bold text-2xl text-center text-white">
            Features
          </h2>
          <div className="w-6 h-1 bg-greenLight mx-auto mt-4 mb-6" />
          <p className="font-mullish text-center max-w-[450px] text-white mx-auto">
            Empower your business with all the right tools to accept online
            payments and provide the best customer experience
          </p>
          {/*grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem] mt-8">
            {/*card1*/}
            <div>
              <img src={activationicon} alt="" />
              <h3 className="font-mullish text-white text-lg font-bold my-4">
                Instant Activation
              </h3>
              <p className="font-mullish text-white opacity-80">
                Get activated and transact within 2 minutes. Completely online
                onboarding with minimum documentation.
              </p>
            </div>
            {/*card2*/}
            <div>
              <img src={activationicon} alt="" />
              <h3 className="font-mullish text-white text-lg font-bold my-4">
                Instant Activation
              </h3>
              <p className="font-mullish text-white opacity-80">
                Get activated and transact within 2 minutes. Completely online
                onboarding with minimum documentation.
              </p>
            </div>
            {/*card3*/}
            <div>
              <img src={activationicon} alt="" />
              <h3 className="font-mullish text-white text-lg font-bold my-4">
                Instant Activation
              </h3>
              <p className="font-mullish text-white opacity-80">
                Get activated and transact within 2 minutes. Completely online
                onboarding with minimum documentation.
              </p>
            </div>
            {/*card4*/}
            <div>
              <img src={activationicon} alt="" />
              <h3 className="font-mullish text-white text-lg font-bold my-4">
                Instant Activation
              </h3>
              <p className="font-mullish text-white opacity-80">
                Get activated and transact within 2 minutes. Completely online
                onboarding with minimum documentation.
              </p>
            </div>
            {/*card5*/}
            <div>
              <img src={activationicon} alt="" />
              <h3 className="font-mullish text-white text-lg font-bold my-4">
                Instant Activation
              </h3>
              <p className="font-mullish text-white opacity-80">
                Get activated and transact within 2 minutes. Completely online
                onboarding with minimum documentation.
              </p>
            </div>
            {/*card6*/}
            <div>
              <img src={activationicon} alt="" />
              <h3 className="font-mullish text-white text-lg font-bold my-4">
                Instant Activation
              </h3>
              <p className="font-mullish text-white opacity-80">
                Get activated and transact within 2 minutes. Completely online
                onboarding with minimum documentation.
              </p>
            </div>
            {/*card7*/}
            <div>
              <img src={activationicon} alt="" />
              <h3 className="font-mullish text-white text-lg font-bold my-4">
                Instant Activation
              </h3>
              <p className="font-mullish text-white opacity-80">
                Get activated and transact within 2 minutes. Completely online
                onboarding with minimum documentation.
              </p>
            </div>
            {/*card8*/}
            <div>
              <img src={activationicon} alt="" />
              <h3 className="font-mullish text-white text-lg font-bold my-4">
                Instant Activation
              </h3>
              <p className="font-mullish text-white opacity-80">
                Get activated and transact within 2 minutes. Completely online
                onboarding with minimum documentation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoreFeature;
