import { useParams } from 'react-router-dom';
import Details from './Details';
import Navbar from './Navbar';
import Footer from './Footer';

const Product = () => {

    const products = [
        { id: 101, name: "Protect and detangle", price: "$23.00", img: "https://www.birchbox.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0574%2F8460%2F7625%2Fproducts%2Fu_awards-season_winners_beauty-protector_protect-and-detangle_pd_1500x1700_7bb45cfe-4007-49ee-b19f-c4142eb9b0c4.png%3Fv%3D1656467895&w=1920&q=75" },

        { id: 102, name: "Greek Yoghurt Foaming Cream Cleanser", price: "$28.00", img: "https://www.birchbox.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0574%2F8460%2F7625%2Fproducts%2FKorres_Foaming-Face-Cleanser_PD_1500x1700_84a977af-41bc-475f-9332-42f9c3c1e0de.png%3Fv%3D1660919810&w=1920&q=75" },

        { id: 103, name: "All Inclusive Shampoo and Body Wash", price: "$28.00", img: "https://www.birchbox.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0574%2F8460%2F7625%2Fproducts%2F10504-001_all_inclusive_shampoo_and_body_wash_1500x1700_3219191f-51f2-40cd-9d14-5976203dd2a1.png%3Fv%3D1656421790&w=1920&q=75" },

        { id: 104, name: "Gimme Brow+ Tinted Volumizing Eyebrow Gel", price: "$24.00", img: "https://www.birchbox.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0574%2F8460%2F7625%2Fproducts%2Fbenefit_gimme-brow_pd-open_1500x1700_6.png%3Fv%3D1656605326&w=1920&q=75" }

    ]

    const { id } = useParams();
    let PData;

    products.map((e) => {
        if (e.id == id) {
            PData = {
                id: e.id,
                name: e.name,
                price: e.price,
                img: e.img
            }
            console.log(e.id);
        }
    })



    return (
        <div>
            <Navbar />
            <Details data={PData} />
            <Footer />
        </div>
    )
}

export default Product
