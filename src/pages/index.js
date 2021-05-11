import * as React from "react"
import Header from "../components/header/header"
// import Home from "../components/home/home"
// import Contact from "../components/contact/contact"
// import Footer from "../components/footer/footer"
// import Service from "../components/service/service"
import Welcome from "../components/welcome/welcome"
import loadable from "@loadable/component"

// import Calculator from "../components/calculator/calculator"

const Home = loadable(() => import("../components/home/home"))
const Service = loadable(() => import("../components/service/service"))
const Calculator = loadable(() => import("../components/calculator/calculator"))
const Contact = loadable(() => import("../components/contact/contact"))
const Footer = loadable(() => import("../components/footer/footer"))

const IndexPage = () => (
  <div className="App">
    <Header />
    <Welcome />
    <Home />
    <Service />
    <Calculator />

    <Contact />
    <Footer />
  </div>
)

export default IndexPage
