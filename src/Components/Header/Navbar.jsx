import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full text-black">
      <div className="flex justify-between max-w-[1280px] mx-auto px-[42px] py-[24px]">
        <div className="text-[20px] font-epilogue font-semibold">
          <Link to="/">Lagboo</Link>
        </div>
        <nav className="space-x-[24px] text-[17px] font-epilogue font-normal">
          <Link to="/about">About</Link>
          <Link to="/work">Work</Link>
          <Link>Contact</Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
