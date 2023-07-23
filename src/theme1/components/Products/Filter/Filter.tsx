import Category from "./Category/Category"
import Latest from "./LatestProdcuts/Latest"
import PriceFilter from "./Price/PriceFilter"
import SaleStock from "./SaleStock/SaleStock"
import Tags from "./Tags/Tags"


const Filter = () => {
  return (
    <div className="container mx-auto my-10">
        <div className="flex justify-between items-start">
            <div className="flex flex-col gap-4 w-90">
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