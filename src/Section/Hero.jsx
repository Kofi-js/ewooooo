import React from "react";
import Button from "../Components/ui/Button";
import finegirl from "../Assets/Image/HeaderImage 1.png";

function Hero() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-[56px] py-8 sm:py-12 lg:py-[58px] flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        <div className="text-center font-epilogue lg:text-left">
          <h1 className="font-semibold text-[20px] leading-[30px] mb-[16px] lg:mb-[24px]">
            Branding | Image Making
          </h1>
          <h2 className="font-semibold text-[36px] sm:text-[48px] lg:text-[68px] leading-[1.1] mb-[16px] lg:mb-[24px]">
            Visual Designer
          </h2>
          <p className="mb-[32px] lg:mb-[48px] font-normal text-[15px] sm:text-[17px] leading-[24px] sm:leading-[27px]">
            This is a template Figma file, turned into code using Anima. <br />{" "}
            Learn more at AnimaApp.com
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button />
          </div>
        </div>
        <div className="w-full lg:w-[50%] flex justify-center">
          <img
            src={finegirl}
            alt="Visual Designer"
            className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
