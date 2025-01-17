import React from "react";
import img1 from "../Assets/Image/Image (1).png";
import img2 from "../Assets/Image/Image (2).png";
import img3 from "../Assets/Image/Image (3).png";
import img4 from "../Assets/Image/Image (4).png";
import img5 from "../Assets/Image/Image (5).png";
import img6 from "../Assets/Image/Image (6).png";

const data = [
  {
    id: 1,
    img: img1,
    title: "Design",
    desc: "This is a template Figma",
  },
  {
    id: 2,
    img: img2,
    title: "Design",
    desc: "This is a template Figma",
  },
  {
    id: 3,
    img: img3,
    title: "Design",
    desc: "This is a template Figma",
  },
  {
    id: 4,
    img: img4,
    title: "Design",
    desc: "This is a template Figma",
  },
  {
    id: 5,
    img: img5,
    title: "Design",
    desc: "This is a template Figma",
  },
  {
    id: 6,
    img: img6,
    title: "Design",
    desc: "This is a template Figma",
  },
];

function ShowWorkings() {
  return (
    <div className="w-full mx-auto font-epilogue">
      <div className="max-w-[1280px] mx-auto px-6">
        <p className="text-center font-semibold text-[32px] leading-[42px] mb-[40px]">
          Latest work
        </p>
        <div className="grid px-5 lg:grid-cols-3 md:grid-cols-2">
          {data.map((item, index) => {
            return (
              <div key={index} className="">
                <img src={item.img} alt={item.title} className="" />
                <div className="">
                  <p className="flex-wrap w-[93%] text-[20px] font-semibold leading-[30px] text-[#2D2D2D] mb-[8px] mt-[20px] ">
                    {item.title}
                  </p>
                  <p className="flex-wrap w-[93%] text-[17px] font-normal leading-[27px] text-[#2D2D2D] mb-[20px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ShowWorkings;
