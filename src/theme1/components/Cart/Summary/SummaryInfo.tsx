import React from 'react'
import { FiInfo } from 'react-icons/fi'
import { IoMdCard } from 'react-icons/io'
import { PiMapPinLine } from 'react-icons/pi'


const SummaryInfo: React.FC = () => {
  return (
    <div className='flex flex-col gap-3 text-sm text-mdark1'>
        <div className='flex items-center gap-3'>
        <IoMdCard size={18}/>
        <p>Safety payment</p>
        </div>
        <div className='flex items-center gap-3'>
        <PiMapPinLine size={18}/>
        <p>More than 5000 stationary shop</p>
        </div>
        <div className='flex items-center gap-3'>
        <FiInfo size={18}/>
        <p>Free shipping and returns</p>
        </div>
    </div>
  )
}

export default SummaryInfo