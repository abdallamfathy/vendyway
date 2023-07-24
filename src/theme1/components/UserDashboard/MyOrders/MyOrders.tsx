import React from 'react'
import MyOrderCard from './MyOrderCard'
import { BsXCircle } from 'react-icons/bs'
import { BiRotateRight } from 'react-icons/bi'
import { AiOutlineCheckCircle } from 'react-icons/ai'


const MyOrders:React.FC = () => {
  return (
    <div className='flex flex-col gap-10'>
            <div className='md:flex hidden gap-12  '>
                <h1 className='w-18'>
                    Order ID
                </h1>
                <h1 className='w-18'>
                    Date
                </h1>
                <h1 className='w-14'>
                    Status
                </h1>
                <h1 className='w-10'>
                    QTY
                </h1>
                <h1 className='w-16 text-left'>
                    Total
                </h1>
            </div>
            <div className='flex flex-col max-md:gap-10  md:divide-y md:divide-lgray1'>
            <h1 className='md:hidden text-dark1 font-semibold'>My Orders</h1>
            <MyOrderCard icon={<BiRotateRight size={18}/>} status='pending'/>
            <MyOrderCard icon={<AiOutlineCheckCircle size={18}/>} status='completed'/>
            <MyOrderCard icon={<BsXCircle size={16}/>} status='cancelled'/>
            <MyOrderCard icon={<AiOutlineCheckCircle size={18}/>} status='completed'/>
            </div>
        </div>
  )
}

export default MyOrders