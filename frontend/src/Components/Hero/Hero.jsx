import React from "react";
import "./Hero.css";
import cloud from "../Assets/clouds.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="flex h-[100vh] bg-gradient-to-b from-cyan-50 to-white-500">
      <div className="hero-left flex-1 flex flex-col items-center justify-center gap-5 leading-[1.1]">
        
        <div>
        <h2 className="color-[#090909] font-semibold text-[28px]">DISCOVER THE LATEST LOOKS</h2>
          <div className="flex items-center gap-3">
            <p className="color-[#171717] text-[100px] font-bold" >Elevate</p>
            <img className="hero-hand-icon w-[105px]" src={cloud} alt="" />
          </div>
          <p className="color-[#171717] text-[100px] font-bold">Your Style Game</p>
          <p className="color-[#171717] text-[100px] font-bold">With Our Lattest Drop</p>
        </div>
        <div className="hero-latest-btn flex justify-center items-center gap-4 w-[310px] h-[70px] round-[75px] mt-8 bg-cyan-300 text-cyan-600 text-xl font-medium border-[3px] border-cyan-400 rounded-full cursor-pointer hover:bg-cyan-200 transition-colors">
            <div>Lattest Collection</div>
            <img src={arrow_icon} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
