import { CategoryItems } from './Categories';


export default function CategoryCard (props: CategoryItems) {
  return (
    <div className='flex flex-col gap-3 justify-center items-center w-22 h-32'>
      <div className={`bg-[#F9F9F9] rounded-full w-22 h-22 flex justify-center items-center ${props.active && 'border border-pink1'}`}>
        <img src={props.image} alt="categoryImage"/>
      </div>
      <h3 className='font-medium text-center max-md:text-sm'>{props.title}</h3>
    </div>
  );
}
