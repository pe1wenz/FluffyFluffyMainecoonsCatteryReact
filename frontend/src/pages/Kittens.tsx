import React from "react";
import styled from "styled-components";
import {LitterFListingData, LitterFCoverListingData, LitterECoverListingData} from "../data/LitterListingData";
import {IoMdArrowRoundForward} from "react-icons/io";
import {Button} from "../components/Button";
import Litter from "./Litter";


const KittensSection = styled.section`
    width: 100%;
    height: 100%;
    padding: 5rem;
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
            {/*<Heading>*/}
            {/*    <h1>Our Litters</h1>*/}
            {/*</Heading>*/}
            <LitterWrapper>
                <Litter kittensData={LitterFCoverListingData} />
                <Litter kittensData={LitterECoverListingData} />
            </LitterWrapper>
            {/*<KittensWrapper>*/}
            {/*    {litters.map((litter, index) =>(*/}
            {/*        <LitterWrap>*/}
            {/*            <Image src={litter.litterCoverImage} alt="litter cover image" />*/}
            {/*            <h2>{litter.litterName}</h2>*/}
            {/*            <h3>{litter.litterBirthday}</h3>*/}
            {/*            <CustomButton to={`/kittens/${litter.litterLink}`} target="_blank" rel="noopener noreferrer">*/}
            {/*                <p>view details</p>*/}
            {/*                <Arrow />*/}
            {/*            </CustomButton>*/}
            {/*        </LitterWrap>*/}
            {/*    ))}*/}
            {/*</KittensWrapper>*/}
        </KittensSection>
);
};

export default Kittens;
