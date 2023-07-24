import React from 'react'
import { BiRotateRight } from 'react-icons/bi'


const Status: React.FC = () => {
  return (
    <div className={`w-20 flex gap-2 items-center text-sm font-medium text-yellow-500 `}>
                <span ><BiRotateRight size={20}/></span>
                <p>pending</p>
        </div>
  )
}

export default Status