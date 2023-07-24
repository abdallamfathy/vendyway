import React from 'react'
import { Link } from 'react-router-dom'
import OrderItemsCard from './OrderItemsCard'
import item1 from '/src/assets/theme1/images/order/item1.png'
import item2 from '/src/assets/theme1/images/order/item2.png'
import item3 from '/src/assets/theme1/images/order/item3.png'



const OrderCard: React.FC = () => {
  return (
    <div className='flex flex-col md:gap-4'>
        <div className='w-full flex items-center justify-between px-6 py-3 bg-gray1 rounded-t-lg'>
            <h1 className='text-mdark1 font-medium'>Order   <span className='font-normal'>#12132</span></h1>
            <Link to={'/cancel-order/1'} className='text-pink1 text-sm cursor-pointer'>Cancel Order</Link>
        </div>
        <div className='rounded-md cartShadow border border-gray1 py-8 md:px-18 px-4'>
            <div className='md:flex hidden justify-between'>
                <h1 className='w-[240px]'>Product</h1>
                <h1 className='w-16'>Price</h1>
                <h1>Qty</h1>
                <h1>Subtotal</h1>
            </div>
            <div className='flex flex-col  md:divide-y md:divide-lgray1'>
            <OrderItemsCard img={item1} title={'Cheese Burger'} size={'medium'} price={49} qty={2} subtotal={98}/>
            <OrderItemsCard img={item2} title={'Cheese Burger'}  price={49} qty={2} subtotal={98}/>
            <OrderItemsCard img={item3} title={'Cheese Burger'}  price={49} qty={2} subtotal={98}/>
            </div>
        </div>
    </div>
  )
}

export default OrderCard