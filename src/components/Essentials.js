import React from "react";
import Roadmap from "./Roadmap";
import Cards from "./Cards";

const Essentials = () => {
  return (
    <div className="relative bg-[#080808] h-screen text-white">
      <div className="h-16"></div>
      <div
        style={{
          backgroundImage: `url(/intract-bg.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-full flex pt-[9rem]  justify-center"
      >
        <div className="text-center">
          <div className="flex justify-center">
            <img src="/academy.gif" className="w-42 h-24" />
          </div>
          <p className="text-xl mt-6">
            <span>
              Intract users{" "}
              <span className="text-[#807e81]">
                have together made more than
              </span>{" "}
              $100 million <span className="text-[#807e81]">in web3.</span>
            </span>
            <br />
            <span>
              {" "}
              <span className="text-[#807e81]">Join them and</span> learn how to
              earn crypto!
            </span>
          </p>
          <div className="mt-12 flex justify-center">
            <button className="px-6 py-2 min-w-[200px] text-center text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 flex items-center justify-center">
              <p className="mr-2">Get Started</p>
              <img src="arrow.png" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative bg-[#080808] min-h-screen text-white">
        <div className="absolute top-0 left-0 w-full mt-[-9rem] flex ">
          <Roadmap />
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Essentials;
