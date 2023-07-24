import React from 'react'
import Input from './Input'


const ContactForm: React.FC = () => {
  return (
    <div className='flex flex-col gap-10 w-full'>
        <h1 className='font-bold text-dark1 md:text-3xl text-xl'>Contact us</h1>
        <div className='flex flex-col gap-7'>
        <div className='flex md:flex-row flex-col justify-between gap-6'>
            <Input type='text' title='Name' placeholder='Enter your name...' />
            <Input type='email' title='Email' placeholder='Your email address...' />
        </div>
        <div className='flex md:flex-row flex-col justify-between gap-6'>
            <Input type='text' title='Subject' placeholder='Enter your subject...' />
            <Input type='text' title='Enquiry type' placeholder='Advertising' />
        </div>
        <div className='flex flex-col gap-3 w-full'>
        <label htmlFor='asd' className='text-mgray1 text-sm font-medium'>Message</label>
        <textarea cols={100} rows={8} placeholder='Enter your message...' className='outline-none p-3 rounded-lg border border-lgray1 placeholder:text-lgray1' ></textarea>
    </div>
        
        </div>
        <button className='rounded-full bg-pink1 text-white px-12 py-3 w-fit'>Submit</button>
    </div>
  )
}

export default ContactForm