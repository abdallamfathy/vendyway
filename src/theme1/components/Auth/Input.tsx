import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export interface InputProps {
  type: string;
  placeholder: string;
  primary?: string;
}

const Input: React.FC<InputProps> = (props) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="relative w-full rounded-xl border border-gray-200 p-4">
      <div className="flex justify-between items-center">
        <input
          type={!isPasswordVisible ? 'text' : 'password'}
          placeholder={props.placeholder}
          className="border-none outline-none bg-none focus:outline-none placeholder:text-mgray1 placeholder:text-sm"
        />
        <button
          className={`text-mgray1 cursor-pointer z-50 ${props.type !== 'password' && 'hidden'}`}
          onClick={togglePasswordVisibility}
        >
          {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      <div
        className={`absolute bg-white text-mdark1 inset-0 w-fit h-fit -top-3 left-3 p-1 text-xs ${
          props.primary ? 'block' : 'hidden'
        }`}
      >
        <p>{props.primary}</p>
      </div>
    </div>
  );
};

export default Input;
