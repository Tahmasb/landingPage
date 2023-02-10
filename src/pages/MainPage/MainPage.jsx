import About from "../../components/About/About"
import Blog from "../../components/Blog/Blog"
import Comment from "../../components/Comments/Comment"
import Contact from "../../components/Contact/Contact"
import Header from "../../components/Header/Header"
import Home from "../../components/Home/Home"
import Pricing from "../../components/Pricing/Pricing"
import Services from "../../components/Services/Services"
import Footer from "../../components/Footer/Footer"
export default function MainPage() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Pricing />
      <Blog />
      <Comment />
      <Contact />
      <Footer />
    </>
  )
}
