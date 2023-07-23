import { MdKeyboardArrowDown } from "react-icons/md";

export default function AddOns() {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-[#E8E8E8] p-4 w-full">
      <div className="flex justify-between items-center">
        <p className="font-medium">
          Add Ons{" "}
          <span className="text-[#797979] bg-gray1 p-2 py-1 rounded-xl font-semibold text-xs opacity-80">
            optional
          </span>
        </p>
        <MdKeyboardArrowDown size={22} />
      </div>
    </div>
  );
}
