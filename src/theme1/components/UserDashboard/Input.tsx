import React from 'react'

export interface InputProps {
    title: string;
    type: string;
    placeholder:string;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className='flex flex-col gap-2 w-full text-mdark1'>
        <label htmlFor={props.title} >{props.title}</label>
        <input type={props.type} name={props.title} placeholder={props.placeholder} className='w-full outline-none border border-lgray1 rounded-lg placeholder:text-mdark1 pl-4 py-4'  />
    </div>
  )
}

export default Input