
export interface HeaderProps {
    title:string;
    subtitle: string;
}

export default function Header (props: HeaderProps) {
  return (
    <div className='text-center text-white flex flex-col gap-1'>
      <h1 className='font-bold xl:text-5xl lg:text-3xl text-2xl'>{props.title}</h1>
      <p className='leading-6 md:max-w-xl max-w-xs max-md:text-sm max-md:font-light'>{props.subtitle}</p>
    </div>
  );
}
