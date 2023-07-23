import Title from '../Title'
import RangeInput from './RangeInput'


const PriceFilter = () => {
  return (
    <div className="py-6 px-8 rounded-md border border-[#E8E8E8]">
      <div className="flex flex-col gap-5">
        <Title title="Filter by price" />
        <RangeInput/>
      </div>
    </div>
  )
}

export default PriceFilter