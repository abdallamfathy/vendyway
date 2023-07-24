import React from 'react'
import OrderSummary from './OrderSummary/OrderSummary'
import Payment from './Payment/Payment'
import Delivery from './Delivery/Delivery'


const Container: React.FC = () => {
  return (
    <div className="container mx-auto md:my-16 my-8">
            <div className="flex md:flex-row flex-col gap-6 justify-between items-start">
                <div className="flex flex-col gap-[3.9rem] md:w-7/12 w-full checkoutShadow">
                <Delivery/>
                <Payment/>
                </div>
              <div className='md:w-5/12 w-full'>
              <OrderSummary/>
              </div>
            </div>
    </div>  )
}

export default Container