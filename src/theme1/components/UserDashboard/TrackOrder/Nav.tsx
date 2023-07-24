import React from 'react'
import { BiCheckCircle } from 'react-icons/bi'


const Nav: React.FC = () => {
  return (
    <div className='flex gap-4 text-center items-center justify-between max-md:text-sm'>
                <h1 className='w-1/4 text-green-500 border-b border-green-500 pb-4 flex justify-center md:gap-2 gap-1 items-center'><span><BiCheckCircle className="md:text-xl text-sm" /></span> Ordered</h1>
                <h1 className='w-1/4 text-green-500 border-b border-green-500 pb-4 flex justify-center md:gap-2 gap-1 items-center'><span><BiCheckCircle className="md:text-xl text-sm" /></span> Confirmed</h1>
                <h1 className='w-1/4 text-lgray1 border-b border-lgray1 pb-4 flex justify-center gap-2 items-center'> Delivering</h1>
                <h1 className='w-1/4 text-lgray1 border-b border-lgray1 pb-4 flex justify-center gap-2 items-center'> Delivered</h1>
            </div>
  )
}

export default Nav