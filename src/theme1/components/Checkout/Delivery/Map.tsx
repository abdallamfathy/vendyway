import React from 'react'
import SearchInput from '../../Layout/SearchInput'


const Map: React.FC = () => {
  return (
    <div className='w-full flex flex-col gap-4  mt-10'>
        <h1 className='text-dark1 font-semibold text-lg'>Delivery Location</h1>
        <SearchInput/>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890643.1757879874!2d46.433213422189546!3d29.309478348840827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc5363fbeea51a1%3A0x74726bcd92d8edd2!2sKuwait!5e0!3m2!1sen!2seg!4v1690440887604!5m2!1sen!2seg"  height="450"   loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full'></iframe>
    </div>
  )
}

export default Map