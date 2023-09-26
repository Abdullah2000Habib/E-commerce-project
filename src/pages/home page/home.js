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
import Logo1 from "../../assets/images/navbar/log1.svg"
import Logo2 from "../../assets/images/navbar/log2.svg"

import Dot from "../../assets/images/addition/Dot.svg"

function HomePage() {
    const [show, setShow] = useState(true)
    return (
        <div>
            {show && <Offer handelShow={() => setShow((prev) => !prev)} />}
            <Navbar/>
            <Hero />
            <Categories />
            <Collection />
            <Additions img={Dot} />
            <Brands />
            <Trending />
            <Join />
            <Instagram />
            <Footer />
        </div>
    )
}

export default HomePage