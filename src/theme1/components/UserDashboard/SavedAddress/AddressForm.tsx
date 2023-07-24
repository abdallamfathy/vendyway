import React from 'react'
import Input from '../Input';
import Button from '../Button';
import CheckInput from './CheckInput';

interface AddressFormProps {
}

const AddressForm:React.FC<AddressFormProps> = () => {
  return (
    <div className='flex flex-col gap-8 max-md:text-sm'>
        <div className='flex md:flex-row flex-col items-center gap-6'>
            <Input placeholder='' title='Full Name' type='text'/>
            <Input placeholder='' title='Phone' type='tel'/>
        </div>
        <div className='flex md:flex-row flex-col items-center gap-6'>
            <Input placeholder='' title='Email' type='email'/>
            <Input placeholder='' title='City' type='text'/>
        </div>
        <div className='flex md:flex-row flex-col items-center gap-6'>
            <div className='md:w-1/2 w-full'>
            <Input placeholder='' title='State' type='text'/>
            </div>
            <div className='flex   items-center gap-4 md:w-1/2 w-full'>
            <Input placeholder='' title='ZIP' type='text'/>
            <Input placeholder='' title='State' type='text'/>
            </div>
        </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="address" className='text-'>Address</label>
                <textarea name="address" id="" cols={20} rows={3} className='border border-lgray1 outline-none rounded-lg p-4'></textarea>
            </div>
            <div className='flex flex-col gap-4'>
                <CheckInput text='Use as my default Billing address'/>
                <CheckInput text='Use as my default Delivering address'/>
            </div>
        <div className='max-md:self-center'>
        <Button text='Save Changes'/>
        </div>
    </div>
  )
}

export default AddressForm