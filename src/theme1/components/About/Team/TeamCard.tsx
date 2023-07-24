import {   FaFacebookF, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import SocialCard from "./SocialCard";
import {useState} from 'react'

export interface TeamCardProps {
    img: string;
    name: string;
    position: string;
}

export default function TeamCard (props: TeamCardProps) {
    const [show , setShow] = useState(false);
  return (
    <div className="relative md:w-60 w-42 " onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        <div className='flex flex-col text-center items-center rounded-2xl teamShadow '>
      <img src={props.img} alt="team image" className='w-full h-3/4 rounded-t-2xl' />
      <div className='flex flex-col gap-2 my-3 bg-white'>
      <h1 className='text-mdark1 font-semibold text-xl'>{props.name}</h1>
      <h3 className='text-mgray1'>{props.position}</h3>
      </div>
    </div>
    <div className={`${show ? 'flex flex-col items-center gap-2 absolute  top-10 right-4' : 'hidden' }`}>
        <SocialCard icon={FaFacebookF} link='#'/>
        <SocialCard icon={FaTwitter} link='#'/>
        <SocialCard icon={FaYoutube} link='#'/>
        <SocialCard icon={FaPinterest} link='#'/>
    </div>
    </div>
  );
}
