
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../../../index.css';

// import required modules
import { Pagination , Navigation, Autoplay } from 'swiper/modules';
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
        modules={[Pagination , Navigation, Autoplay]}
        autoplay
        className="mySwiper"
      >
        {
            product.map((prod) => (
                <SwiperSlide key={prod.id}>
                <ProductCard {...prod} />
                </SwiperSlide>
            ))
        }
      </Swiper>
    </>
  );
}


  