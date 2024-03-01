import React from "react";
import Hero from "../components/Hero";
import {SliderData} from "../data/SliderData";
import InfoSection from "../components/InfoSection";
import {InfoData} from "../data/InfoData";
import Listings from "../components/Listings";
import Features from "../components/Features";
import styled from "styled-components";
import ScrollUpFadeIn from "../components/ScrollUpFadeIn";

const HeroContainer = styled.div`
    height: 100vh;
`;

const Home = () =>{
    return(
        <>

            <HeroContainer>
                <Hero slides={SliderData}/>
            </HeroContainer>
            <ScrollUpFadeIn  >
                <InfoSection {...InfoData}/>
            </ScrollUpFadeIn>
            <ScrollUpFadeIn>
                <Listings />
            </ScrollUpFadeIn>
            <ScrollUpFadeIn >
                <Features />
            </ScrollUpFadeIn>
        </>
    )
}

export default Home