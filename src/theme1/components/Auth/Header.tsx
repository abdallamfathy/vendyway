import React from 'react'
export interface HeaderProps {
    name: string;
    message:string;
}

const Header:React.FC<HeaderProps> = (props) => {
  return (
    <div className='flex flex-col items-center gap-3 text-center'>
      <h1 className='text-mdark1 font-bold text-xl'>Welcome <span className='text-pink1'>{props.name}</span></h1>
      <p className='text-sm text-mgray1'>{props.message}</p>
    </div>
  );
}

export default Header