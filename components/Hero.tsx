"use client";

import React from "react";
import { CustomButton } from "./index";
import Image from "next/image";


const Hero = () => {

  const handleScroll = () => {
   
  } 


  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, Book or Rent a car - Hustle Free
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our efficient and effortless booking process
        </p>

        <CustomButton 
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10 "
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="" fill className="object-contain" />

          <div className="hero__image-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
