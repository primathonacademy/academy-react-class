import { useState, useEffect } from "react";

const ExampleOne = () => {
  const [data, setData] = useState(null);

  const myCb = () => {
    const fetchData = async () => {
      const response = await fetch("https://myapi.com/data");
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  };

  useEffect(myCb, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ExampleOne;
