import React from 'react'
import ItemsCard from './ItemsCard'
import item1 from '/src/assets/theme1/images/cart/item1.png'
import item2 from '/src/assets/theme1/images/cart/item2.png'
import item3 from '/src/assets/theme1/images/cart/item3.png'


const CartItems: React.FC = () => {
  return (
    <div className='flex flex-col gap-9 px-6 py-4 rounded-md cartShadow border border-[#F2F2F2]'>
        <div className='md:flex hidden justify-between items-center text-sm font-semibold'>
            <p className='w-56'>Product</p>
            <p>Price</p>
            <p>Qty</p>
            <p>Subtotal</p>
            <p></p>
        </div>
        <div className='flex flex-col gap-6 w-full '>
            <ItemsCard img={item1} name={'Mini Sweet Cake Strawberry'} desc={'Medium'} qty={2} price={49} subtotal={98} />
            <hr className='w-3/4 h-[1px] bg-mgray1 self-center'/>
            <ItemsCard img={item2} name={'Mini Sweet Cake Strawberry'} desc={'Medium'} qty={2} price={49} subtotal={98} />
            <hr className='w-3/4 h-[1px] bg-mgray1 self-center'/>
            <ItemsCard img={item3} name={'Mini Sweet Cake Strawberry'} desc={'Medium'} qty={2} price={49} subtotal={98} />
        </div>
    </div>
  )
}

export default CartItems