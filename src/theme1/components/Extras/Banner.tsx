import banner from '../../../assets/theme1/images/extras/banner.png'
import { IoIosArrowForward } from 'react-icons/io';
export interface BannerProps {
    title:string;
    page: string;
}

export default function Banner (props: BannerProps) {
  return (
    <div className='relative'>
        <img src={banner} alt="Banner" className='w-full max-h-96 object-cover object-bottom' />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col gap-3  items-center">
            <h1 className="text-[40px] font-bold font-playfair">{props.title}</h1>
            <div className='inline-flex items-center justify-center gap-2'>
                <p className='font-[300]'>Home</p>
                <IoIosArrowForward size={16}/>
                <p>{props.page}</p>
            </div>
        </div>
    </div>
  );
}
