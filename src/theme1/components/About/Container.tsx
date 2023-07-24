import AboutCard from "./AboutCard"
import Images from "./Images"
import bg from '/src/assets/theme1/images/about/bg.png'

const Container = () => {
  return (
    <div className="md:mt-16 mt-8 md:mb-28 p-4 relative">
    <div className="max-w-full">
    <div className="absolute -z-10 top-32 max-md:hidden">
        <img src={bg} alt="red background" />
    </div>
    </div>
    <div className="flex gap-14 items-center container mx-auto ">
        <div className="max-md:hidden flex-none w-1/2">
        <Images/>
        </div>
        <AboutCard/>
    </div>
    </div>
  )
}

export default Container