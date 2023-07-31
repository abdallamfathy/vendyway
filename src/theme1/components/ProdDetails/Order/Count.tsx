import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(2);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count !== 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const formattedCount = count.toString().padStart(2, "0");
  return (
    <div className="flex gap-4 items-center">
      <div
        className="md:w-8 w-7 h-7 max-md:text-sm md:h-8  rounded-full flex justify-center items-center border border-[#5B5B5B] text-[#5B5B5B] text-xl cursor-pointer"
        onClick={decrement}>
        <span>-</span>
      </div>
      <span>{formattedCount}</span>
      <div
        className="md:w-8 w-7 h-7 max-md:text-sm md:h-8  rounded-full flex justify-center items-center bg-pink1 text-white text-xl cursor-pointer"
        onClick={increment}>
        <span>+</span>
      </div>
    </div>
  );
}
