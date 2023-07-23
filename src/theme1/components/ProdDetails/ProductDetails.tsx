import Info from './Info'
import Like from './Order/Like'
import OrderType from './Order/OrderType'
import strawberry from '/src/assets/theme1/images/extras/strawberry.png'

const ProductDetails = () => {
  return (
    <div className="flex md:flex-row flex-col items-start gap-8 ">
        <div className='relative'>
        <img src={strawberry} alt="product-image"  />
        <div className='md:hidden absolute top-2 right-2'>
          <Like/>
        </div>
        </div>
        <div className='flex flex-col gap-8'>
        <Info/>
        <OrderType/>
        </div>
    </div>
  )
}

export default ProductDetails