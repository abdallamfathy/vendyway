import Banner from "../components/Extras/Banner"
import Filter from "../components/Products/Filter/Filter"
import MenuProducts from "../components/Home/Menu/Products"
import Sort from "../components/Products/Sort/Sort"


const Products = () => {
  return (
    <>  
        <Banner title="Mini Cake" page="Menu"/>
        <div className="container mx-auto flex justify-between">
        <div className="w-1/4 ">
        <Filter/>
        </div>
        <div className="flex flex-col items-end">
        <Sort/>
        <MenuProducts/>
        </div>
        </div>
    </>
  )
}

export default Products