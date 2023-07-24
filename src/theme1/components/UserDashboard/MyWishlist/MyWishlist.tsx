import React from 'react'
import ProductCard from '../../Home/Menu/ProductCard'
import { products } from '../../Home/Menu/Products'


const MyWishlist:React.FC = () => {
  return (
    <div>
        <div className={`flex flex-wrap flex-1 gap-y-10 md:gap-6 gap-4 justify-center items-center`}>
        {
            products.slice(0,8).map((product) => (
                <ProductCard 
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                category={product.category}
                />
            ))
        }
    </div>
    </div>
  )
}

export default MyWishlist