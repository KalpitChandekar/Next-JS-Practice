"use client";

import React, { useEffect, useState } from "react";

const Page: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const [counts, setCounts] = useState<number>(0);

  // Use useEffect to display an alert when the count changes
  useEffect(() => {
    alert("button clicked");
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-full gap-4">
      <button
        className="bg-blue-300 px-4 py-2 rounded-md font-semibold "
        onClick={() => setCount(count + 1)}
      >
        Click {count}
      </button>

      <button
        className="bg-blue-300 px-4 py-2 rounded-md font-semibold"
        onClick={() => setCounts(counts + 1)}
      >
        Click {counts}
      </button>
    </div>
  );
};

export default Page;
