import About from "../../components/About/About"
import Blog from "../../components/Blog/Blog"
import Header from "../../components/Header/Header"
import Home from "../../components/Home/Home"
import Pricing from "../../components/Pricing/Pricing"
import Services from "../../components/Services/Services"
export default function Main() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Pricing />
      <Blog />
    </>
  )
}
