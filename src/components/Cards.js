import React, { useState } from "react";

const Cards = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="max-w-xl w-full text-left p-4 bg-white rounded-3xl mt-3 bg-opacity-10 backdrop-filter backdrop-blur-sm hover:bg-opacity-20 focus:outline-none"
      >
        <div className="flex justify-end">
          <img src="/dropdown.png" className="w-4 h-4 cursor-pointer" />
        </div>
        <div className="flex">
          <div className="relative inline-block bg-gray-500 rounded-md p-2 bg-opacity-10 backdrop-filter backdrop-blur-sm border-[0.1px] border-[#797878]">
            <img src="/bitcoin.png" className="w-36 h-40 rounded-md" />
            <button
              type="button"
              className="absolute bottom-7 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-gray-800 rounded-3xl bg-opacity-10 backdrop-filter backdrop-blur-sm px-4 py-1 border-[0.1px] border-[#797878]"
            >
              <div className="flex">
                <p className="mr-1">6</p>
                <p>Quests</p>
              </div>
            </button>
          </div>
          <div className="mt-2 px-10">
            <p className="text-2xl">Basics of Crypto</p>
            <p className="mt-3 text-md font-bold text-[#666565] pb-5 border-b border-[#797878] border-dashed">
              The safest and easiest place to start <br /> your crypto journey!
            </p>
            <div className="flex w-36 mt-4 bg-gray-800 rounded-3xl bg-opacity-10 backdrop-filter backdrop-blur-sm px-4 py-1 border-[0.1px] border-[#797878]">
              <div className="mt-1 mr-2">
                <img src="/coin.svg" className="w-4 h-4" />
              </div>
              <div>1490 XPs</div>
            </div>
          </div>
        </div>
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-full max-w-xl bg-white rounded-3xl bg-opacity-10 backdrop-filter backdrop-blur-sm overflow-y-auto max-h-80 border border-[#797878]">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="p-4 bg-gray-100 bg-opacity-10 backdrop-filter backdrop-blur-sm m-2 rounded-md"
            >
              <div className="flex space-x-4">
                <img src="/bitcoin.png" className="w-16 h-16 rounded-md" />
                <div>
                  <p className="text-xl">Card {index}</p>
                  <p className="text-sm text-gray-600">
                    Description of card {index}.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cards;
