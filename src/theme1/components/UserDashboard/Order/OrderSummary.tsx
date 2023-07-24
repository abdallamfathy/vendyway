import React from 'react'
import Price from '../../Cart/Summary/Price'
import Button from '../../Cart/Summary/Button'


const OrderSummary: React.FC = () => {
  return (
    <div className='flex flex-col gap-6 rounded-2xl py-8 px-4 w-full cartShadow'>
        <h1 className='text-mdark1 text-lg font-bold'>Summary</h1>
        <Price/>
        <div className='flex flex-col gap-3'>
        <Button text="Track Order" link="/track-order/1" primary />
        </div>
    </div>
  )
}

export default OrderSummary