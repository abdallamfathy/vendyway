import React from 'react'
import PromoCode from './PromoCode'
import Price from './Price'
import SummaryInfo from './SummaryInfo'
import Button from '../../Extras/Button'


const CartSummary: React.FC = () => {
  return (
    <div className='flex flex-col gap-6 rounded-2xl py-8 px-4 w-96 cartShadow'>
        <h1 className='text-mdark1 text-lg font-bold'>Summary</h1>
        <PromoCode/>
        <Price/>
        <div className='flex flex-col gap-3'>
          <Button text='Go to checkout' link='/checkout' variant='primary' fullWidth className='text-sm font-medium py-3'/>
          <Button text='Go back to shopping ' link='/products' variant='outline' fullWidth className='text-sm  font-medium py-3 border-2'/>
        </div>
        <SummaryInfo/>
    </div>
  )
}

export default CartSummary