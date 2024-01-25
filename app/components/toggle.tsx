"use client";
import React, { useState } from "react";

function ToggleVisibility() {
  const [showHide, setShowHide] = useState(true);

  function showHideText() {
    setShowHide(!showHide);
  }

  return (
    <div className="ml-4  w-full h-screen  flex flex-col items-center justify-center">
      <button
        className="border-2 bg-blue-300 border-black mb-6"
        onClick={showHideText}
      >
        Show/Hide Text
      </button>
      {showHide && <p>Toggle me!</p>}
    </div>
  );
}

export default ToggleVisibility;
