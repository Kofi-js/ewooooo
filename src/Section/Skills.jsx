import React from 'react'
import skills1 from "../Assets/Image/Skills Card Icon 1.png"
import skills2 from "../Assets/Image/Skills Card Icon 2.png"
import skills3 from "../Assets/Image/Skills Card Icon 3.png"

function Skills() {
    const data = [
        {
          id: 1,
          img: skills1,
          title: "Product Design",
          desc: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
        },
        {
          id: 2,
          img: skills2,
          title: "Visual Design",
          desc: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
        },
        {
          id: 3,
          img: skills3,
          title: "Art Direction",
          desc: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
        },
      ];
    
  return (
<div className="w-full mx-auto font-epilogue">
  <div className="max-w-[1280px] mx-auto py-24 px-24">
    <div className="lg:grid lg:grid-cols-3 gap-6 text-center">
      {data.map((item, index) => {
        return (
          <div key={index} className="flex flex-col items-center">
            <img
              src={item.img}
              alt={item.title}
              className="w-[124px] h-[124px]"
            />
            <div className="text-center">
              <p className="text-[27px] font-semibold leading-[42px] text-[#2D2D2D] mb-[12px] mt-[42px]">
                {item.title}
              </p>
              <p className="text-[17px] font-normal leading-[27px] text-[#2D2D2D]">
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</div>

  )
}

export default Skills