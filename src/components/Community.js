import React from "react";

const Community = () => {
  return (
    <div className=" flex justify-center">
      <div className="w-[19.5rem] mt-6 ml-12 bg-gray-800 rounded-md p-2 bg-opacity-10 backdrop-filter backdrop-blur-sm border-[0.1px] border-[#504f4f] ">
        <div>
          <img src="/kol.gif" />
        </div>
        <div className="flex justify-between my-3 text-[#504f4f] font-bold border-b-[0.1px] border-[#504f4f] border-dashed pb-5">
          <p>Exclusive Community</p>
          <div className="flex">
            <div className="mt-1 ">
              <img src="/discord.svg" className="w-4 h-4" />
            </div>
            <div className="ml-3">
              <p>Earndrop</p>
            </div>
          </div>
        </div>
        <div>
          <div className="text-[#504f4f] font-bold text-xs">
            <div className="flex justify-between">
              <p>Complete all Essential quests</p>
              <div className="bg-white w-6 h-6 rounded-full bg-opacity-10 backdrop-filter backdrop-blur-sm px-2 py-2 border-[0.1px] border-[#797878]">
                <img src="/tick.png" className="w-2 h-2" />
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <p>Complete at least 1 Alpha Hub quest today</p>
              <div className="bg-white w-6 h-6 rounded-full bg-opacity-10 backdrop-filter backdrop-blur-sm px-2 py-2 border-[0.1px] border-[#797878]">
                <img src="/tick.png" className="w-2 h-2" />
              </div>
            </div>
          </div>
          <div className="mt-4  flex justify-center">
            <button className="px-6 py-2 w-full text-center  flex items-center justify-center bg-[#131313] bg-opacity-10 backdrop-filter backdrop-blur-sm border-[0.1px] border-[#464545] text-[#868585]">
              <p className="mr-2">Claim Now</p>
              <img src="/gray_arrow.png" className="w-6 h-6 mt-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
