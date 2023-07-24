import React from 'react'
import OrderItemsCard from '../Order/OrderItemsCard'
import item1 from '/src/assets/theme1/images/order/item1.png'
import item2 from '/src/assets/theme1/images/order/item2.png'
import item3 from '/src/assets/theme1/images/order/item3.png'
import Button from '../../Cart/Summary/Button'


const CancelOrderCard: React.FC = () => {
  return (
    <div className='flex flex-col gap-4'>
            <div className='flex w-full items-center gap-4 cartShadow px-4'>
                <input type="checkbox"/>
                <div className='w-full'>
            <OrderItemsCard img={item1} title={'Cheese Burger'} size={'medium'} price={49} qty={2} subtotal={98}/>
                </div>
            </div>
            <div className='flex w-full items-center gap-4 cartShadow px-4'>
                <input type="checkbox" />
                <div className='w-full'>
            <OrderItemsCard img={item2} title={'Cheese Burger'} size={'medium'} price={49} qty={2} subtotal={98}/>

                </div>
            </div>
            <div className='flex w-full items-center gap-4 cartShadow px-4'>
                <input type="checkbox" />
                <div className='w-full'>
            <OrderItemsCard img={item3} title={'Cheese Burger'} size={'medium'} price={49} qty={2} subtotal={98}/>

                </div>
            </div>
            <div className='w-64 max-md:self-center'>
        <Button text='Cancel the selected item' link='' primary/>

            </div>
            </div>
  )
}

export default CancelOrderCard