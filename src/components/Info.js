import React from "react";

const Info = () => {
  return (
    <div className="bg-[#080808] text-white px-2 py-10 max-w-auto overflow-x-hidden border-t-[0.1px] border-[#504f4f]">
      <div className="text-center mb-10 md:flex md:justify-center md:text-left md:space-x-28">
        <div className="md:mt-10">
          <p className="text-3xl">intract.</p>
          <p className="mt-6  text-[#6e6e6e]">
            We are your personal guide for exploring <br /> web3 projects &
            earning 100x rewards
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-10 sm:flex sm:flex-row md:flex-row lg:flex-row justify-between  space-y-10 md:space-y-0  lg:space-y-0 space-x-0 md:space-x-10 lg:space-x-10">
          {/* Column 1 */}
          <div className="flex justify-between space-x-20 ">
            <div className="w-full sm:w-auto md:w-1/2 mb-10 md:mb-0 text-center md:text-start">
              <p className="text-lg">INTRACT</p>
              <div className="mt-4 text-[#6e6e6e]">
                <p className="py-1 hover:text-gray-300">Explore Quests</p>
                <p className="py-1 hover:text-gray-300">Communities</p>
                <p className="py-1 hover:text-gray-300">Alpha Hub</p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="w-full sm:w-auto md:w-1/2  mb-10 md:mb-0 text-center md:text-start">
              <p className="text-lg">EARN</p>
              <div className="mt-4 text-[#6e6e6e]">
                <p className="py-1 hover:text-gray-300">Refer & Earn</p>
                <p className="py-1 hover:text-gray-300">Leaderboard</p>
                <p className="py-1 hover:text-gray-300">Achievements</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between space-x-10 ">
            <div className="w-full sm:w-auto md:w-1/2 mb-10 md:mb-0 text-center md:text-start">
              <p className="text-lg">ABOUT</p>
              <div className="mt-4 text-[#6e6e6e]">
                <p className="py-1 hover:text-gray-300">Product Roadmap</p>
                <p className="py-1 hover:text-gray-300">Affiliate Program</p>
                <p className="py-1 hover:text-gray-300">Sign up Program</p>
                <p className="py-1 hover:text-gray-300">Growth Community</p>
                <p className="py-1 hover:text-gray-300">Blogs</p>
              </div>
            </div>

            {/* Column 4 */}
            <div className="w-full sm:w-auto md:w-1/2 text-center md:text-start">
              <p className="text-lg">SUPPORT</p>
              <div className="mt-4 text-[#6e6e6e]">
                <p className="py-1 hover:text-gray-300">Help Center</p>
                <p className="py-1 hover:text-gray-300">Create your quest</p>
                <p className="py-1 hover:text-gray-300">Terms of Service</p>
                <p className="py-1 hover:text-gray-300">Privacy Policy</p>
                <p className="py-1 hover:text-gray-300">Community Guidelines</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-y-[0.1px] border-[#504f4f] py-10  mt-10 text-[#504f4f] text-sm text-center">
        Disclaimer:{" "}
        <span className="text-[#504f4f] text-sm font-bold block mt-2">
          Crypto Products, Virtual Digital Assets, and NFTs are unregulated and
          can be highly risky. There may be no regulatory recourse for any loss
          from such transactions. We advise the viewer to proceed with caution.
          Nothing in this website or any communication published by us amounts
          to, is intended to be, or should be construed as investment or
          purchase advice of any kind or financial advice or promotion under any
          applicable laws. Any decision made based on the content provided on
          this website or any communication published by us shall not be
          attributable to us.
        </span>
      </div>

      {/* Footer */}
      <div className="md:flex md:justify-between items-center mt-8 mx-6">
        <p>
          CREATED BY <u>INTRACT</u>
        </p>

        {/* Social Icons */}
        <div className="flex space-x-5 mt-4">
          <div className="bg-[#464545] h-8 md:h-10 w-8 md:w-10 rounded-lg">
            <button>
              <img
                src="/twitter.png"
                className="w-8 h-8 md:w-10 md:h-10"
                alt="twitter"
              />
            </button>
          </div>
          <div className="bg-[#464545] p-1  h-8 md:h-10 w-8 md:w-10 rounded-lg">
            <button>
              <img
                src="/discord.png"
                className="w-6 h-6  md:w-10 md:h-8"
                alt="discordicon"
              />
            </button>
          </div>
          <div className="bg-[#464545] h-8 md:h-10 w-8 md:w-10 rounded-lg">
            <button>
              <img
                src="/telegram.png"
                className="w-8 h-8 md:w-10 md:h-10"
                alt="telegram"
              />
            </button>
          </div>
          <div className="bg-[#464545] p-1 h-8 md:h-10 w-8 md:w-10 rounded-lg">
            <button>
              <img
                src="/spotify.png"
                className="w-6 h-6 md:w-10 md:h-8"
                alt="spotify"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
