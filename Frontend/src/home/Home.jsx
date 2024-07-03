import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Freecard from '../components/Freecard'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Freecard/>
      <Footer/>
    </div>
  )
}

export default Home
