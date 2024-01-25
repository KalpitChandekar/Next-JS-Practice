"use client";
import { useEffect, useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Good Morning");
  }, []);

  return (
    <>
      <div className="flex items-center h-screen w-full gap-4 ml-4">
        <h1>{count}</h1>
        <button
          className="bg-blue-300 px-4 py-2 rounded-md font-semibold ml-2 "
          onClick={() => setCount(count + 1)}
        >
          Click
        </button>
      </div>
    </>
  );
};
export default Button;
