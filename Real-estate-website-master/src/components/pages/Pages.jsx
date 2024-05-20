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
          <Route exact path='/' component={SignInPage} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/home' component={Home}/>
        </Switch>
      </Router>
    </>
  )
}

export default Pages
