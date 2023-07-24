import React from 'react'


const Subscribe:React.FC = () => {
  return (
    <div className='rounded-3xl bg-white p-2 flex justify-between md:pl-8 pl-4 md:w-110 max-md:text-xs'>
        <input type="email" className='bg-none outline-none border-none placeholder:text-mgray1 placeholder:text-sm' placeholder='Your email address' />
        <button className='bg-pink1 md:px-10 px-5 py-3 text-white w-fit rounded-full'>Subscribe</button>
    </div>
  )
}

export default Subscribe