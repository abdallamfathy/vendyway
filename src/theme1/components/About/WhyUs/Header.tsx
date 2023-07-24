type HeaderProps = {
    title:string;
    subtitle:string;
}

export default function Header (props: HeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="font-bold md:text-3xl text-lg text-[#172B4D]">{props.title} <span className="text-pink1">Choose</span> Us</h1>
        <p className="text-[#7A869A] max-w-xl leading-6 max-md:text-sm max-md:leading-6">{props.subtitle}</p>
    </div>
  );
}
