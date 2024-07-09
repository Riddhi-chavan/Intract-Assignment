import React, { useState } from "react";

const Button = () => {
  const [activeTab, setActiveTab] = useState("Essentials");
  return (
    <div className="flex justify-center fixed z-10 top-[36rem] left-[30rem]">
      <div className="bg-[#131313] w-[20rem] h-10 rounded-full bg-opacity-10 backdrop-filter backdrop-blur-sm border-[0.1px] border-[#464545] text-gray-200 flex justify-between">
        <div
          className={`${
            activeTab === "Essentials"
              ? "bg-[#464545] h-full rounded-full drop-shadow-lg "
              : ""
          } px-10 pt-2`}
        >
          <button onClick={() => setActiveTab("Essentials")}>Essentials</button>
        </div>
        <div
          className={`${
            activeTab === "Alpha Hub"
              ? "bg-[#464545] h-full rounded-full drop-shadow-lg "
              : ""
          } px-10 pt-2`}
        >
          <button onClick={() => setActiveTab("Alpha Hub")}>Alpha Hub</button>
        </div>
      </div>
    </div>
  );
};

export default Button;
