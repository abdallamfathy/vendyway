import whiteBag from '/src/assets/theme1/icons/whiteBag.svg'

export default function Button () {
  return (
    <div className="py-4  md:px-16 px-8 max-md:text-sm flex justify-center items-center gap-2 text-white bg-pink1 rounded-full text-medium cursor-pointer">
      <img src={whiteBag} alt="bag" />
      <span>Add to Bag</span>
    </div>
  );
}
