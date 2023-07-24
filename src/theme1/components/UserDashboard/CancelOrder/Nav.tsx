import React from 'react'


const Nav: React.FC = () => {
  return (
    <div className='md:flex hidden'>
                <h1 className='w-2/5 pl-4'>Product</h1>
                <h1 className='w-1/5 '>Price</h1>
                <h1 className='w-1/5'>Qty</h1>
                <h1 className='w-1/5'>Subtotal</h1>
            </div>
  )
}

export default Nav