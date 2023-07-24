import React from 'react'

export interface InputProps {
    title: string;
    type: string;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className='flex flex-col gap-2 w-full'>
        <label htmlFor={props.title} className='text-xs text-mgray1'>{props.title}</label>
        <input type={props.type} name={props.title} className='w-full outline-none border border-lgray1 rounded-lg p-2' />
    </div>
  )
}

export default Input