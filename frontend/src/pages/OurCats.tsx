import Hero from "../components/Hero";
import {OurCatsSliderData} from "../data/SliderData";
import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
    height: 100vh;
`;
const OurCats = () => {
    return (
    <HeroContainer>
        <Hero slides={OurCatsSliderData}/>
    </HeroContainer>
    );
};

export default OurCats;
