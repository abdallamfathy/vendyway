import React from 'react'

interface OrderItemsCardProps {
    img: string;
    title: string;
    size?:string | null;
    price: number;
    qty: number;
    subtotal?: number | null; // optional prop, if not provided it will be calculated based

}

const OrderItemsCard: React.FC <OrderItemsCardProps> = ({img , title , size , price , qty , subtotal}) => {
  return (
    <div className='flex justify-between items-center text-mdark1 py-8  '>
        <div className='flex gap-3 items-center md:w-2/6 w-full'>
            <img src={img} alt="product image" />
            <div className='flex flex-col gap-1'>
                <h3 className='font-semibold max-md:text-sm'>{title}</h3>
                {size && <p className='text-xs'>({size})</p>}
            <span className='font-semibold text-sm md:hidden'>${price} <span className='text-xs font-normal'>.99</span></span>
            </div>
        </div>
        <span className='font-semibold w-1/6 max-md:hidden'>${price} <span className='text-xs font-normal'>.99</span></span>
        <span className='w-1/6'>{qty}</span>
        <span className='font-semibold w-1/6 max-md:hidden'>${subtotal} <span className='text-xs font-normal'>.99</span></span>
        
    </div>
  )
}

export default OrderItemsCard