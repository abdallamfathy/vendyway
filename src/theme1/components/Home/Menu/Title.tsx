
export interface TitleProps {
  span: string;
  title: string;
  subtitle: string;
}

export default function App(props: TitleProps) {
  return (
    <div className="flex flex-col items-center justify-center text-pink1 gap-1 md:w-[548px] w-64 md:p-10 text-center">
      <h3 className="font-semibold md:text-lg text-base">{props.title}</h3>
      <h1 className="text-dark1 font-bold md:text-3xl md:leading-relaxed">
        <span className="text-pink1">{props.span}</span> {props.subtitle}
      </h1>
    </div>
  );
}
