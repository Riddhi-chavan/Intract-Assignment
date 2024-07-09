import React from "react";

const Info = () => {
  return (
    <div className="bg-[#080808] h-auto text-white pt-20 px-10 max-w-auto overflow-x-hidden border-t-[0.1px] border-[#504f4f]">
      <div className="flex justify-between mx-10">
        <div>
          <p className="text-3xl">intract.</p>
          <p className="mt-6 text-[#6e6e6e]">
            We are your personal guide for exploring <br /> web3 projects &
            earning 100x rewards
          </p>
        </div>
        <div className="flex space-x-[6rem]">
          <div>
            <p className="text-lg">INTRACT</p>
            <div className="mt-6 text-[#6e6e6e]">
              <p className="py-1 hover:text-gray-300">Explore Quests</p>
              <p className="py-1 hover:text-gray-300">Comunities</p>
              <p className="py-1 hover:text-gray-300">Alpha Hub</p>
            </div>
          </div>
          <div>
            <p className="text-lg">EARN</p>
            <div className="mt-6 text-[#6e6e6e]">
              <p className="py-1 hover:text-gray-300">Refer & Earn</p>
              <p className="py-1 hover:text-gray-300">Leaderboard</p>
              <p className="py-1 hover:text-gray-300">Achievements</p>
            </div>
          </div>
          <div>
            <p className="text-lg">ABOUT</p>
            <div className="mt-6 text-[#6e6e6e]">
              <p className="py-1 hover:text-gray-300">Product Roadmap</p>
              <p className="py-1 hover:text-gray-300">Affiliate Program</p>
              <p className="py-1 hover:text-gray-300">Sign up Program</p>
              <p className="py-1 hover:text-gray-300">Growth Community</p>
              <p className="py-1 hover:text-gray-300">Blogs</p>
            </div>
          </div>
          <div>
            <p className="text-lg">SUPPORT</p>
            <div className="mt-6 text-[#6e6e6e]">
              <p className="py-1 hover:text-gray-300">Help Center</p>
              <p className="py-1 hover:text-gray-300">Create your quest</p>
              <p className="py-1 hover:text-gray-300">Terms of Service</p>
              <p className="py-1 hover:text-gray-300">Privacy Policy</p>
              <p className="py-1 hover:text-gray-300">Community Guidelines</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-y-[0.1px] border-[#504f4f] py-10 mt-10">
        Disclaimer:{" "}
        <span className="text-[#504f4f] text-sm font-bold">
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
      <div className="flex justify-between">
        <div className="mt-16 mb-8">
          <p>
            CREATED BY <u>INTRACT</u>
          </p>
        </div>
        <div className="flex space-x-5">
          <div className="bg-[#464545] mt-16 h-10 rounded-lg">
            <button>
              <img src="/twitter.png" className="w-10 h-10" />
            </button>
          </div>
          <div className="bg-[#464545] mt-16 p-2 h-10 rounded-lg">
            <button>
              <img src="/discord.png" className="w-6 h-6" />
            </button>
          </div>
          <div className="bg-[#464545] mt-16 p-1 h-10 rounded-lg">
            <button>
              <img src="/telegram.png" className="w-8 h-8" />
            </button>
          </div>
          <div className="bg-[#464545] mt-16 py-1 h-10 rounded-lg">
            <button>
              <img src="/spotify.png" className="w-10 h-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
