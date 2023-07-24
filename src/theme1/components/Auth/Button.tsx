import React from 'react'

type ButtonProps = {
    text: string;
    primary?:boolean;
}

const Button: React.FC <ButtonProps> = (props) => {
  return (
    <button className={`w-full rounded-full text-center py-3 font-medium ${props.primary ? 'bg-pink1 text-white' : 'border border-mgray1'}`}>
        {props.text}
    </button>
  )
}

export default Button