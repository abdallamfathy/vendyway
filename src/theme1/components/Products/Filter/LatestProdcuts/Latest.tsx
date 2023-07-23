import Title from "../Title"
import LatestCard from "./LatestCard"

const Latest = () => {
  return (
    <div className="py-6 px-8 rounded-md border border-[#E8E8E8]">
      <div className="flex flex-col gap-5">
        <Title title="Latest Products" />
        <LatestCard/>
        <LatestCard/>
        <LatestCard/>
      </div>
    </div>
  )
}

export default Latest