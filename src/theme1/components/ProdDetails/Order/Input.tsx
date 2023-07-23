import { MdKeyboardArrowDown } from 'react-icons/md';

export interface InputProps {
    title:string;
    subtitle: string;
    price: number;
}

export default function Input (props: InputProps) {
  return (
    <div className='flex flex-col gap-2 rounded-lg border border-[#E8E8E8] md:p-4 p-2 w-full max-md:text-sm'>
    <div className='flex justify-between items-center'>
        <p className='font-medium'>{props.title} <span className='text-pink1 font-semibold'>*</span></p>
       <MdKeyboardArrowDown size={22}/>
    </div>
    <div className='flex justify-between items-center'>
        <p className='text-[#797979] font-normal'>{props.subtitle}</p>
        <p className='text-[#5B5B5B]'>EGP {props.price}</p>
    </div>

</div>  );
}
