import React, { useState } from 'react'
import { RiUserLine, RiSearchLine, RiShoppingBagLine, RiMenuLine, RiCloseLine } from "@remixicon/react"
import { Link } from 'react-router-dom'
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            <nav className="w-full h-20 border flex items-center justify-between flex-row px-4 lg:px-14 sticky top-0 bg-white z-40">

                <div className='flex lg:hidden items-center justify-center gap-4'>
                    <RiMenuLine className='hover:cursor-pointer font-bold text-[#041e42]' onClick={toggleNavbar} />
                    <RiUserLine className='hover:cursor-pointer font-bold text-[#041e42]' />
                </div>

                <Link to="/">
                    <div className="text-xl font-bold tracking-wider text-[#041e42] uppercase text-wrap">
                        Glowing Valley
                    </div>
                </Link>
                <div className="hidden lg:flex items-center justify-center flex-row gap-8 capitalize text-lg font-bold hover:cursor-pointer" >

                    <Link to="/collections/best-seller">
                        <div className='hover:border-b border-[#F55939] py-6'>Bestseller</div>
                    </Link>
                    <Link to="/collections/beauty">
                        <div className='hover:border-b border-[#F55939] py-6'>Beauty</div>
                    </Link>
                    <Link to="/collections/hamper">
                        <div className='hover:border-b border-[#F55939] py-6'>Hamper</div>
                    </Link>
                    <div className='hover:border-b border-[#F55939] py-6'>About</div>
                    <div className='hover:border-b border-[#F55939] py-6'>contact</div>
                    <div className="text-gray-500 text-xl">|</div>
                    <RiUserLine size={23} />
                    <RiSearchLine size={23} />
                    <RiShoppingBagLine size={23} />

                </div>
                <div className='flex lg:hidden items-center justify-center gap-6'>
                    <RiShoppingBagLine className='hover:cursor-pointer font-bold text-[#041e42]' />
                </div>
            </nav>

            {
                isOpen ?
                    <nav className='absolute w-full h-full z-50 top-20 md:top-10 bg-white flex flex-col gap-6 px-10 py-10 transition-all ease-in-out delay-100' id='menu'>
                        <div className='flex justify-between text-lg font-bold'>
                            <h1>Menu</h1>
                            <RiCloseLine size={30} className='hover:cursor-pointer font-bold text-[#041e42]' onClick={toggleNavbar} />
                        </div>
                        <div className='flex flex-col gap-6 py-5 text-4xl font-bold'>
                            <Link to="/collections/best-seller">
                                <h1>Best Seller</h1> </Link>
                            <Link to="/collections/beauty">
                                <h1>Beauty</h1> </Link>
                            <Link to="/collections/hamper">
                                <h1>Hamper</h1> </Link>
                            <h1>About</h1>
                            <h1>Contact us</h1>
                        </div>
                    </nav> : ""}
        </>

    )
}

export default Navbar
