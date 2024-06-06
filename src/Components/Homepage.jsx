import React from 'react'
import Navbar from "./Navbar";
import Hero from "./Hero";
import Choosy from "./Choosy";
import Featured from "./Featured";
import Footer from "./Footer";
const Homepage = () => {
    return (
        <section className="w-full h-[100vh] bg-cover overflow-auto" >

            <div className="h-16 md:h-10 px-5 text-white bg-[#041e42] flex items-center justify-center tracking-wide text-center" >
                <p>The June Birchbox is Here! Sign up now to fully customize your box!</p>
            </div>

            <Navbar />

            <Hero />
            <Choosy />
            <Featured />
            <Footer />

        </section >
    )
}

export default Homepage
