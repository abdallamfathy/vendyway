import React from 'react'


const PromoCode: React.FC = () => {
  return (
    <div className='flex items-center gap-4 justify-between w-full'>
        <div className='bg-white rounded-lg border border-lgray1 px-1 xl:px-3 py-2'>
            <input type="text" className='border-none outline-none placeholder:text-xs text-mgray1 w-full' placeholder='Enter promotion code' />
        </div>
            <button className='text-white text-sm font-medium rounded-full bg-pink1 px-6 py-2'>Apply</button>
    </div>
  )
}

export default PromoCode