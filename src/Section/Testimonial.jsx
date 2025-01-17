import React from "react";
import clientImg from "../Assets/Image/Client Image.png"; // Ensure this path is correct
import { FaStar } from "react-icons/fa6"; // Ensure you have installed `react-icons`

function Testimonial() {
  const data = [
    {
      id: 1,
      mot: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      img: clientImg,
      name: "Gemma Nolen",
      stars: 5,
      company: "Google",
    },
    {
      id: 2,
      mot: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      img: clientImg,
      name: "John Doe",
      stars: 3,
      company: "Microsoft",
    },
  ];

  return (
    <div className="w-full font-epilogue">
      <div className="max-w-[1280px] mx-auto px-5">
        {/* Section Title */}
        <p className="text-center font-semibold text-[32px] leading-[42px] mb-[40px]">
          Testimonial
        </p>
        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-[#F3F3F3] h-auto p-[42px] rounded-lg shadow-md"
            >
              <p className="font-semibold text-[20px] text-[#2d2d2d] leading-[30px] mb-[68px]">
                {item.mot}
              </p>
              <div className="flex space-x-[16px]">
                {/* Client Image */}
                <img
                  src={item.img}
                  alt={`${item.name} Profile`}
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-[#2d2d2d]">
                  {/* Star Ratings */}
                  <div className="mb-[11px] flex gap-1 text-[20px]">
                    {[...Array(item.stars)].map((_, index) => (
                      <FaStar key={index} className="text-[#2d2d2d]" />
                    ))}
                  </div>
                  {/* Client Name */}
                  <p className="font-semibold text-[20px] leading-[30px]">
                    {item.name}
                  </p>
                  {/* Company */}
                  <p className="font-normal text-[17px] leading-[27px]">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
