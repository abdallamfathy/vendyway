import React from 'react'
import Payment from '../Order/Payment'


const Details: React.FC = () => {
  return (
<div className='flex flex-col gap-6 cartShadow p-5 md:w-1/2 w-full'>
        <div className=' text-mdark1 flex items-center justify-between  rounded-t-lg'>
            <h1 className='font-semibold'>Hager Tarek</h1>
        </div>
        <div className=' flex flex-col gap-4  text-mgray1 text-sm'>
            <span >21 Saad Zaghloul street Mansoura,  Egypt</span>
             <span>+20-10-21444465</span>
        </div>
        <Payment/>
        </div>
          )
}

export default Details