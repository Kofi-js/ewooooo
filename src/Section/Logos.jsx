import React from "react";
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
      id: 2,
      img: foto2,
    },
    {
      id: 3,
      img: foto3,
    },
    {
      id: 4,
      img: foto4,
    },
    {
      id: 5,
      img: foto5,
    },
  ];

  return (
    <div className="w-full py-12">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={item.img}
                alt={`Logo ${index + 1}`}
                className="w-full h-auto max-w-[60px] sm:max-w-[60px] md:max-w-[70px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Logos;
