import React from 'react'
import Input from './Input'


const Schedule: React.FC  = () => {
  return (
    <div className='flex flex-col gap-6 '>
        <label
            className={`checkbox-container inline-flex gap-2 items-baseline max-md:ml-4`}>
            <input
              type="checkbox"
            
            />
            <span className="checkmark" />
            <p className='text-dark1 font-semibold '>Schedule Delivery</p>
          </label>
          <div className='bg-white px-14 py-6 checkoutShadow'>
        <div className='flex flex-col gap-6'>
            <Input type='date' title='Date'/>
            <Input type='text' title='Note'/>
        </div>
    </div>
    </div>
  )
}

export default Schedule