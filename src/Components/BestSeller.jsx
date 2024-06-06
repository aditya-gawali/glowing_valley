import React from 'react'
import Navbar from './Navbar'
import ProductList from './ProductList'
import Footer from './Footer'

const BestSeller = () => {
    return (
        <>
            <Navbar />
            <ProductList category="Best Seller" />
            <Footer />
        </>
    )
}

export default BestSeller
