"use client";
import React, { useState } from "react";

function CharacterCounter() {
  const [count, setCount] = useState("");

  function charCounter(event:any) {
    setCount(event.target.value);
  }
  return (
    <div className="ml-4  w-full h-screen  flex flex-col items-center justify-center">
      <textarea
        className="border-2 border-black mb-6"
        value={count}
        onChange={charCounter}
      />
      <p>Character count: {count.length}</p>
    </div>
  );
}

export default CharacterCounter;
