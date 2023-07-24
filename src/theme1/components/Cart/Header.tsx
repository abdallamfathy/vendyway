import React from 'react'
import { FiTrash } from 'react-icons/fi'


const Header :React.FC = () => {
  return (
    <div className=' flex justify-between w-full bg-[#E8E8E880] rounded-t-lg py-3 px-6'>
        <div className='flex items-center gap-4 text-mdark1'>
        <h3>Cart</h3>
        <span>Items: 3</span>
        </div>
        <div className='flex items-center gap-3 text-mgray1 text-sm'>
            <FiTrash size={20}/>
        <span>Remove cart</span>
        </div>
    </div>
  )
}

export default Header