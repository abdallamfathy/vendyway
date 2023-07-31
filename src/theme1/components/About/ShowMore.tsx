import { BsPlay } from "react-icons/bs";
import Button from "../Extras/Button";

export default function ShowMore () {
  return (
<>
<div className="flex gap-8 items-center md:mt-12 mt-4">
      <Button  text="Show More" className="showShadow py-3" variant={'primary'} size='lg'/>
      <Button  icon={<BsPlay size={28}/>} className="showShadow w-12 h-12 pl-1" variant={'primary'} />
      <span className="text-dark1 font-medium">Watch video</span>
    </div>

</>
    );
}
