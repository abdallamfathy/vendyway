import { Product } from './Products';
import heart from '../../../../assets/theme1/icons/heart.png'
import { BsFillHeartFill } from 'react-icons/bs'
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function ProductCard (product: Product) {
    const [show , setShow] = useState<boolean>(true);
    const handleClick = (): void => {
        setShow(!show); // Add type annotation to setShow
      };
  return (
    <div className='flex flex-col items-center justify-center gap-4 md:p-[14px] p-2 bg-gray1  w-full h-full rounded-lg font-medium text-center relative'>
      <div className='absolute w-8 h-8 rounded-full bg-white/80 md:top-6 top-4 md:right-6 right-4 flex justify-center items-center cursor-pointer' onClick={handleClick}>
        {
            show ? <img src={heart} alt="heart icon" /> : <BsFillHeartFill className="text-pink1"/>
        }

      </div>
        <Link to='/product/1'><div className='flex flex-col gap-2'>
      <img src={product?.image} alt="product image" className='rounded-lg w-full h-38  md:h-42'/>
        <h3 className='text-center font-semibold leading-6 max-md:text-sm'>{product?.title}</h3>
        <h4 className='text-mgray1 md:text-sm text-xs'>{product?.category}</h4>
        <p>${product?.price}</p>
        </div></Link>
        <button className='text-lpink1 bg-transparent border border-lpink1 w-full py-2 rounded-full hover:bg-pink1 hover:text-white transition-colors max-md:text-xs'>Add to Cart</button>
    </div>
  );
}
