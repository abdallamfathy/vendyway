
import prodStars from '/src/assets/theme1/images/extras/prodStars.png'

export default function Info () {
  return (
<div className='flex flex-col gap-4'>
            <h1 className='md:text-2xl text-lg font-bold text-dark1 mb-2'>Mini Sweet Cake Strawberry</h1>
            <span className='text-[#9F9F9F] md:text-xl font-medium'>EGP. 250,00</span>
            <div className='flex gap-5 items-center'>
                <img src={prodStars} alt="product stars" />
                <hr className='h-7 w-[1px] bg-[#9F9F9F]'/>
                <span className='text-sm font-normal text-[#9F9F9F]'>5 Customer Review</span>
            </div>
            <p className='md:text-sm text-xs font-light opacity-80 leading-7 text-[#545454]'>Medium | Cheese , onion, and tomato pureSetting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
            </p>
        </div>
          );
}
