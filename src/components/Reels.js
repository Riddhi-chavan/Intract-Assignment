import React, { useState } from "react";

const Reels = () => {
  return (
    <div className="bg-[#080808] h-screen text-white max-w-auto overflow-x-hidden border-t-[0.1px] mt-24 border-[#504f4f]">
      <div className="flex justify-center mt-14">
        <div className="text-2xl">
          <p>Top Crypto Creators and Projects to Follow</p>
          <p className="text-sm font-bold  mt-3 text-center text-[#504f4f]">
            Answers to your crypto doubts, straight from the experts
          </p>
        </div>
      </div>
      <div className="mx-20 mt-10 flex space-x-5">
        <div>
          <div
            className={` relative w-[18rem] rounded-3xl border-[0.1px] h-[25rem] border-[#504f4f] `}
          >
            <img src="/bitcat.png" className="w-full h-full rounded-3xl" />
            <div className="absolute top-0 left-[14.5rem] mt-3 bg-[#131313] rounded-full bg-opacity-70 backdrop-filter backdrop-blur-sm px-2 py-2 border-[0.1px] border-[#797878]">
              <img src="/reelicon.svg" className="w-6 h-6" />
            </div>

            <div className="absolute top-[10.5rem] bg-[#131313] left-[7.5rem] rounded-full bg-opacity-70 backdrop-filter backdrop-blur-sm px-3 py-3 border-[0.1px] border-[#797878] ">
              <img src="/play.png" className="w-6 h-6 pl-1" />
            </div>
          </div>
        </div>
        <div>
          <div
            className={` relative w-[18rem] rounded-3xl border-[0.1px] h-[25rem] border-[#504f4f] `}
          >
            <img src="/turtle.png" className="w-full h-full rounded-3xl" />
            <div className="absolute top-0 left-[14.5rem] mt-3 bg-[#131313] rounded-full bg-opacity-70 backdrop-filter backdrop-blur-sm px-2 py-2 border-[0.1px] border-[#797878]">
              <img src="/reelicon.svg" className="w-6 h-6" />
            </div>

            <div className="absolute top-[10.5rem] bg-[#131313] left-[7.5rem] rounded-full bg-opacity-70 backdrop-filter backdrop-blur-sm px-3 py-3 border-[0.1px] border-[#797878] ">
              <img src="/play.png" className="w-6 h-6 pl-1" />
            </div>
          </div>
        </div>
        <div>
          <div
            className={` relative w-[18rem] rounded-3xl border-[0.1px] h-[25rem] border-[#504f4f] `}
          >
            <img src="/horse.png" className="w-full h-full rounded-3xl" />
            <div className="absolute top-0 left-[14.5rem] mt-3 bg-[#131313] rounded-full bg-opacity-70 backdrop-filter backdrop-blur-sm px-2 py-2 border-[0.1px] border-[#797878]">
              <img src="/reelicon.svg" className="w-6 h-6" />
            </div>

            <div className="absolute top-[10.5rem] bg-[#131313] left-[7.5rem] rounded-full bg-opacity-70 backdrop-filter backdrop-blur-sm px-3 py-3 border-[0.1px] border-[#797878] ">
              <img src="/play.png" className="w-6 h-6 pl-1" />
            </div>
          </div>
        </div>
        <div>
          <div
            className={` relative w-[18rem] rounded-3xl border-[0.1px] h-[25rem] border-[#504f4f] `}
          >
            <img src="/monkey.png" className="w-full h-full rounded-3xl" />
            <div className="absolute top-0 left-[14.5rem] mt-3 bg-[#131313] rounded-full bg-opacity-70 backdrop-filter backdrop-blur-sm px-2 py-2 border-[0.1px] border-[#797878]">
              <img src="/reelicon.svg" className="w-6 h-6" />
            </div>

            <div className="absolute top-[10.5rem] bg-[#131313] left-[7.5rem] rounded-full bg-opacity-70 backdrop-filter backdrop-blur-sm px-3 py-3 border-[0.1px] border-[#797878] ">
              <img src="/play.png" className="w-6 h-6 pl-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reels;
