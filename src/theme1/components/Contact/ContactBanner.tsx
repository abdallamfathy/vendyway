import React from 'react'
import Header from './Header'
import banner from '/src/assets/theme1/images/extras/contactBanner.png'
import Subscribe from './Subscribe'

const ContactBanner:React.FC = () => {
  return (
    <div className='md:mt-16 mt-8 md:mb-10 mb-44'>
        <div className='relative -z-10 '>
        <img src={banner} alt="banner" className='absolute w-full max-md:h-72' />
        </div>
       <div className='flex flex-col items-center justify-center xl:gap-20 gap-12 2xl:py-36 md:py-22 p-10'>
       <Header title={'Deliciousness to your inbox'} subtitle='Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim '/>
       <Subscribe/>
       </div>
    </div>
  )
}

export default ContactBanner