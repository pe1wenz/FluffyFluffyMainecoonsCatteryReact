import React, {useState} from 'react';
import GlobalStyles from "./globalStyles";
import NavbarComponent from "./components/NavbarComponent";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./pages";
import Kittens from "./pages/Kittens";
import OurCats from "./pages/OurCats";
import Owning from "./pages/Owning";
import AboutUs from "./pages/AboutUs";
import {LitterFListingData} from "./data/LitterListingData";
import Litter from "./pages/Litter";


function App() {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)

    const toggleDropDown = () =>{
        setIsDropDownOpen(!isDropDownOpen)
    }
  return (
      <>
          <GlobalStyles />
          <NavbarComponent toggleDropDown={toggleDropDown}/>
          <Dropdown isDropDownOpen={isDropDownOpen} toggleDropDown={toggleDropDown}/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/kittens" element={<Kittens />}/>
              <Route path="/our-cats" element={<OurCats />} />
              <Route path="/owning" element={<Owning />} />
              <Route path="/about-us" element={<AboutUs />} />
          </Routes>
          <Routes>
              <Route path="/kittens/litter-f" element={<Litter kittensData={LitterFListingData} />} />
          </Routes>
          <Footer />
      </>
  );
}

export default App;
