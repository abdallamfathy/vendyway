import {MdKeyboardArrowDown} from 'react-icons/md'

const Sort = () => {
  return (
    <div className="flex items-center gap-8 text-sm my-10 font-medium">
        <div className='flex items-center gap-4'>
        <span className='text-[#7E7E7E]'>Display</span>
        <div className="rounded-lg py-3 px-4 flex justify-between gap-2 items-center border border-[#EAECEE] " >
            <span>18 Per Page</span>
            <MdKeyboardArrowDown size={20}/>
        </div>
        </div>
        <div className="rounded-lg py-3 px-4 flex justify-between gap-2 items-center border border-[#EAECEE] " >
            <span>Default sorting</span>
            <MdKeyboardArrowDown size={20}/>
        </div>

    </div>
  )
}

export default Sort