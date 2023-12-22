import { useEffect } from "react";
import { useRef, useState } from "react";

const AssignmentCleanupFunctionSpeed = () => {
  const [searchValue, setSearchValue] = useState("");
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const prevInterval = useRef(null);

  const onSearchValueChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const onStartClick = () => {
    // if interval is already running, clear it
    if (prevInterval.current) {
      clearInterval(prevInterval.current);
    }

    if (currentSeconds === 0) {
      setCurrentSeconds(searchValue);
    }

    const interval = setInterval(() => {
      setCurrentSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    prevInterval.current = interval;
  };

  useEffect(() => {
    if (prevInterval.current) {
      return () => clearInterval(prevInterval.current);
    }
  }, []);

  const onClear = () => {
    if (prevInterval.current) {
      clearInterval(prevInterval.current);
    }

    setCurrentSeconds(0);
    setSearchValue("");
  };

  return (
    <div className='flex justify-center items-center flex-col m-10 border rounded p-5'>
      <div className='flex gap-2'>
        {/* Input box */}
        <div className='flex-1'>
          <input
            className='border rounded px-3 py-2'
            type='text'
            placeholder='Search'
            value={searchValue}
            onChange={onSearchValueChange}
          />
        </div>

        {/* Create an input for seconds */}
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-1'
          onClick={onStartClick}
        >
          Start Countdown
        </button>
      </div>

      <div className='m-4 mt-10'>{currentSeconds}</div>

      <div className='flex gap-4'>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-1'
          onClick={onClear}
        >
          Clear
        </button>

        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-1'
          onClick={() => {}}
        >
          1x
        </button>

        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-1'
          onClick={() => {}}
        >
          1.5x
        </button>

        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-1'
          onClick={() => {}}
        >
          2x
        </button>
      </div>
    </div>
  );
};

export default AssignmentCleanupFunctionSpeed;
