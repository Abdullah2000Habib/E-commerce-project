/* eslint-disable no-unused-vars */

import Footer from '../../components/footer section/footer';
import Hero from '../../components/hero section/hero';
import Instagram from '../../components/instagram section/instagram';
import Join from '../../components/join section/join';
import { useState } from "react";

function HomePage() {
    return (
        <div>
            <Hero />
            <Join />
            <Instagram />
            <Footer/>
        </div>
    )
}

export default HomePage