type HeaderProps = {
    active:string;
    setActive:(active: string)=>void;
}

export default function Header (props: HeaderProps) {
  return (
<div className="flex items-center gap-10 border-b border-[#D9D9D9] md:text-lg p-4 px-10">
            <span className={`${props.active === 'Description' ? 'font-medium text-dark1 border-b-2 border-pink1 -mb-[17px] pb-4' : 'font-normal text-[#7E7E7E]'} cursor-pointer`} onClick={()=> props.setActive('Description')}>Description</span>
            <span className={`${props.active === 'Reviews' ? 'font-medium text-dark1 border-b-2 border-pink1 -mb-[17px] pb-4' : 'font-normal text-[#7E7E7E]'} cursor-pointer`} onClick={()=> props.setActive('Reviews')}>Reviews (24)</span>
        </div>
  );
}
