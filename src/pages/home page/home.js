/* eslint-disable no-unused-vars */

import Footer from '../../components/footer section/footer';
import Hero from '../../components/hero section/hero';
import Instagram from '../../components/instagram section/instagram';
import Join from '../../components/join section/join';
import Navbar from "../../components/Navbar/Navbar";
import Categories from "../../components/Categories";
import Collection from "../../components/Collection";
import Additions from "../../components/Additions";
import Brands from "../../components/Brands/Brands";
import Trending from "../../components/Trending/Trending";
import { useState } from "react";
import Offer from "../../components/offer section/Offer";
import img1 from "../../assets/images/log01.svg"
import img2 from "../../assets/images/log02.svg"
import img from "../../assets/images/Dot.svg"
function HomePage() {
    const [show, setShow] = useState(true)
    return (
        <div>
            {show && <Offer handelShow={() => setShow((prev) => !prev)} />}
            <Navbar img1={img1} img2={img2} />
            <Hero />
            <Categories />
            <Collection />
            <Additions img={img} />
            <Brands />
            <Trending />
            <Join />
            <Instagram />
            <Footer />
        </div>
    )
}

export default HomePage