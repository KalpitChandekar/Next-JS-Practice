"use client";
import React, { useState } from "react";

function ColorSwitcher() {
  const [bgColor, setBgColor] = useState("");

  function handleColorChange(event: any) {
    setBgColor(event.target.value);
  }
  return (
    <div className="ml-4  w-full h-screen  flex items-center justify-center">
      <select
        className=" px-4 py-2 rounded-md font-semibold ml-2 "
        onChange={handleColorChange}
      >
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
      <div
        style={{
          backgroundColor: bgColor,
          margin: "4px",
          width: "100px",
          height: "100px",
        }}
      ></div>
    </div>
  );
}

export default ColorSwitcher;
