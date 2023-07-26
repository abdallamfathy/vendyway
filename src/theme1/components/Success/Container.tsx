import React from 'react'
import Button from '../Cart/Summary/Button'
import success from '/src/assets/theme1/images/extras/success.png'

const Container: React.FC = () => {
  return (
    <div  className='flex flex-col items-center justify-center container mx-auto gap-12 my-24'
    >
        <img src={success} alt="success image" />
        <h1 className='text-2xl text-mdark1 font-medium'>order has been Successfully</h1>
        <div className='flex flex-col gap-5 text-center md:w-100'>
        <h3 className='text-mgray1'>Order number : <strong className='text-mdark1'>344336457</strong></h3>
        <p className='text-mgray1 leading-9'>we will send you a confirmation mail with your order details and tracking information</p>
        </div>
        <div className='flex flex-col gap-6 md:w-100 w-80'>
            <Button primary text='Continue shopping' link='/products' />
            <Button  text='Track Order' link='/track-order/1' />
        </div>
    </div>
  )
}

export default Container