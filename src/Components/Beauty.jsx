import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import ProductList from './ProductList';
const Beauty = () => {
  return (
    <>
      <Navbar />
      <ProductList category="Beauty" />
      <Footer />
    </>
  )
}

export default Beauty
