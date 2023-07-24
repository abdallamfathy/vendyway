import React from 'react'
import AddressCard from './AddressCard'
import Payment from './Payment'
import Status from './Status'



const DetailsCard: React.FC = () => {
  return (
    <div className='flex flex-col gap-6 px-4 py-8 rounded-lg cartShadow'>
            <AddressCard/>
            <Payment/>
            <Status/>
    </div>
  )
}

export default DetailsCard