import React, {useState} from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export interface InputPassProps {
    title: string;
    type: string;
    placeholder?:string;
}

const InputPass: React.FC<InputPassProps> = (props) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible((prevState) => !prevState);
    };
  return (
    <div className='flex flex-col gap-2 w-full text-mdark1'>
        <label htmlFor={props.title} >{props.title}</label>
        <div className='flex justify-between border border-lgray1 rounded-lg px-4 py-4'>
        <input type={isPasswordVisible ? 'text' : 'password'}
           name={props.title} placeholder={ isPasswordVisible ? '' : '********'} className='w-full outline-none  placeholder:text-mdark1 '  />
        <button
          className={`text-mgray1 cursor-pointer z-50 ${props.type !== 'password' && 'hidden'}`}
          onClick={togglePasswordVisibility}
        >
          {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
        </button>
        </div>
    </div>
  )
}

export default InputPass