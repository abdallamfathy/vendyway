import pizza from '/src/assets/theme1/images/extras/pizza.png'
import stars from '/src/assets/theme1/icons/star.png'


export default function LatestCard () {
  return (
    <div className='flex items-center gap-4'>
      <img src={pizza} alt="product-image" />
      <div className='flex flex-col gap-2 text-[#4F4F4F]'>
            <h1>Pizza</h1>
            <div className='flex flex-col gap-1'>
                <img src={stars} alt="stars" />
                <span>$35.00</span>
            </div>
      </div>
    </div>
  );
}
