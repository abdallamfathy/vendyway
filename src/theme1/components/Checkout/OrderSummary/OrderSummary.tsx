import React from 'react'
import Header from '../Header'
import item1 from '/src/assets/theme1/images/cart/item1.png'
import item2 from '/src/assets/theme1/images/cart/item2.png'
import item3 from '/src/assets/theme1/images/cart/item3.png'
import PromoCode from '../../Cart/Summary/PromoCode'
import Price from '../../Cart/Summary/Price'
import Button from '../../Cart/Summary/Button'
import SummaryCard from './SummaryCard'


const OrderSummary:React.FC = () => {
  return (
    <div className='flex flex-col '>
      <Header title='Order Summary'/>
      <div className='flex flex-col gap-22 md:px-6 px-4 py-8 bg-white checkoutShadow'>
       <div className='flex flex-col gap-5'>
       <SummaryCard  img={item1} name={'Mini Sweet Cake Strawberry'} desc={'Strawberry purst'} qty={2} price={49}  />
       <hr className='w-3/4 h-[1px] bg-mgray1 self-center'/>
       <SummaryCard  img={item2} name={'Mini Sweet Cake Strawberry'} desc={'Strawberry purst'} qty={2} price={49}  />
       <hr className='w-3/4 h-[1px] bg-mgray1 self-center'/>
       <SummaryCard  img={item3} name={'Mini Sweet Cake Strawberry'} desc={'Strawberry purst'} qty={2} price={49}  />
       </div>
      <div className='flex flex-col gap-6'>
        <h1 className='text-dark1 teext-lg font-bold'>Summary</h1>
        <PromoCode/>
        <Price/>
        <Button link='/order-success' text='Confirm Order' primary/>
      </div>
      </div>
    </div>
  )
}

export default OrderSummary