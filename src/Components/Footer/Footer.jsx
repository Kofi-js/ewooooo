import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto px-5">
        <p className="font-semibold text-[32px] leading-[42px] text-[#2D2D2D] mt-[42px]">Lets work together</p>

        <div className="flex justify-between">
          <div>
            <p className="lg:w-[50%] font-normal text-[17px] leading-[27px] text-[#2D2D2D] mt-[24px] mb-[42px]">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com This is a template Figma file, turned into
              code using Anima. Learn more at AnimaApp.com
            </p>
            <div>icons</div>
          </div>

          <div className="space-y-4">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 bg-gray-100 border border-transparent rounded focus:outline-none focus:border-gray-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 bg-gray-100 border border-transparent rounded focus:outline-none focus:border-gray-300"
              />
              <button
                type="submit"
                className=" px-4 py-2 text-white transition-colors rounded bg-zinc-800 hover:bg-zinc-900 w-[165px] h-[50px]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
