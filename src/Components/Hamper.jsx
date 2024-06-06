import React from 'react'
import Navbar from './Navbar'
import ProductList from './ProductList'
import Footer from './Footer'

const Hamper = () => {
  return (
    <>
      <Navbar />
      <ProductList category = "Hamper" />
      <Footer />

    </>
  )
}

export default Hamper
