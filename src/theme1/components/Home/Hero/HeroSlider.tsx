import slider1 from '../../../../assets/theme1/images/slider1.png'
import slider2 from '../../../../assets/theme1/images/slider2.png'
import slider3 from '../../../../assets/theme1/images/slider3.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination , Autoplay} from 'swiper/modules';

export default function HeroSlider() {
  return (
    <div className='container mx-auto md:w-120 '>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination , Autoplay]}
        autoplay
        className="mySwiper"
      >
        <SwiperSlide className=' flex md:justify-end justify-center items-end '>
          <img src={slider1} className='md:w-[350px] md:h-[525px] w-2/3 h-90 z-50 object-fit rounded-lg'/>
        </SwiperSlide>
        <SwiperSlide className=' flex md:justify-end justify-center'>
        <img src={slider2} className='md:w-[350px] md:h-[525px]  w-2/3 h-90 z-50 object-fit rounded-lg'/>
        </SwiperSlide>
        <SwiperSlide className=' flex md:justify-end justify-center'>
        <img src={slider3} className='md:w-[350px] md:h-[525px] w-2/3 h-90 z-50 object-fit rounded-lg'/>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
