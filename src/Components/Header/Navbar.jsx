import React, {useState} from "react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    }

  return (
    <div className="w-full text-black">
      <div className="flex justify-between max-w-[1280px] mx-auto px-[42px] py-[24px]">
        <div className="text-[20px] font-epilogue font-semibold">
          <Link to="/">Lagboo</Link>
        </div>
        <button className= "lg:hidden md:hidden"
        onClick={toggleMenu}>
        <TiThMenu className= {`${isOpen ? "hidden" : ""} text-[19px] font-semibold`} />
        <IoCloseSharp className= {`${isOpen ? "block" : "hidden" } text-[24px] font-semibold`} />
        </button>
        <nav className= {`space-x-[24px] text-[17px] font-epilogue font-normal lg:flex md:flex ${isOpen ? "block" : "hidden"} lg:block `}>
          <Link className="hover:underline" to="/about">About</Link>
          <Link className="hover:underline" to="/work">Work</Link>
          <Link className="hover:underline">Contact</Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
