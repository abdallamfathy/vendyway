import Header from './Header'
import Image from './Image'
import WhyCard from './WhyCard'
import banner from '/src/assets/theme1/images/about/banner.png'
import student from '/src/assets/theme1/icons/about/student.svg'
import coffee from '/src/assets/theme1/icons/about/coffee.svg'
import person from '/src/assets/theme1/icons/about/person.svg'


const WhyUs = () => {
  return (
    <div className='container mx-auto md:my-16 my-8 p-4'>
        <div className='flex flex-col   gap-8'>
        <div className='max-md:order-2'>
        <Header title={'Why'} subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. " />
        </div>
        <div className='max-md:order-1'>
        <Image img={banner}/>
        </div>
        <div className='flex md:flex-row flex-col justify-between items-center max-md:gap-6 max-md:order-3'>
          <WhyCard icon={student} title={'Best Chef'} subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam ntesque bibendum non '} />
          <WhyCard icon={coffee} title={'120 Item food'} subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam ntesque bibendum non '} />
          <WhyCard icon={person} title={'Clean Environment '} subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam ntesque bibendum non '} />
        </div>
        </div>
    </div>
  )
}

export default WhyUs