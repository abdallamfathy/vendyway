import React from 'react'
import ProductCard from '../../Home/Menu/ProductCard'
import { products } from '../../Home/Menu/Products'


const MyWishlist:React.FC = () => {
  return (
    <div>
        <div className={`grid grid-flow-row grid-cols-2 2xl:grid-cols-5 xl:grid-cols-4  md:grid-cols-3  gap-x-4 gap-y-6 md:gap-x-6 md:gap-y-10`}>
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