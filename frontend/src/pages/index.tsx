import React from "react";
import Hero from "../components/Hero";
import {SliderData} from "../data/SliderData";
import InfoSection from "../components/InfoSection";
import {InfoData} from "../data/InfoData";
import Listings from "../components/Listings";
import Features from "../components/Features";

const Home = () =>{
    return(
        <>
            <Hero slides={SliderData}/>
            <InfoSection {...InfoData}/>
            <Listings />
            <Features />
        </>
    )
}

export default Home