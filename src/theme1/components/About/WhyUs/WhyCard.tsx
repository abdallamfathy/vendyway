
export interface WhyCardProps {
    icon: string;
    title:string;
    subtitle:string;
}

export default function WhyCard (props: WhyCardProps) {
  return (
    <div className="flex md:flex-col items-center justify-center md:text-center gap-6 md:p-6 p-3 border border-lgray1 rounded-2xl text-mgray1">
      <img src={props.icon} alt="icon" className="max-md:w-1/6"/>
        <div className="flex flex-col md:gap-6 gap-2">
        <h1 className="font-bold md:text-lg text-mgray1">{props.title}</h1>
        <p className=" max-w-xs xl:leading-8 md:leading-8 xl:text-base leading-6 text-sm">{props.subtitle}</p>
        </div>
    </div>
  );
}
