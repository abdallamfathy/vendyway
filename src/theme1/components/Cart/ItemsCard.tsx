import React from 'react'
import Count from '../ProdDetails/Order/Count';
import { FiEdit3, FiTrash } from 'react-icons/fi';

export interface ItemsCardProps{
    img: string;
    name: string;
    desc: string;
    qty: number;
    price: number;
    subtotal: number;

}

const ItemsCard: React.FC <ItemsCardProps>= (props) => {
  return (
    <div className='flex items-center justify-between'>
        <div className='flex gap-3 items-center w-64 '>
            <img src={props.img} alt="item image" className='max-md:w-20' />
            <div className='flex flex-col gap-1 text-xs text-mgray1'>
                <h1 className='text-dark1 text-sm font-semibold'>{props.name}</h1>
                <p>({props.desc})</p>
                <p className='max-md:hidden'>({props.qty} pieces)</p>
                <span className='text-xs text-mgray1 md:hidden '><strong className='text-base font-normal'>${props.price}</strong>.99</span>
            </div>
        </div>
        <span className='text-xs text-mgray1 max-md:hidden'><strong className='text-base'>${props.price}</strong>.99</span>
        <div className='max-md:hidden'>
            <Count/>
        </div>
        <span className='text-xs text-mdark1 max-md:hidden'><strong className='text-base'>${props.subtotal}</strong>.99</span>
        <div className='flex items-center gap-2 max-md:hidden'>
            <FiEdit3  className="text-mgray1 md:text-xl"/>
            <FiTrash  className="text-pink1 md:text-xl"/>
        </div>
        <div className='flex flex-col gap-8 md:hidden items-end'>
        <div>
            <Count/>
        </div>
        <span className='text-xs text-mdark1 max-md:hidden'><strong className='text-base'>${props.subtotal}</strong>.99</span>
        <div className='flex items-center gap-2'>
            <FiEdit3  className="text-mgray1 md:text-xl"/>
            <FiTrash  className="text-pink1 md:text-xl"/>
        </div>
        </div>
    </div>
  )
}

export default ItemsCard