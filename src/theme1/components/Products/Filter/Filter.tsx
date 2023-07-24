import Category from "./Category/Category"
import Latest from "./LatestProdcuts/Latest"
import PriceFilter from "./Price/PriceFilter"
import SaleStock from "./SaleStock/SaleStock"
import Tags from "./Tags/Tags"


const Filter = () => {
  return (
    <div className="container mx-auto">
        <div className="flex justify-between items-start">
            <div className="flex flex-col gap-4 w-full">
              <Category/>
              <PriceFilter/>
              <Latest/>
              <Tags/>
              <SaleStock/>
            </div>
        </div>

    </div>
  )
}

export default Filter