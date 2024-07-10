const Dictionary = () => {
  return (
    <div className="bg-[#080808] h-auto my-5 text-white max-w-auto overflow-hidden border-t-[0.1px] border-[#504f4f] ">
      <div className="flex justify-center mt-6 ">
        <div className="text-2xl">
          <p className="text-center">Crypto Dictionary</p>
          <p className="text-sm font-bold mt-3 text-center text-[#504f4f]">
            Your one-stop to catch up on all crypto terms
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div className="relative rounded-3xl mx-4">
          <div className="absolute inset-0 bg-white rounded-3xl bg-opacity-30 backdrop-blur-sm md:hidden"></div>
          <img
            src="/atm.svg"
            className="w-full h-[18rem] md:h-full rounded-3xl object-cover  border-[0.1px] border-[#504f4f]"
            alt="atm"
          />
          <div className="absolute bottom-5 left-5 w-36 md:w-1/2">
            <p className="text-sm md:text-2xl">Web3 + Degen Glossary</p>
            <p className="text-[#3f3f3f] font-bold">
              Your own crypto dictionary
            </p>
          </div>
          <div className="absolute bg-white rounded-full bg-opacity-10 backdrop-filter backdrop-blur-sm p-2 border-[0.1px] border-[#797878] bottom-5 right-5">
            <img src="/book.png" className="w-8 h-8" alt="book" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dictionary;
