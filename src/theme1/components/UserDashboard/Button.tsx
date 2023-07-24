import React from 'react'

interface ButtonProps {
  text:string;
}

const Button: React.FC<ButtonProps> = ({text}) => {
  return (
    <button className="rounded-full py-4 px-16 text-white bg-pink1 font-medium w-fit max-md:text-sm">
              {text}
            </button>
  )
}

export default Button