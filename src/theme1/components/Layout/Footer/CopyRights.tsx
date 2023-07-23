import { BsFillHeartFill } from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa";

export default function CopyRights() {
  return (
    <div className="flex md:flex-row flex-col max-md:gap-2 justify-between items-center pt-4 border-t border-[#F2F2F2] max-md:text-sm ">
      <div className="inline-flex gap-2 items-center text-[#5B5B5B]">
      <p>All rights Reserved</p>
      <FaRegCopyright/>
      <p className="font-medium">Your Company, 2021</p>
      </div>
      <div className="inline-flex gap-2 items-center text-[#5B5B5B]">
      <p>Made with</p>
      <BsFillHeartFill className="text-pink1"/>
      <p className="font-semibold">VendyWay</p>
      </div>

    </div>
  );
}
