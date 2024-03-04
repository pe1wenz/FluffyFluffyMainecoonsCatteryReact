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
import {LitterFListingData} from "./data/LitterListings/LitterFListingData";
import Litter from "./pages/Litter";
import ScrollUpFadeIn from "./components/ScrollUpFadeIn";
import styled from "styled-components";
import {IoArrowUp} from "react-icons/io5";
import {LitterEListingData} from "./data/LitterListings/LitterEListingData";
import {LitterDListingData} from "./data/LitterListings/LitterDListingData";
import {LitterCListingData} from "./data/LitterListings/LitterCListingData";
import {LitterBListingData} from "./data/LitterListings/LitterBListingData";
import {LitterAListingData} from "./data/LitterListings/LitterAListingData";

const UpArrow = styled(IoArrowUp)`
    width: 40px;
    height: 40px;
    color: white;
    cursor: pointer;
    background: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;
    border: solid 1px white;

    position: fixed;
    bottom: 20px;
    right: 20px;

    &:hover {
        background: #cd853f;
        transform: scale(1.5) translateY(-2px);
    }
`;

function App() {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)

    const toggleDropDown = () =>{
        setIsDropDownOpen(!isDropDownOpen)
    }

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


  return (
      <>
          <GlobalStyles />
          <NavbarComponent toggleDropDown={toggleDropDown}/>
          <Dropdown isDropDownOpen={isDropDownOpen} toggleDropDown={toggleDropDown}/>
          <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/kittens" element={<Kittens />}/>
              <Route path="/our-cats" element={<OurCats />} />
              <Route path="/owning" element={<Owning />} />
              <Route path="/about-us" element={<AboutUs />} />
          </Routes>
          <Routes>
              <Route path="/kittens/litter-f" element={<Litter kittensData={LitterFListingData} />} />
              <Route path="/kittens/litter-e" element={<Litter kittensData={LitterEListingData} />} />
              <Route path="/kittens/litter-d" element={<Litter kittensData={LitterDListingData} />} />
              <Route path="/kittens/litter-c" element={<Litter kittensData={LitterCListingData} />} />
              <Route path="/kittens/litter-b" element={<Litter kittensData={LitterBListingData} />} />
              <Route path="/kittens/litter-a" element={<Litter kittensData={LitterAListingData} />} />
          </Routes>
          <Footer />
          <ScrollUpFadeIn onClick={handleScrollToTop} threshold={200}>
              <UpArrow />
          </ScrollUpFadeIn>
      </>
  );
}

export default App;
