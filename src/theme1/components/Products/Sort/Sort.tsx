import {MdKeyboardArrowDown} from 'react-icons/md'
import filter from '/src/assets/theme1/icons/filter.svg'

const Sort = () => {
  return (
    <div className='flex items-center justify-around'>
      <div className='font-semibold text-lg md:hidden'>
      <h1>Sweets</h1>
      </div>
      <div className="flex  items-center md:gap-8 gap-2 text-sm md:my-10 my-5 font-medium ">
        <div className='md:flex hidden items-center gap-4'>
        <span className='text-[#7E7E7E]'>Display</span>
        <div className="rounded-lg py-3 px-4 flex justify-between gap-2 items-center border border-[#EAECEE] " >
            <span>18 Per Page</span>
            <MdKeyboardArrowDown size={20}/>
        </div>
        </div>
        <div className='rounded-lg p-[15px]  border border-[#EAECEE] md:hidden'>
        <img src={filter} alt="filter icon" />
        </div>
        <div className="rounded-lg py-3 px-4 flex justify-between gap-2 items-center border border-[#EAECEE] " >
            <span className='max-md:text-xs'>Default sorting</span>
            <MdKeyboardArrowDown size={20}/>
        </div>

    </div>
    </div>
  )
}

export default Sort