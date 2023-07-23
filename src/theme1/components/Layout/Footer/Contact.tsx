import send from '../../../../assets/theme1/icons/send.png'

export default function Contact () {
  return (
    <div className='w-full rounded-full border border-[#BDBDBD] p-2 px-4 flex justify-between'>
      <input type="email" placeholder="Email Address" className='font-normal text-[#797979]' />
      <img src={send} alt="send icon" className='cursor-pointer' />
    </div>
  );
}
