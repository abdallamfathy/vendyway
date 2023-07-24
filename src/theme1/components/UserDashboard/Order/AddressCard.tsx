import React from 'react'


const AddressCard: React.FC = () => {
  return (
    <div className='flex flex-col gap-6'>
        <div className=' text-mdark1 flex items-center justify-between  rounded-t-lg'>
            <h1 className='font-semibold'>Shipping Address</h1>
        </div>
        <div className=' flex flex-col gap-4  text-mgray1 text-sm'>
            <p>Name : <span className='text-mdark1'>Hager Tarek</span></p>
            <p>Address : <span className='text-mdark1'>21 Saad Zaghloul street Mansoura,  Egypt</span></p>
            <p>Phone number : <span className='text-mdark1'>01010101010</span></p>
        </div>
        </div>
  )
}

export default AddressCard