import React from 'react'
import { RiInstagramLine, RiYoutubeFill, RiTwitterFill, RiFacebookBoxFill, RiWhatsappLine, RiCopyrightLine } from "@remixicon/react"
import { useState } from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    return (
        <>
            <footer className="w-full md:h-3/4 px-5 md:px-20 py-5 md:py-20 flex flex-col md:flex-row gap-4">

                <div className="w-full md:w-1/2 pt-10 pb-0 md:py-10">
                    <h1 className="text-xl font-bold tracking-wider text-[#041e42] uppercase">Glowing Valley</h1>
                    <div className="w-full py-10 flex flex-row justify-around md:justify-between items-start">

                        <div className="flex flex-col gap-4 capitalize text-md tracking-wide">
                            <div className="font-extrabold text-lg">Products</div>
                            <Link to="/collections/beauty">
                                <div>Beauty</div>
                            </Link>
                            <Link to="/collections/hamper">
                                <div>hamper</div>
                            </Link>
                            
                            <Link to="/collections/best-seller">
                                <div>Best Seller</div>
                            </Link>
                            <div>Products</div>
                            <div>Products</div>
                        </div>

                        <div>
                            <div className="flex flex-col gap-4 capitalize text-md tracking-wide">
                                <div className="font-extrabold text-lg">Company</div>
                                <div>About</div>
                                <div>Careers</div>
                                <div>Help center</div>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col gap-4 capitalize text-md tracking-wide">
                                <div className="font-extrabold text-lg">Legal</div>
                                <div>Terms</div>
                                <div>privacy</div>
                            </div>
                        </div>

                        <div>
                            {/* for gap  */}
                        </div>

                    </div>
                </div>

                <div className="w-full md:w-1/2 px-5 md:px-20 flex flex-col gap-6">
                    <h1 className="text-lg md:text-xl font-bold md:mt-24" >Stay in touch for deals, news, and more!</h1>
                    <div className="flex flex-col lg:flex-row gap-4">
                        <input type="email" placeholder="Enter your email" className="border bg-transparent p-3 w-full" />
                        <button className="capitalize bg-[#041e42] text-white px-6 py-3 text-md font-extrabold hover:bg-[#F55939]">Submit</button>
                    </div>
                    <div className="flex gap-4 py-5">
                        <RiInstagramLine className="hover:text-purple-600 hover:scale-110" />
                        <RiFacebookBoxFill className="hover:text-blue-900 hover:scale-110" />
                        <RiYoutubeFill className="hover:text-red-600 hover:scale-110" />
                        <RiTwitterFill className="hover:text-blue-600 hover:scale-110" />
                    </div>
                </div>

            </footer>

            <div className="w-full bg-gray-200 border-t px-5 md:px-20 py-5">
                <h1 className="flex text-md font-bold gap-2 md:gap-4 capitalize">
                    <RiCopyrightLine />  {year} <p>Glowing Valley</p> <p>|</p> <p className="hover:cursor-pointer">Privacy Policy</p>
                </h1>
            </div>
        </>
    )
}

export default Footer
