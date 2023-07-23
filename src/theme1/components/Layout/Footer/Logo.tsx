import {FaFacebookF , FaTwitter} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'

export interface LogoProps {
    logo: string;
    name: string;
    title: string;
}

export default function Logo (props: LogoProps) {
  return (
    <div className='flex flex-col gap-8 items-start w-64'>
      <div className='flex items-center gap-4'>
        <img src={props.logo} alt="logo" />
        <h1 className='text-2xl font-semibold'>{props.name}</h1>
      </div>
      <p className='font-medium leading-7'>
        {props.title}
      </p>
      <div className='flex items-center text-pink1 gap-8'>
        <FaFacebookF/>
        <RiInstagramFill/>
        <FaTwitter/>
      </div>
    </div>
  );
}
