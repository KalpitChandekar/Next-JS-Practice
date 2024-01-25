"use client";
import React, { useState } from "react";

function InputField() {
  const [text, setText] = useState("");

  function handleChangeInput(event: any) {
    setText(event.target.value);
  }

  return (
    <div className="ml-4  w-full h-screen  flex flex-col items-center justify-center">
      <input
        className="border-2 border-black mb-6"
        type="text"
        value={text}
        onChange={handleChangeInput}
      />
      <p>Input text: {text}</p>
    </div>
  );
}

export default InputField;
