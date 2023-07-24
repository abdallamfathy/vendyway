import termasu from '/src/assets/theme1/images/about/termasu.png'
import icecream from '/src/assets/theme1/images/about/icecream.png'
import strawberryCup from '/src/assets/theme1/images/about/strawberryCup.png'
import termasuCake from '/src/assets/theme1/images/about/termasuCake.png'
export default function Images () {
  return (
    <div className='flex gap-5 items-start'>
      <div className='flex flex-col gap-5 mt-10'>
        <img src={termasu} alt="teramsu image" />
        <img src={icecream} alt="iceCream image" />
      </div>
      <div className='flex flex-col gap-5'>
        <img src={strawberryCup} alt="strawberryCup image" />
        <img src={termasuCake} alt="termasuCake image" />
      </div>
    </div>
  );
}
