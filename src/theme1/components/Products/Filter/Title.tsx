import more from '../../../../assets/theme1/icons/more.png'

export interface TitleProps {
    title: string;
}

export default function Title (props: TitleProps) {
  return (
    <div className="flex justify-between items-center">
            <h1 className="font-semibold">{props.title}</h1>
            <img src={more} alt="more-icon" className='cursor-pointer' />
        </div>
  );
}
