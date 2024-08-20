import React, { useState } from "react";

const Counter = () => {
    const [count, setCount ] = useState(0);

  return (
    <>
      <div className="place-content-center grid mt-20">
        <div className="">
          <div className="bg-white-400 font-medium p-6 mx-auto max-w-sm flex rounded-md shadow-2xl">
            {count}
          </div>
            <div className="mt-3 md:space-x-14">
              <button className="text-lg bg-sky-800 w-8 mt-3 p-2 rounded-md font-medium text-white hover:bg-sky-500 hover:text-black" onClick={() => setCount((count) => count + 1)}>+</button>
              <button className="text-lg bg-sky-800 mt-3 p-2 rounded-md font-medium text-white hover:bg-sky-500 hover:text-black" onClick={() => setCount((count) => count = 0)}>Clear</button>
              <button className="text-lg bg-sky-800 w-8 mt-3 p-2 rounded-md font-medium text-white hover:bg-sky-500 hover:text-black" onClick={() => setCount((count) => count - 1)}>-</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
