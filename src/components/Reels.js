import React from "react";

const cardsData = [
  {
    src: "/bitcat.png",
    alt: "Bitcat",
    text: "How to plan your retirement with crypto?",
  },
  {
    src: "/turtle.png",
    alt: "Turtle",
    text: "How to plan your retirement with crypto?",
  },
  {
    src: "/horse.png",
    alt: "Horse",
    text: "How to plan your retirement with crypto?",
  },
  {
    src: "/monkey.png",
    alt: "Monkey",
    text: "How to plan your retirement with crypto?",
  },
];

const Card = ({ src, alt, text }) => (
  <div className="flex justify-center relative">
    <div className="relative w-[18rem]  my-2 rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-t from-[#6d4c36] to-transparent   rounded-3xl"></div>
      <img
        src={src}
        alt={alt}
        className="w-full h-full rounded-3xl border-[0.1px] border-[#504f4f]"
      />
      <div className="absolute bottom-5 left-5 text-white text-opacity-60 backdrop-blur-sm text-xl font-bold">
        {text}
      </div>
      <div className="absolute top-0 left-[14.5rem] mt-3 bg-[#131313] rounded-full bg-opacity-70 backdrop-filter backdrop-blur-sm px-2 py-2 border-[0.1px] border-[#797878]">
        <img src="/reelicon.svg" alt="Reel icon" className="w-6 h-6" />
      </div>
      <div className="absolute top-[10.5rem] bg-[#131313] left-[7.5rem] rounded-full bg-opacity-70 backdrop-filter backdrop-blur-sm px-3 py-3 border-[0.1px] border-[#797878]">
        <img src="/play.png" alt="Play icon" className="w-6 h-6 pl-1" />
      </div>
    </div>
  </div>
);

const Reels = () => {
  return (
    <div className="bg-[#080808] h-screen lg:h-auto md:h-54  text-white max-w-auto overflow-x-hidden lg:overflow-hidden border-t-[0.1px] mt-24 border-[#504f4f] mb-3">
      <div className="flex justify-center mt-14 lg:mt-5 ">
        <div className="text-2xl">
          <p className="text-center">
            Top Crypto Creators and Projects to Follow
          </p>
          <p className="text-sm font-bold mt-3 text-center text-[#504f4f]">
            Answers to your crypto doubts, straight from the experts
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="mt-2 lg:flex lg:space-x-5 space-y-5 lg:space-y-0 flex-wrap justify-center">
          {cardsData.map((card, index) => (
            <Card key={index} src={card.src} alt={card.alt} text={card.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reels;
