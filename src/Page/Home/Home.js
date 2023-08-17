import React from 'react'
import Header from '../../Components/Header/Header'
import Womenscomp from '../../Components/Womenscomp/Womenscomp'
import Deal from '../../Components/Deal/Deal'
import Menscomp from '../../Components/Menscomp/Menscomp'
import Testtimonials from '../../Components/Testimonials/Testtimonials'
import Services from '../../Components/Servicess/Services'
import Blog from '../../Components/Blogs/Blog'
import Trends from '../../Components/Trends/Trends'

const Home = () => {
  return (
    <div>
      <Header />
      <Womenscomp />
      <Deal />
      <Menscomp />
      <Trends />
      <Testtimonials />
      <Blog />
      <Services />
    </div>
  )
}

export default Home
