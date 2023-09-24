/* eslint-disable no-unused-vars */

import Footer from '../../components/footer section/footer';
import Hero from '../../components/hero section/hero';
import Instagram from '../../components/instagram section/instagram';
import Join from '../../components/join section/join';
import Offer from '../../components/offer section/Offer';
import { useState } from "react";

function HomePage() {
    const [show, setShow] = useState(true)
    return (
        <div>
            {show && <Offer handelShow={() => setShow((prev) => !prev)} />}
            <Hero />
            <Join />
            <Instagram />
            <Footer/>
        </div>
    )
}

export default HomePage