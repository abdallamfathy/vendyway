import Banner from "../components/Extras/Banner"
import Filter from "../components/Products/Filter/Filter"
import MenuProducts from "../components/Home/Menu/Products"
import Sort from "../components/Products/Sort/Sort"


const Products = () => {
  return (
    <>  
        <Banner title="Mini Cake" page="Menu"/>
        <div className="container mx-auto flex justify-between gap-22 max-md:p-4 my-10">
        <div className="w-1/4 max-md:hidden">
        <Filter/>
        </div>
        <div className="flex flex-col md:items-end md:w-3/4 w-full">
        <Sort/>
        <MenuProducts menuPage/>
        </div>
        </div>
    </>
  )
}

export default Products