import React from 'react'
import foto1 from "../Assets/Image/Foto 1.png";
import foto2 from "../Assets/Image/Foto 2.png";
import foto3 from "../Assets/Image/Foto 3.png";
import foto4 from "../Assets/Image/Foto 4.png";
import foto5 from "../Assets/Image/Foto 5.png";
function Logos() {
    
const data = [
    {
      id: 1,
      img: foto1,
    },
    {
        id: 1,
        img: foto2,
      },
      {
        id: 1,
        img: foto3,
      },
      {
        id: 1,
        img: foto4,
      },
      {
        id: 1,
        img: foto5,
      },
    ]
  return (
    <div>
        <div>
            <div className="max-w-[1280px] mx-auto py-24 px-24">
                <div className="lg:grid lg:grid-cols-5 gap-[181px]">
                    {data.map((item, index) => {
                        return (
                            <div key={index} className="flex justify-center items-center">
                                <img src={item.img} alt="logo" className="w-auto h-auto"/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Logos