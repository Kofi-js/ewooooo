import React from "react";
import Button from "../Components/ui/Button";
import finegirl from "../Assets/Image/HeaderImage 1.png";

function Hero() {
  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto px-[56px] py-[58px] flex justify-between ">
        <div className="font-epilogue">
          <h1 className="font-semibold text-[20px] leading-[30px] mb-[24px]">
            Branding | Image making
          </h1>
          <h2 className="font-semibold text-[68px] mb-[24px]">
            Visual Designer
          </h2>
          <p className="mb-[48px] font-normal text-[17px] leading-[27px]">
            This is a template Figma file, turned into code using Anima. <br />{" "}
            Learn more at AnimaApp.com
          </p>
          <div className="max-w-[50%]">
            <Button />
          </div>
        </div>
        <div>
          <img src={finegirl} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
