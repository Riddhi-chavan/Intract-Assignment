import React, { useState } from "react";

const Cards = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const cardDetails = [
    {
      image: "/card0.png",
      title: "#1: But what is crypto and web3?",
      tasks: 11,
    },
    {
      image: "/card1.jpg",
      title: "#2: Setting up your own web3 wallet!",
      tasks: 8,
    },
    {
      image: "/cardI2.jpg",
      title: "#3: What the heck is a blockchain?",
      tasks: 8,
    },
    {
      image: "/cardI3.jpg",
      title: "#4: Swapping and bridging? What’s that?",
      tasks: 10,
    },
    {
      image: "/cardI4.jpg",
      title: "#5: NFTs and why they’re cool ;)",
      tasks: 6,
    },
    {
      image: "/cardI5.jpg",
      title: "#6: Doing quests and winning rewards!",
      tasks: 8,
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`max-w-xl w-full text-left p-4 bg-white ${
          isDropdownOpen ? "rounded-t-3xl" : "rounded-3xl"
        }  mt-3 bg-opacity-10 backdrop-filter backdrop-blur-sm hover:bg-opacity-20 focus:outline-none`}
      >
        <div className="flex justify-end">
          <img
            src="/dropdown.png"
            className={`w-4 h-4 cursor-pointer transform transition-transform duration-300 ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
          />
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
        <div className="absolute right-0 w-full max-w-xl bg-black rounded-b-3xl bg-opacity-60 backdrop-filter backdrop-blur-sm overflow-y-auto max-h-80">
          {cardDetails.map((card, index) => (
            <button>
              <div
                key={index}
                className="p-4 mx-5 bg-gray-100 bg-opacity-10 backdrop-filter backdrop-blur-sm m-2 rounded-md hover:bg-opacity-20"
              >
                <div className="flex space-x-4">
                  <img
                    src={card.image}
                    className="w-28 h-20 rounded-md"
                    alt={card.title}
                  />
                  <div>
                    <p className="text-md border-b-[1px] w-[18rem] text-start border-[#585858] border-dashed pb-3">
                      {card.title}
                    </p>
                    <div className="flex mt-4">
                      <p className="text-gray-400 text-sm">
                        {card.tasks} Tasks
                      </p>
                      <div className="relative bg-gray-500 rounded-lg p-2 bg-opacity-10 backdrop-filter backdrop-blur-sm border-[0.1px] border-[#797878] w-[13.2rem] h-3 mt-1 ml-3">
                        <div className="absolute top-0 left-0 h-full w-52 rounded-lg border-2 border-black shadow-md"></div>
                      </div>
                      <div className="ml-3">
                        <div className="bg-gray-800 rounded-full bg-opacity-10 backdrop-filter backdrop-blur-sm px-3 py-2 border-[0.1px] border-[#797878]">
                          <img src="/tick.png" className="w-2 h-3" alt="tick" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cards;
