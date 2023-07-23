

// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../../../index.css';

// import required modules
import { Pagination , Navigation } from 'swiper/modules';
import { Product, products } from "../Menu/Products";
import ProductCard from "../Menu/ProductCard";

export default function RelatedProducts() {
      const product: Product[] = products;

  return (
    <>
      <Swiper
        slidesPerView={7}
        spaceBetween={20}
        breakpoints={
            {   
                0: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1028: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
                1280: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                },
                 1536: {
                    slidesPerView: 7,
                    spaceBetween: 20,
                 }
            }       
        }
        // navigation
        modules={[Pagination , Navigation]}
        className="mySwiper"
      >
        {
            product.map((prod) => (
                <SwiperSlide>
                <ProductCard {...prod} />
                </SwiperSlide>
            ))
        }
      </Swiper>
    </>
  );
}

// .swiper {
//     width: 100%;
//     height: 100%;
//   }
  
//   .swiper-slide {
//     text-align: center;
//     font-size: 18px;
//     background: #fff;
  
//     /* Center slide text vertically */
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
  
//   .swiper-slide img {
//     display: block;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
  