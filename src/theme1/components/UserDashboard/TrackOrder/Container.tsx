import React from 'react'
import { Link } from 'react-router-dom'
import Details from './Details'
import Nav from './Nav'
import Summary from './Summary'
import Button from '../../Cart/Summary/Button'


const Container: React.FC = () => {
  return (
    <div className='flex flex-col'>
        <div className='w-full flex items-center justify-between px-6 py-3 bg-gray1 rounded-t-lg'>
            <h1 className='text-mdark1 font-medium'>Order   <span className='font-normal'>#12132</span></h1>
            <Link to={'/cancel-order/1'} className='text-pink1 text-sm cursor-pointer'>Cancel Order</Link>
        </div>
        <div className='rounded-md cartShadow border border-gray1 py-8 md:px-18 px-4 flex flex-col gap-8'>
            
            <Nav/>
        <div className='flex md:flex-row flex-col justify-between items-start gap-8'>
        <Details/>
        <Summary/>
        </div>
        </div>
        <div className='w-56  self-center mt-10'>
        <Button link='/products' text='Continue Shopping' primary/>
        </div>
    </div>
  )
}

export default Container