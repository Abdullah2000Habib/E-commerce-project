import HomePage from "./pages/home page/home";
import ProductPage from "./pages/product page/product";


import { useState } from "react";

import Additions from "./components/Additions";
import Brands from "./components/Brands/Brands";
import Categories from "./components/Categories";
import Collection from "./components/Collection";
import Navbar from "./components/Navbar/Navbar";
import Trending from "./components/Trending/Trending";
import Offer from "./components/offer section/Offer";
function App() {

  return (
    <div className="App">
      <HomePage />
      {/* <ProductPage/> */}
        
    </div>
  );
}

export default App;
