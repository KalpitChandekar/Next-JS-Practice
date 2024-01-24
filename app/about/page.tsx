"use client";

import { useEffect, useState } from "react";

const About = () => {
  const [count, setCount] = useState(0);

  const IncNum = () => {
    setCount(count + 1);
  };
  
  useEffect(() => {
    console.log("hi");
  }, [count]);

  return (
    <div className="flex w-full h-screen   items-center ml-6">
      <p>{count}</p>
      <button onClick={IncNum} className="border ml-4 mt-2">
        click me
      </button>
    </div>
  );
};
export default About;
