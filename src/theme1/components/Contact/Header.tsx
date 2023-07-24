import React from 'react'

interface HeaderProps
{
    title:string;
    subtitle:string
}
const Header:React.FC<HeaderProps> = ({title , subtitle}) => {
  return (
    <div className='flex flex-col gap-3 items-center justify-center text-center text-white md:w-130'>
        <h1 className='md:text-4xl font-semibold text-lg'>{title}</h1>
        <p className='leading-7 max-md:text-xs'>{subtitle}</p>
    </div>
  )
}

export default Header