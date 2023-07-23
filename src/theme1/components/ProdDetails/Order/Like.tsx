import { BsFillHeartFill } from 'react-icons/bs';
import heart from '/src/assets/theme1/icons/heart.png'
import { useState } from 'react';

export default function Like () {
  const [show , setShow] = useState<boolean>(true);
    const handleClick = (): void => {
        setShow(!show); // Add type annotation to setShow
      };
  return (
    <div className=' w-10 h-10 rounded-full bg-[#F2F2F2] flex justify-center items-center cursor-pointer' >
       {
            show ? <img src={heart} alt="heart icon" onClick={handleClick}/> : <BsFillHeartFill className="text-pink1" onClick={handleClick}/>
        }
  </div>
  );
}
