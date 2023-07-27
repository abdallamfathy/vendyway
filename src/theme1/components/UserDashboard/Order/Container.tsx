import React from 'react'
import OrderCard from './OrderCard'
import DetailsCard from './DetailsCard'
import OrderSummary from './OrderSummary'


const Container: React.FC = () => {
  return (
    <div className='flex md:flex-row flex-col gap-6'>
        <div className='md:w-2/3 w-full'>
            <OrderCard/>
        </div>
        <div className='md:w-1/3 w-full flex flex-col gap-4'>
            <DetailsCard/>
            <OrderSummary />
        </div>
    </div>
  )
}

export default Container