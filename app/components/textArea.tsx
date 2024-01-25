"use client"
import React ,{useState} from "react";

function CharacterCounter() {
  const [text, setText] = useState("");

  function handleTextareaChange(event:any) {
    setText(event.target.value);
  }
  return (
    <div className="flex items-center h-screen w-full gap-4 ml-4">
      <textarea
        className="bg-blue-300 px-4 py-2 rounded-md font-semibold ml-2 "
        value={text}
        onChange={handleTextareaChange}
      />
      <p>Character count: {text.length}</p>
    </div>
  );
}

export default CharacterCounter;
