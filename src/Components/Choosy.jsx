import React from 'react'
import img1 from '../img1.jpg';







const Choosy = () => {
    return (
        <div className="flex mt-20 flex-col lg:flex-row">
            <div className="relative w-full h-[50vh] lg:h-screen overflow-hidden">
                <img src={img1} alt="" className="absolute w-full lg:w-3/4 z-10" />
                <div className="lg:block absolute bg-[#A295E4] w-[90vw] lg:w-3/4 h-1/2 lg:h-3/4 right-7 lg:left-20  bottom-28 lg:bottom-20 hidden"></div>
            </div>
            <div className="w-full h-[40vh] lg:h-screen flex flex-col gap-6 px-10 lg:px-16 py-5 lg:py-36">
                <h1 className="text-5xl lg:text-6xl font-serif text-[#041e42]">Be choosy.</h1>
                <p className="text-lg">Choose every product, from cult favorites to breakout brands.</p>
                <button className="capitalize bg-[#041e42] text-white w-2/4 lg:w-1/4 px-3 py-3 text-lg font-extrabold hover:bg-[#F55939]">Start today</button>
            </div>

        </div>
    )
}

export default Choosy
