import {useState} from 'react'
import Header from './Header'

const Container = () => {
    const [active , setActive] = useState('Description')
  return (
    <div className="border border-[#D9D9D9] rounded-2xl md:mt-30 mt-16">
        <Header active={active} setActive={setActive}/>
        <div className='flex flex-col gap-10 md:p-10 p-4 text-[#797979] leading-9 max-md:text-sm max-md:leading-7'>
            <p>Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.</p>
            <div className='flex flex-col gap-4'>
                <h2 className='font-semibold md:text-lg  text-[#5B5B5B]'>Key Benefits :</h2>
                <ul className="list-disc list-inside  pl-2 text-sm space-y-4">
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
                  <li>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
                  <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
                  <li>Mauris eget diam magna, in blandit turpis.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Container