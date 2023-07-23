import HeroSlider from "./HeroSlider"
import HeroText from "./HeroText"


const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse max-md:gap-6 items-center container mx-auto md:my-20 max-md:p-4">
        <HeroText/>
        <HeroSlider/>
    </div>
  )
}

export default Hero