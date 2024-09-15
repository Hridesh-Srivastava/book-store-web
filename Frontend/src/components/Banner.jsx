import React from "react";
import banner from "../../public/Banner.png";
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcome to Web Library Guys{" "}
              <span className="text-purple-500">Learn everyday!!!</span>
            </h1>
            <p className="text-sm md:text-xl">
              We believe that every book holds the power to transform minds,
              transport imaginations, and inspire change. Whether you're a
              devoted reader, a casual browser, or searching for the perfect
              gift, our virtual shelves are stocked with a diverse range of
              titles to suit every taste.
            </p>
          </div>
          <button className="btn mt-10 hover:bg-purple-700 text-white bg-purple-600">
            Start your Learning
          </button>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[490px] md:h-[460px] md:ml-12"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
