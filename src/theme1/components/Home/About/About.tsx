import AboutCard from "./AboutCard"
import about from "../../../../assets/theme1/images/about.png"

const About = () => {
  return (
    <div className="md:my-30 my-18 flex md:flex-row flex-col-reverse items-center md:gap-36 container mx-auto ">
        <div>
        <img src={about} alt="about image" className="max-md:w-80 max-md:-ml-18" />
        </div>
        <AboutCard/>
    </div>
  )
}

export default About