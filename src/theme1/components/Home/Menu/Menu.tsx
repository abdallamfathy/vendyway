import Button from '../../Extras/Button'
import Categories from './Categories'
import Products from './Products'
import Title from './Title'


const Menu = () => {
  return (
    <div className='container mx-auto md:my-30 my-18 max-md:p-4'>
        <div className='flex flex-col justify-center items-center md:gap-10 gap-6 '>
        <Title span='Menu' title='OUR MENU' subtitle='That Always Makes You Fall In Love' />
        <Categories/>
        <Products/>
        <Button link="/products" text="See All" className="font-medium max-md:text-sm" variant={'primary'} size='md'/>
        </div>
    </div>
  )
}

export default Menu