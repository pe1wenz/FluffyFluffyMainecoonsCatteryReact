import React from "react";
import Hero from "../components/Hero";
import {SliderData} from "../data/SliderData";
import InfoSection from "../components/InfoSection";
import {InfoData, KittensFeatures} from "../data/InfoData";
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
                <Features
                    heading={KittensFeatures.heading}
                    paragraph1={KittensFeatures.paragraph1}
                    paragraph2={KittensFeatures.paragraph2}
                    button1Text={KittensFeatures.button1Text}
                    button1Link={KittensFeatures.button1Link}
                    button2Text={KittensFeatures.button2Text}
                    button2Link={KittensFeatures.button2Link}
                    imageSrc={KittensFeatures.imageSrc}
                />
            </ScrollUpFadeIn>
        </>
    )
}

export default Home