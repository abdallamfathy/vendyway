import React from 'react'
import Price from '../../Cart/Summary/Price'


const Summary:React.FC = () => {
  return (
    <div className='flex flex-col gap-6 rounded-2xl py-8 px-4 md:w-1/2 w-full cartShadow'>
        <h1 className='text-mdark1 md:text-lg font-bold'>Order Summary</h1>
        <Price/>
    </div>
  )
}

export default Summary