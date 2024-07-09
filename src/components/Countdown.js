import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  // Function to set the target time to 12 hours from now
  const getNewTargetTime = () => new Date().getTime() + 12 * 60 * 60 * 1000;

  // State to store the target time
  const [targetTime, setTargetTime] = useState(getNewTargetTime());

  const calculateTimeLeft = () => {
    const currentTime = new Date().getTime();
    const difference = targetTime - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      // If the countdown is finished, reset the target time to 12 hours from now
      setTargetTime(getNewTargetTime());
      timeLeft = {
        days: 0,
        hours: 12,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  return (
    <div className="rounded-md  bg-opacity-10 backdrop-filter backdrop-blur-sm border-[0.1px] border-[#504f4f] mt-6 h-20">
      <div
        style={{
          backgroundImage: `url(/dotBog.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-full"
      >
        <div className="mx-4 py-4 flex space-x-10">
          <div>
            <p className="text-3xl text-[#888787]">
              {String(timeLeft.days).padStart(2, "0")}
            </p>
            <p className="text-sm ml-1 text-[#504f4f]">Day</p>
          </div>
          <div>
            <p className="text-3xl text-[#888787]">
              {String(timeLeft.hours).padStart(2, "0")}
            </p>
            <p className="text-sm ml-1 text-[#504f4f]">Hrs</p>
          </div>
          <div>
            <p className="text-3xl text-[#888787]">
              {String(timeLeft.minutes).padStart(2, "0")}
            </p>
            <p className="text-sm ml-1 text-[#504f4f]">Mins</p>
          </div>
          <div>
            <p className="text-3xl text-[#888787]">
              {String(timeLeft.seconds).padStart(2, "0")}
            </p>
            <p className="text-sm ml-1 text-[#504f4f]">Sec</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
