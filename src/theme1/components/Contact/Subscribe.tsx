import React from 'react'
import Button from '../Extras/Button'


const Subscribe:React.FC = () => {
  return (
    <div className='rounded-3xl bg-white p-2 flex justify-between md:pl-8 pl-4 md:w-110 max-md:text-xs'>
        <input type="email" className='bg-none outline-none border-none placeholder:text-mgray1 placeholder:text-sm' placeholder='Your email address' />
        <Button  text="Subscribe" className=" py-3" variant={'primary'} size='lg'/>

    </div>
  )
}

export default Subscribe