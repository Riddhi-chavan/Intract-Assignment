const Dictionary = () => {
  return (
    <div className="bg-[#080808] h-screen text-white max-w-auto overflow-x-hidden border-t-[0.1px] border-[#504f4f] mb-10">
      <div className="flex justify-center mt-14">
        <div className="text-2xl">
          <p className="text-center">Crypto Dictionary</p>
          <p className="text-sm font-bold mt-3 text-center text-[#504f4f]">
            Your one-stop to catch up on all crypto terms
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-10 ">
        <div className="relative rounded-3xl border-[0.1px] h-[25rem] border-[#504f4f]">
          <img src="/atm.svg" className="w-full h-full rounded-3xl" />
          <div className="absolute top-[20rem] left-5">
            <p className="text-2xl">Web3 + Degen Glossary</p>
            <p className="text-[#3f3f3f] font-bold">
              Your own crypto dictionary
            </p>
          </div>
          <div className="absolute bg-white rounded-full bg-opacity-10 backdrop-filter backdrop-blur-sm p-2 border-[0.1px] border-[#797878] top-[21rem] flex left-[59rem]">
            <img src="/book.png" className="w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dictionary;
