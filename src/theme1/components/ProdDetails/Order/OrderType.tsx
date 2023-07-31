import Input from "./Input";
import AddOns from "./AddOns";
import Count from "./Count";
import Like from "./Like";
import Button from "../../Extras/Button";
import whiteBag from "/src/assets/theme1/icons/whiteBag.svg";

const OrderType = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-5 w-full">
        <div className="flex md:gap-6 gap-2 w-full">
          <Input title="Size" subtitle="2 Pieces" price={25.0} />
          <Input title="Select crust" subtitle="strawberry" price={25.0} />
        </div>
        <AddOns />
      </div>
      <div className="flex  max-md:justify-between gap-8  items-center">
        <Count />
        <Button
          size="xl"
          img={whiteBag}
          className="py-4"
          variant="primary"
          text="Add to Bag"
        />
        <div className="max-md:hidden">
          <Like />
        </div>
      </div>
    </div>
  );
};

export default OrderType;
