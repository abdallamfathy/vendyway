import minicake from '../../../../assets/theme1/images/categories/minicake.png'
import cheesecake from '../../../../assets/theme1/images/categories/cheesecake.png'
import donat from '../../../../assets/theme1/images/categories/donat.png'
import cake from '../../../../assets/theme1/images/categories/cake.png'
import chocolate from '../../../../assets/theme1/images/categories/chocolate.png'
import waffle from '../../../../assets/theme1/images/categories/waffle.png'
import bread from '../../../../assets/theme1/images/categories/bread.png'
import rainbow from '../../../../assets/theme1/images/categories/rainbow.png'
import CategoryCard from './CategoryCard'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import {  Pagination , Autoplay} from 'swiper/modules';

export interface CategoryItems {
    id: number;
    title: string;
    image: string;
    active: boolean;
}
const Categories = () => {
    const categories : CategoryItems[] = [
        {
            id: 1,
            title: 'Mini Cake',
            image: minicake,
            active: true

        },
        {
            id: 2,
            title: 'Cheese',
            image: cheesecake,
            active: false
        },
        {
            id: 3,
            title: 'Donat',
            image: donat,
            active: false
        },
        {
            id: 4,
            title: 'Cake',
            image: cake,
            active: false
        },
        {
            id:5,
            title: 'Chocolate',
            image: chocolate,
            active: false
        },
        {
            id:6,
            title: 'Waffle',
            image: waffle,
            active: false
        },
        {
            id:7,
            title: 'Bread',
            image: bread,
            active: false
        },
        {
            id:8,
            title: 'Rainbow',
            image: rainbow,
            active:false
        }
    ]
  return (
        <>
    <div className='md:flex hidden flex-wrap justify-center items-center gap-6'>
        {
            categories.map((category) => (
                <CategoryCard
                    key={category.id}
                    id={category.id}
                    title={category.title}
                    image={category.image}
                    active={category.active}
                    />
            ))
        }
    </div>

     {/* Mobile */}
     <div className='w-full md:hidden'>
    <Swiper
        grabCursor={true}
        slidesPerView={4}
        modules={[ Pagination , Autoplay]}
        autoplay
        className="mySwiper"
      >
        {
            categories.map((category) => (
                <SwiperSlide>
                <CategoryCard
                    key={category.id}
                    id={category.id}
                    title={category.title}
                    image={category.image}
                    active={category.active}
                    />
                    </SwiperSlide>
            ))
        }
        

      </Swiper>
    </div>
    </>
  )
}

export default Categories