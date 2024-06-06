import React, { useEffect, useState } from 'react'
import hero from '../hero.jpg';

const Hero = () => {

  // const images = [
  //   "../hero.jpg", "https://img.freepik.com/free-photo/rose-petals-oval-brush-nail-varnish-lipstick-necklace-purple-background_23-2148073979.jpg?t=st=1717605669~exp=1717609269~hmac=2365a249fd97850e2908e6892b88d0b0df01a1c3a0f31446c05bb8f6cf22b1a9&w=996",
  //   "https://img.freepik.com/free-photo/assortment-cosmetics-with-copy-space_23-2148574349.jpg?t=st=1717605908~exp=1717609508~hmac=3eb7e6f426ca5b7320cfcfe8809f4355784841195b3ceb5ef61b1f676fe8ab35&w=900"
  // ]

  return (
    <div className="relative overflow-hidden flex items-center justify-center">
      <img src={hero} alt="" className="object-cover w-full h-screen" />

      <div className="absolute w-[90vw] lg:w-[35vw] lg:h-[60vh] bg-white bottom-10 lg:bottom-40 lg:left-20 px-10 py-10 lg:px-14 lg:py-14 flex flex-col gap-4 lg:gap-6 justify-center" >
        <h1 className="text-4xl lg:text-5xl font-serif text-[#041e42]">Beauty that delivers.</h1>
        <p className="text-md">A customizable box of premium beauty products delivered monthly.</p>
        <button className="capitalize bg-[#041e42] text-white w-1/2 p-3 text-bold hover:bg-[#F55939]">Build your box</button>
      </div>
    </div>
  )
}

export default Hero
