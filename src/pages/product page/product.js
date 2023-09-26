import React from 'react';
import Product from '../../components/product details/productdetails';
import Navbar from '../../components/Navbar/Navbar';
import Logo1 from "../../assets/images/navbar/log1.svg"
import Logo2 from "../../assets/images/navbar/log2.svg"




const ProductPage = () => {
    return (
        <div>
         <Navbar img1={Logo1} img2={Logo2} />
            <Product/>
        </div>
    );
}

export default ProductPage;
