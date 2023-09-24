import { useState } from "react";
import img1 from "../src/assets/images/log01.svg";
import img2 from "../src/assets/images/log02.svg";
import img from "./assets/images/Dot.svg";
import Additions from "./components/Additions";
import Brands from "./components/Brands/Brands";
import Categories from "./components/Categories";
import Collection from "./components/Collection";
import Navbar from "./components/Navbar/Navbar";
import Trending from "./components/Trending/Trending";
import Offer from "./components/offer section/Offer";
function App() {
    const [show, setShow] = useState(true)
  return (
    <div className="App">
        {show && <Offer handelShow={() => setShow((prev) => !prev)} />}
        <Navbar img1={img1} img2={img2}/>
        <Categories/>
        <Collection/>
        <Additions img={img}/>
        <Brands/>
        <Trending/>
    </div>
  );
}

export default App;
