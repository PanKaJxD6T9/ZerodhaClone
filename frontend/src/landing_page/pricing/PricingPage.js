import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Brokerage from './Brokerage'
import OpenAccount from '../OpenAccount'
import Footer from '../Footer'

const PricingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <OpenAccount />
      <Brokerage />
      <Footer />
    </div>
  )
}

export default PricingPage;