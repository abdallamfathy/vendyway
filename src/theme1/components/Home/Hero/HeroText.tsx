import Button from "../../Extras/Button";

const HeroText = () => {
  return (
    <div className="container mx-auto flex flex-col  items-start justify-between md:w-120 md:h-100 max-md:gap-4">
      <h1 className="text-dark1 font-bold md:text-6xl text-2xl leading-10 md:leading-[84px]">Sweet Donates <br className="md:hidden"/> Created With <span className="text-[#D41443]">LOVE</span> & <span className="text-[#D41443]">JOY!</span></h1>
      <h2 className="text-ldark1 md:leading-8 tracking-wide max-md:text-sm max-md:leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>
      <Button link="/products" text="Shop Now" className="max-md:text-sm max-md:mt-8" variant={'primary'} size="lg"/>
    </div>
  );
};

export default HeroText;
