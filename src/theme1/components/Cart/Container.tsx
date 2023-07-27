import CartItems from "./CartItems"
import CartSummary from "./Summary/CartSummary"
import Header from "./Header"


const Container = () => {
  return (
    <div className="container mx-auto md:my-16  max-md:p-4">
            <div className="flex md:flex-row flex-col gap-6 justify-between">
                <div className="flex flex-col md:gap-4 w-full">
                <Header/>
                <CartItems/>
                </div>
                <CartSummary/>
            </div>
    </div>
  )
}

export default Container