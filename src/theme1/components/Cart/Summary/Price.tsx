import React from 'react'


const Price: React.FC = () => {
  return (
    <div className='flex flex-col text-mgray1 text-sm gap-2'>
        <div className='flex justify-between font-semibold text-base'>
            <p>Subtotal:</p>
            <span>150.00EGP</span>
        </div>
        <div className='flex justify-between'>
            <p>Discount:</p>
            <span>-2.00EGP</span>
        </div>
        <div className='flex justify-between'>
            <p>Shipping cost:</p>
            <span>85.00EGP</span>
        </div>
        <div className='flex justify-between'>
            <p>Coupon discount:</p>
            <span>-2.00EGP</span>
        </div>
        <div className='flex justify-between font-semibold text-base text-mdark1'>
            <p>Total Price:</p>
            <span>30.00EGP</span>
        </div>
    </div>
  )
}

export default Price