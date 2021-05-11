import * as React from "react"
import Header from "../components/header/header"
import Home from "../components/home/home"
import Contact from "../components/contact/contact"
import Footer from "../components/footer/footer"
import Service from "../components/service/service"
import Welcome from "../components/welcome/welcome"

import Calculator from "../components/calculator/calculator"

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
