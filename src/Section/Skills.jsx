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
        <div className="lg:grid-cols-3 grid gap-24">
            {data.map((item, index) => {
                return (
                    <div key={index} className=''>
                        <img src={item.img} alt={item.title} className="" />
                        <div className=''>
                            <p className="flex-wrap w-[93%] text-[27] font-semibold leading-[42px] text-[#2D2D2D]">
                                {item.title}
                            </p>
                            <p className="flex-wrap w-[93%] text-[17] font-normal leading-[27px] text-[#2D2D2D]">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
    </div>
  )
}

export default Skills