import React from 'react'

interface InputProps {
    title: string;
    type: string;
    placeholder: string;
}

const Input:React.FC<InputProps> = (props) => {
  return (
    <div className='flex flex-col gap-3 w-full'>
        <label htmlFor={props.title} className='text-mgray1 text-sm font-medium'>{props.title}</label>
        <input type={props.type} placeholder={props.placeholder} className='outline-none p-3 rounded-lg border border-lgray1 placeholder:text-lgray1' />
    </div>
  )
}

export default Input