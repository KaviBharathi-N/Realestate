import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import SignInPage from "../common/header/SignInPage"


const Pages = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' Component={SignInPage}  />
          <Route exact path='/contact' Component={Contact} />
          <Route exact path='/about' Component={About} />
          <Route exact path='/services' Component={Services} />
          <Route exact path='/blog' Component={Blog} />
          <Route exact path='/pricing' Component={Pricing} />
          <Route exact path='/home' Component={Home}/>
        </Switch>
      </Router>
    </>
  )
}

export default Pages
