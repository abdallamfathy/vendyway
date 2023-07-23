import Input from "./Input"
import AddOns from "./AddOns"
import Count from "./Count"
import Button from "./Button"
import Like from "./Like"


const OrderType = () => {
  return (
    <div className="flex flex-col gap-8">
        <div className='flex flex-col gap-5 w-full'>
    <div className='flex md:gap-6 gap-2 w-full'>
        <Input title="Size" subtitle="2 Pieces" price={25.00}/>
        <Input title="Select crust" subtitle="strawberry" price={25.00}/>
    </div>
    <AddOns/>
    </div>
    <div className="flex  max-md:justify-between gap-8  items-center">
      <Count/>
      <Button/>
      <div className="max-md:hidden">
      <Like/>
      </div>
    </div>
    </div>
  )
}

export default OrderType