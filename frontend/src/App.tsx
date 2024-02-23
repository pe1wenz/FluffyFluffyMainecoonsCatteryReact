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
import {LittersListingData} from "./data/LitterListingData";


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
              <Route path="/kittens" element={<Kittens />}>
                  {/* New nested route for /kittens/litter-f */}
                  {/*<Route path="litter-f" element={<LitterF />} />*/}
              </Route>
              <Route path="/our-cats" element={<OurCats />} />
              <Route path="/owning" element={<Owning />} />
              <Route path="/about-us" element={<AboutUs />} />
          </Routes>
          <Footer />
      </>
  );
}

export default App;
