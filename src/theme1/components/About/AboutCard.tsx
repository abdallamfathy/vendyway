import ShowMore from "./ShowMore";

export default function AboutCard () {
  return (
    <div className="flex flex-col gap-4 max-md:items-center max-md:justify-center max-md:text-center">
      <h2 className="text-pink1 font-semibold md:text-lg flex items-baseline gap-2">About us <hr className="border-t border-pink1 w-7" /></h2>
      <h1 className="text-dark1 xl:text-3xl lg:text-2xl text-lg font-bold xl:leading-loose lg:leading-loose">Food is an important 
          <br/>part Of a balanced Diet</h1>
      <p className="text-mgray1 leading-8 xl:leading-8 xl:text-base max-md:leading-7 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
      <ShowMore/>
    </div>
  );
}
