import Nav from "./nav"
import Hero from "./hero"
import Portfolio from "./portfolio"
import Services from "./services"
import About from "./about"
import Contact from "./contact"
import Footer from "./footer"


const main = () => {
  return (
    <div className="bg-indigo-600">
        <Nav/>
        <Hero/>
        <Portfolio/>
        <Services/>
        <About/>
        <Contact/>
        <Footer/>

    </div>
  )
}

export default main