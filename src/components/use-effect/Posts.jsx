import { useState, useEffect } from "react";
import { getPosts } from "../../api/api-fetch";

const Posts = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    console.log("Data fetching started");
    const fetchPromise = getPosts();

    fetchPromise
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("Data fetching in progress", fetchPromise);

    console.log("Data fetching completed");
  };

  useEffect(getData, []);

  return (
    <div className='p-16 m-10'>
      {data.map((post) => (
        <div key={post.id} className='border rounded p-2 my-2'>
          <h3 className='text-xl border rounded-full h-12 w-12 flex justify-center items-center'>
            {post.id}
          </h3>
          <p className='text-md my-2 uppercase'>{post.title}</p>
          <p className='text-sm text-gray-500'>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
