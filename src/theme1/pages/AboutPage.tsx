import Container from "../components/About/Container"
import Team from "../components/About/Team"
import WhyUs from "../components/About/WhyUs"
import Banner from "../components/Extras/Banner"


const AboutPage = () => {
  return (
    <>
        <Banner page="About Us" title="About Us"/>
        <Container/>
        <WhyUs/>
        <Team/>
    </>
  )
}

export default AboutPage