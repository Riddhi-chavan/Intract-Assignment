import React, { useState } from "react";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [inputFocused, setInputFocused] = useState(false);

  const handleClick = (index) => {
    if (activeButton === index) {
      setActiveButton(null);
    } else {
      setActiveButton(index);
    }
  };

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  return (
    <nav className="fixed top-0 w-full z-10 border-y-[0.1px] border-[#393939] h-16 bg-opacity-10 backdrop-filter backdrop-blur-sm">
      <div className=" mx-12 flex space-x-10">
        <div className="my-5">
          <img src="intract_text.svg" alt="Intract Text" />
        </div>
        {inputFocused === false ? (
          <div className="my-5 flex space-x-2 text-[#acacac] font-bold">
            <button
              onClick={() => handleClick(1)}
              className={`transition duration-300 ease-in-out border-b-4 ${
                activeButton === 1
                  ? "border-white border-b-4 text-white"
                  : "border-transparent"
              } focus:outline-none pb-4 w-20 `}
            >
              Compass
            </button>
            <button
              onClick={() => handleClick(2)}
              className={`transition duration-300 ease-in-out border-b-4 ${
                activeButton === 2
                  ? "border-white border-b-4 text-white"
                  : "border-transparent"
              } focus:outline-none pb-4  w-20`}
            >
              Explore
            </button>
            <button
              onClick={() => handleClick(3)}
              className={`transition duration-300 ease-in-out border-b-4 ${
                activeButton === 3
                  ? "border-white border-b-4 text-white"
                  : "border-transparent"
              } focus:outline-none pb-4  w-32`}
            >
              <div className="flex">
                <div className="mx-2">Academy</div>
                <div
                  className="text-white bg-[#6833e7]  font-bold
               text-[12px] pt-[3px] px-2 rounded-lg"
                >
                  New
                </div>
              </div>
            </button>
            <button
              onClick={() => handleClick(4)}
              className={`transition duration-300 ease-in-out border-b-4 ${
                activeButton === 4
                  ? "border-white border-b-4 text-white"
                  : "border-transparent"
              } focus:outline-none pb-4  w-20`}
            >
              NFTs
            </button>
            <button
              onClick={() => handleClick(5)}
              className={`transition duration-300 ease-in-out border-b-4 ${
                activeButton === 5
                  ? "border-white border-b-4 text-white"
                  : "border-transparent"
              } focus:outline-none pb-4  w-24`}
            >
              For Project
            </button>
          </div>
        ) : (
          ""
        )}
        <div
          className={`bg-white rounded-full mt-3  bg-opacity-10 backdrop-filter backdrop-blur-sm   ${
            inputFocused ? "w-full " : "w-1/3 mb-8"
          } `}
        >
          <div className="mt-[10px] ml-4 flex">
            <svg
              class="w-4 h-4 mt-[2px] text-gray-400 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <input
              className="w-full mx-2 bg-transparent text-sm font-bold   border-none focus:outline-none "
              placeholder="Search for ecosystems, trending quests etc."
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>
        </div>

        <div className="bg-[#110a20]  h-10  px-3 border border-[#bd5b03]  mt-3 rounded-full">
          <img src="/broadcast.svg" className="w-4 h-4 mt-3" />
        </div>
        <div className="bg-white text-black h-10 text-sm font-bold flex items-center justify-center text-center w-28 mt-3 rounded-md">
          Sign In
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
