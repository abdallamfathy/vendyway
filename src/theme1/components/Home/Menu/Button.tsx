import { Link } from "react-router-dom";


export default function Button () {
  return (
    <Link to={"/products"}><button className='px-10 py-2 rounded-full text-white bg-pink1 font-medium max-md:text-sm'>See All</button></Link>
    );
}
