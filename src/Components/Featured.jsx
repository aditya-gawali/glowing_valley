import { RiLinksLine } from '@remixicon/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Featured = () => {

    const products = [
        { id: 101, name: "Protect and detangle", price: "$23.00", img: "https://www.birchbox.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0574%2F8460%2F7625%2Fproducts%2Fu_awards-season_winners_beauty-protector_protect-and-detangle_pd_1500x1700_7bb45cfe-4007-49ee-b19f-c4142eb9b0c4.png%3Fv%3D1656467895&w=1920&q=75" },

        { id: 102, name: "Greek Yoghurt Foaming Cream Cleanser", price: "$28.00", img: "https://www.birchbox.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0574%2F8460%2F7625%2Fproducts%2FKorres_Foaming-Face-Cleanser_PD_1500x1700_84a977af-41bc-475f-9332-42f9c3c1e0de.png%3Fv%3D1660919810&w=1920&q=75" },

        { id: 103, name: "All Inclusive Shampoo and Body Wash", price: "$28.00", img: "https://www.birchbox.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0574%2F8460%2F7625%2Fproducts%2F10504-001_all_inclusive_shampoo_and_body_wash_1500x1700_3219191f-51f2-40cd-9d14-5976203dd2a1.png%3Fv%3D1656421790&w=1920&q=75" },

        { id: 104, name: "Gimme Brow+ Tinted Volumizing Eyebrow Gel", price: "$24.00", img: "https://www.birchbox.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0574%2F8460%2F7625%2Fproducts%2Fbenefit_gimme-brow_pd-open_1500x1700_6.png%3Fv%3D1656605326&w=1920&q=75" }

    ]

    return (
        <div className="w-full bg-gray-100" id='bestSeller'>
            <h1 className="text-3xl lg:text-4xl font-serif  text-[#041e42] px-10 lg:px-20 py-10">Featured Product</h1>

            <div className="flex flex-row px-10 divide-x md:px-20 pb-10 flex-wrap">

                {
                    products.map((product) => {
                        return (
                            <Link to={`/productDetails/${product.id}`} key={product.id} className="relative w-full sm:w-1/2 md:w-1/4 sm:1/4 bg-white hover:shadow-xl flex flex-col gap-4 pb-5 hover:cursor-pointer">
                                {/* <div  > */}
                                <div className="overflow-hidden">
                                    <img src={product.img} className='object-contain' />
                                </div>

                                <h1 className="px-10 capitalize py-10 ">{product.name}</h1>
                                <h3 className="px-10 font-bold text-xl absolute bottom-4">{product.price}</h3>
                                {/* </div> */}
                            </Link>
                        )
                    })

                }

            </div>
            
        </div>
    )
}

export default Featured
