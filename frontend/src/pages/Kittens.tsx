import React from "react";
import styled from "styled-components";
import {LitterFListingData, LitterFCoverListingData, LitterECoverListingData} from "../data/LitterListingData";
import {IoMdArrowRoundForward} from "react-icons/io";
import {Button} from "../components/Button";
import Litter from "./Litter";
import Listings from "../components/Listings";
import Features from "../components/Features";
import {KittensFeatures} from "../data/InfoData";


const KittensSection = styled.section`
    width: 100%;
    height: 100%;
    padding: 0rem 0 5rem;
    /* Your styles here */
`;

const Heading = styled.div`
    font-size: 1.5rem;
    padding: 2rem 1rem;
    margin-bottom: 40px;

    @media screen and (max-width: 768px) {
        text-align: start;
    }
    /* Your styles here */
`;

const KittensWrapper = styled.div`
    display: flex;
    //flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between; /* Adjust as needed */

    padding: 1rem 0;
    
    @media screen and (max-width: 768px){
        flex-direction: column;
    } 
    /* Your styles here */
`;

const LitterWrap = styled.div`
    /* Your styles here */
    padding: 0 1rem;
    min-height: 550px;
    height: 100%;

    h2 {
        margin-bottom: 1rem;
        font-weight: 400;
    }
    
    h3 {
        margin-bottom: 1rem;
        font-weight: 500;
    }

    &:nth-child(even) {
        margin-top: 120px;
        @media screen and (max-width: 768px) {
            margin-top: 0;
        }
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 1rem;
    }
`;

const Image = styled.img`
    /* Your styles here */
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 400px;
    object-fit: cover;
    margin-bottom: 1rem;
`;

const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 10px;
`;

const CustomButton = styled(Button)`
margin-bottom: 1rem`;

const litters = LitterFCoverListingData

const LitterWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem 2rem;
    justify-content: space-between;

    > div {
        flex: 0 0 35%; /* Set the maximum width to 35% */
        margin-bottom: 20px; /* Adjust as needed */

        @media screen and (max-width: 768px) {
            flex: 0 0 100%; /* On smaller screens, make it full width */
        }
    }
`;

const Kittens =() => {
    return (
        <KittensSection>
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
            <Listings/>
        </KittensSection>
);
};

export default Kittens;
