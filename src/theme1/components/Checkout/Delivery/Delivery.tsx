import React from 'react'
import DeliveryInfo from './DeliveryInfo'
import Schedule from './Schedule'


const Delivery: React.FC = () => {
  return (
    <div className='flex flex-col gap-12'>
        <DeliveryInfo/>
          <Schedule/>
        <div className='max-md:hidden'>
        </div>
    </div>
  )
}

export default Delivery