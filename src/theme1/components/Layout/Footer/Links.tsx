import { Link } from 'react-router-dom';

export interface LinksProps {
    title:string;
    links:string[];
}

export function Links (props: LinksProps) {
  return (
    <div className='flex flex-col items-start gap-6'>
      <h1 className='font-semibold'>{props.title}</h1>
      <div className='flex flex-col items-start gap-3'>
        {
            props.links.map((link , index) => {
                return <Link key={index} to="/" className='text-[#5B5B5B] font-normal max-md:text-sm'>{link}</Link>
            }
            )
        }
      </div>
    </div>
  );
}
