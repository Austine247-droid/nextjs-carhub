"use client";

import { images } from "@/constants/images";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car -- quickly and easily
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={() => {
            handleScroll;
          }}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src={images.hero} alt="hero" fill className="object-contain" />
          <div className="hero__image-overlay">
            <Image
              src={images.heroBg}
              alt="hero overlay"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
