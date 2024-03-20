import React from "react";
import { hero } from "../assets";
import { InvestMail } from "../components/InvestMail";
export const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen   flex flex-col justify-center items-start lg:flex-row">
      {/* border-solid border-2 border-orange-600 */}
        <div
          className="container h-[80vh] w-[100%]  text-center text-orange-600
         flex  justify-center items-center"
        >
          <section>
            <h1 className="text-[40px] font-bold ">
              Empowering Cameroonian Businesses
            </h1>
            <p className="text-xl  leading-relaxed mb-8">
              Connect with investors and grow your venture.
            </p>
            <a href="#" className="flex  justify-center items-center">
              <div className="px-4 py-2 text-[25px] h-[70px] w-[350px] bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-[20px]">
                Get an opportunity
              </div>
            </a>
          </section>
        </div>
        <div className="hidden lg:block h-[80vh] w-[100%]">
          <img
            src={hero}
            alt="Hero Image"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
  <InvestMail/>
    </div>
  );
};
