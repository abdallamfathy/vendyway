import React from 'react'

interface HeaderProps{
    title: string;
    text: string;
    show?: string;
    handleShow: (component: string) => void;
}

const Header: React.FC <HeaderProps> = ({title , text , handleShow , show}) => {
  return (
    <div className='flex justify-between items-center'>
       <h1 className='text-2xl text-mdark1 font-semibold'>{title}</h1>
       {
        show === 'newAddress' ? <h2 className='underline cursor-pointer' onClick={() => handleShow('info')}>{text}</h2> : null
       }
       </div>
  )
}

export default Header