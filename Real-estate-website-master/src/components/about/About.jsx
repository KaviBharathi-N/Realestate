import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"

const About = () => {
  return (
    <>
      <Header/>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>As we grew from a small rental agency to a respected name in the real estate sector, our core values of integrity, transparency, and customer satisfaction have remained unchanged. Our clients trust us not just for the quality of our properties but for our commitment to ensuring each tenant feels at home. We have expanded our offerings over the years, now managing a diverse portfolio of properties across [City/Region], each selected with our clients’ needs in mind.</p>
            
            <p>Embracing innovation has been key to our approach. We were among the first in [Region] to implement a fully integrated online rental management system, allowing for smooth and secure transactions, easy communications, and efficient problem resolution. In response to evolving needs, we’ve adopted flexible leasing terms and have expanded our services to include virtual tours and online consultations, ensuring that you can find your perfect home from anywhere in the world.</p>
            
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default About
