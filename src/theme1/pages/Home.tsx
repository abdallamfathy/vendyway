import About from "../components/Home/About"
import Hero from "../components/Home/Hero"
import Menu from "../components/Home/Menu"
import Related from "../components/Home/Related"

const Home = () => {
  return (
    <div>
        <Hero/>
        <Menu/>
        <About/>
        <Related/>
    </div>
  )
}

export default Home