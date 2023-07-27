import React from 'react'
import Header from '../Header'
import item1 from '/src/assets/theme1/images/cart/item1.png'
import item2 from '/src/assets/theme1/images/cart/item2.png'
import item3 from '/src/assets/theme1/images/cart/item3.png'
import PromoCode from '../../Cart/Summary/PromoCode'
import Price from '../../Cart/Summary/Price'
import Button from '../../Cart/Summary/Button'
import SummaryCard from './SummaryCard'
import Payment from '../Payment/Payment'


const OrderSummary:React.FC = () => {
  return (
    <div className='flex flex-col '>
      <Header title='Order Summary'/>
      <div className='flex flex-col md:gap-22 gap-8 md:px-6  md:py-8 md:bg-white checkoutShadow '>
       <div className='flex flex-col gap-5 bg-white rounded-md max-md:p-4'>
       <SummaryCard  img={item1} name={'Mini Sweet Cake Strawberry'} desc={'Strawberry purst'} qty={2} price={49}  />
       <hr className='w-3/4 h-[1px] bg-mgray1 self-center'/>
       <SummaryCard  img={item2} name={'Mini Sweet Cake Strawberry'} desc={'Strawberry purst'} qty={2} price={49}  />
       <hr className='w-3/4 h-[1px] bg-mgray1 self-center'/>
       <SummaryCard  img={item3} name={'Mini Sweet Cake Strawberry'} desc={'Strawberry purst'} qty={2} price={49}  />
       </div>
       <div className='md:hidden'>
        <Payment/>
       </div>
      <div className='flex flex-col gap-6 bg-white rounded-md max-md:p-4'>
        <h1 className='text-dark1 text-lg font-bold max-md:hidden'>Summary</h1>
        <PromoCode/>
        <Price/>
        <div className='max-md:hidden'>
        <Button link='/order-success' text='Confirm Order' primary/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default OrderSummary