import { useState, useEffect } from "react";

const HomeWork = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const myCb1 = () => {
    console.log("callback 1");
  };

  const myCb2 = () => {
    console.log("callback 2");
  };

  const myCb3 = () => {
    console.log("callback 3");
  };

  const myCb4 = () => {
    console.log("callback 4");
  };

  const myCb5 = () => {
    console.log("callback 5");
  };

  const myCb6 = () => {
    console.log("callback 6");
  };

  const myCb7 = () => {
    console.log("callback 7");
  };

  useEffect(myCb1);

  useEffect(myCb2, []);

  useEffect(myCb3, [count1]);

  useEffect(myCb4, [count1, count2]);

  useEffect(myCb5, [count1, count2, count3]);

  useEffect(myCb6, [count1, count3]);

  useEffect(myCb7, [count2, count3]);

  // 1 3 5 7
  // 2 4 6
  // 1 2 3 5 6 7
  // 1 2 3 4 5 6 7
  // 3 5 7
  // 4 5 6 7
  // 2 3 5 6

  return (
    <div className="flex gap-2 p-16 m-10 border rounded">
      <button
        className="flex-1 py-4 px-6 border rounded"
        onClick={() => setCount1(count1 + 1)}
      >
        Count 1 ({count1})
      </button>
      <button
        className="flex-1 py-4 px-6 border rounded"
        onClick={() => setCount2(count2 + 1)}
      >
        Count 2 ({count2})
      </button>
      <button
        className="flex-1 py-4 px-6 border rounded"
        onClick={() => setCount3(count3 + 1)}
      >
        Count 3 ({count3})
      </button>
    </div>
  );
};

export default HomeWork;
