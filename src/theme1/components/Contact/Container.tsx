import React from 'react'
import Banner from '../Extras/Banner'
import contact from '/src/assets/theme1/images/extras/contact.png'
import ContactForm from './ContactForm'
import ContactBanner from './ContactBanner'


const Container: React.FC = () => {
  return (
    <>
        <Banner page='Contact' title='Contact'/>
        <div className='container mx-auto md:my-16 my-8'>
            <div className='flex flex-col md:gap-20 gap-10 w-full p-4'>
                <div className='flex gap-14 justify-center items-center'>
                <div  className='md:w-3/5 w-full'>

                <ContactForm/>
                </div>
                <div className='w-2/5 max-md:hidden'>
                <img src={contact} alt="illustration" />
                </div>
                </div>
                <ContactBanner/>
            </div>
        </div>
    </>
  )
}

export default Container