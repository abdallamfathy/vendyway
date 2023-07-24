import { BsPlay } from "react-icons/bs";

export default function ShowMore () {
  return (
    <div className="flex gap-8 items-center md:mt-12 mt-4">
      <button className="md:px-11 py-3 px-5  rounded-full bg-pink1 text-white showShadow">Show more</button>
      <button className="bg-pink1 w-12 h-12 rounded-full text-white flex items-center justify-center pl-1 showShadow"><BsPlay size={28}/></button>
      <span className="text-dark1 font-medium">Watch video</span>
    </div>
  );
}
