import React, { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  const updateSeconds = () => {
    console.log("Current Time", new Date());
    setSeconds((prevSeconds) => prevSeconds + 1);
  };

  const startTimer = () => {
    const interval = setInterval(updateSeconds, 1000);

    // This is the cleanup function
    return () => clearInterval(interval);
  };

  useEffect(startTimer, []);

  return <div>{seconds} seconds</div>;
};

const CleanupFunction = () => {
  const [showTimer, setShowTimer] = useState(false);

  const timerButtonClick = () => {
    setShowTimer((prevShowTimer) => !prevShowTimer);
  };

  return (
    <div className='flex justify-center items-center flex-col m-10'>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={timerButtonClick}
      >
        {showTimer ? "Hide Timer" : "Show Timer"}
      </button>
      <div className='p-4 border rounded m-1'>{showTimer && <Timer />}</div>
    </div>
  );
};

export default CleanupFunction;
