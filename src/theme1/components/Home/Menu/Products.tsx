import ProductCard from "./ProductCard"
import img1 from '../../../../assets/theme1/images/products/img1.png'
import img2 from '../../../../assets/theme1/images/products/img2.png'
import img3 from '../../../../assets/theme1/images/products/img3.png'
import img4 from '../../../../assets/theme1/images/products/img4.png'
import img5 from '../../../../assets/theme1/images/products/img5.png'
import img6 from '../../../../assets/theme1/images/products/img6.png'
import img7 from '../../../../assets/theme1/images/products/img7.png'
import img8 from '../../../../assets/theme1/images/products/img8.png'
import img9 from '../../../../assets/theme1/images/products/img9.png'
import img10 from '../../../../assets/theme1/images/products/img10.png'
import img11 from '../../../../assets/theme1/images/products/img11.png'
import img12 from '../../../../assets/theme1/images/products/img12.png'


export interface Product {
    id: number,
    title: string,
    image: string,
    price: number,
    category: string,
}
export const products : Product[] = [
    {
        id:1,
        title: 'Mini Sweet Cake Strawberry',
        image: img1,
        price: 200,
        category: 'the good bowl'
    },
    {
        id:2,
        title: 'Mini Sweet Cake Strawberry',
        image: img2,
        price: 200,
        category: 'the good bowl'
    },
    {
        id:3,
        title: 'Mini Sweet Cake Strawberry',
        image: img3,
        price: 200,
        category: 'the good bowl'
    },
    {
        id:4,
        title: 'Mini Sweet Cake Strawberry',
        image: img4,
        price: 200,
        category: 'the good bowl'
    },
    {
        id:5,
        title: 'Mini Sweet Cake Strawberry',
        image: img5,
        price: 200,
        category: 'the good bowl'
    },
    {
        id:6,
        title: 'Mini Sweet Cake Strawberry',
        image: img6,
        price: 200,
        category: 'the good bowl'
    },
    {
        id:7,
        title: 'Mini Sweet Cake Strawberry',
        image: img7,
        price: 200,
        category: 'the good bowl'
    },
    {
        id:8,
        title: 'Mini Sweet Cake Strawberry',
        image: img8,
        price: 200,
        category: 'the good bowl'
    },
    {
        id:9,
        title: 'Mini Sweet Cake Strawberry',
        image: img9,
        price: 200,
        category: 'the good bowl'
    },
    {
        id:10,
        title: 'Mini Sweet Cake Strawberry',
        image: img10,
        price: 200,
        category: 'the good bowl'
    },
    {
        id:11,
        title: 'Mini Sweet Cake Strawberry',
        image: img11,
        price: 200,
        category: 'the good bowl'
    },
    {
        id:12,
        title: 'Mini Sweet Cake Strawberry',
        image: img12,
        price: 200,
        category: 'the good bowl'
    },
]
const Products = () => {

    
  return (
    <div className=" grid grid-flow-row grid-cols-2 gap-x-4 gap-y-6 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 md:gap-x-6 md:gap-y-10  ">
        {
            products.map((product) => (
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
  )
}

export default Products