import React from 'react'
import Nav from './Nav'
import CancelOrderCard from './CancelOrderCard'


const Container: React.FC = () => {
  return (
    <div className='flex flex-col gap-4'>
        <div className='text-mdark1 w-full flex flex-col gap-4 px-6 py-3 max-md:text-sm  '>
            <h1 className=' font-semibold md:text-xl text-base'>Cancel items</h1>
            <p >Eligible items that have not yet been shipped can be canceled here</p>
        </div>
            
        <Nav/>
            
        <div className='flex flex-col md:mt-10 gap-6'>
        <CancelOrderCard/>
        </div>

    </div>
  )
}

export default Container