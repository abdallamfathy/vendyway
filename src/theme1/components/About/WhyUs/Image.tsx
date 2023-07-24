
export interface ImageProps {
    img:string;
}

export default function Image (props: ImageProps) {
  return (
    <>
     <img src={props.img} alt="banner image" className="w-full md:h-full h-32 rounded-xl " /> 
    </>
  );
}
