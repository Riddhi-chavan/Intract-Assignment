import React from "react";

const Profile = () => {
  return (
    <div className="text-white">
      <div className="flex justify-center mb-5 mr-24">
        <div className="bg-white rounded-full bg-opacity-10 backdrop-filter backdrop-blur-sm px-3 py-3 border-[0.1px] border-[#797878]">
          <img src="/tick.png" className="w-6 h-6" />
        </div>
      </div>
      <div className="relative inline-block bg-gray-500 rounded-3xl p-2 bg-opacity-15 backdrop-filter backdrop-blur-sm border-[0.1px] border-[#797878]">
        <img src="/cat.png" className="w-36 h-40 rounded-3xl" />
        <div className="absolute top-[8rem] left-28 transform translate-x-2 translate-y-2 bg-black rounded-full bg-opacity-90 backdrop-filter backdrop-blur-sm px-3 py-3 border-[0.1px] border-[#797878]">
          <img src="/lock.png" className="w-6 h-6" />
        </div>
      </div>
      <div className="mt-1">
        <p className="text-xl text-[#a1a1a1]">Intract Certified: Learner NFT</p>
        <p className="text-[#616161]">
          Your crypto black-belt <br /> certificate
        </p>
        <button className="bg-gray-800 w-[10rem] mt-4 rounded-xl bg-opacity-10 backdrop-filter backdrop-blur-sm px-3 py-2 border-[0.1px] border-[#464545] text-[#616161]">
          Claim
        </button>
      </div>
    </div>
  );
};

export default Profile;
