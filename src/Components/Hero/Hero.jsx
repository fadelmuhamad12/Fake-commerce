import React from "react";
import ads from "../../assets/ads.png";
// import Carousel from "./Carousel";

const Hero = () => {
  return (
    <>
      <div className=" flex justify-center mt-16">
        <input
          type="text"
          placeholder="What Are You Looking For ?"
          className="bg-gray-200 p-2 w-full xl:w-1/3 md:w-1/2 rounded-xl placeholder:text-black mx-2"
        />
      </div>
      {/* <Carousel /> */}
      <div className="flex justify-center mt-12 ">
        <img
          src={ads}
          alt="Gambar"
          className="w-full xl:w-1/3 md:w-1/3 sm:w-1/2"
        />
      </div>
    </>
  );
};

export default Hero;
