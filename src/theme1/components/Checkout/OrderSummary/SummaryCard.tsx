import React from 'react'
import Count from '../../ProdDetails/Order/Count';
import { FiEdit3 } from 'react-icons/fi';

 interface SummaryCard{
    img: string;
    name: string;
    desc: string;
    price: number;
    qty: number;

}

const SummaryCard: React.FC<SummaryCard> = (props) => {
  return (
    <div className='flex justify-between'>
        <div className='flex gap-3 items-center w-64 '>
            <img src={props.img} alt="item image" className='max-md:w-20'/>
            <div className='flex flex-col gap-1 text-xs text-mgray1'>
                <h1 className='text-dark1 text-sm font-semibold'>{props.name}</h1>
                <p>({props.desc})</p>
                <p>({props.qty} pieces)</p>
                <span className='text-xs text-mgray1 max-md:hidden'><strong className='text-base'>${props.price}</strong>.99</span>
            </div>
        </div>
        <div className='flex flex-col items-end justify-between '>
            <Count/>
            <FiEdit3  className="text-mgray1"/>
        </div>
    </div>
  )
}

export default SummaryCard