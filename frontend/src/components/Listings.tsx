import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {IoMdArrowRoundForward} from "react-icons/io";
import ImageOne from '../assets/images/slider_imgs/slider_img1.jpeg'
import ImageTwo from '../assets/images/slider_imgs/slider_img2.jpeg'

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 10rem calc((100vw - 1300px) / 2);
`;

const Container = styled.div`

`;
const Heading = styled.div`
    font-size: 1.5rem;
    padding: 2rem 1rem;
    margin-bottom: 40px;

    @media screen and (max-width: 768px) {
        text-align: start;
    }
`;

const InfoRow = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem 0;
    
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;
const InfoWrap = styled.div`
    padding: 0 1rem;
    min-height: 550px;
    height: 100%;
    
    h2 {
        margin-bottom: 1rem;
        font-weight: 400;
    }

    &:nth-child(2) {
        margin-top: 120px;
        @media screen and (max-width: 768px) {
            margin-top: 0;
        }
    }
    
    @media screen and (max-width: 768px) {
        margin-bottom: 1rem;
    }
`;

const InfoLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000d1a;
    width: 140px;
    transition: 0.3s;
    
    &:hover{
        transform: translateY(-2px);
    }
`;

const Image = styled.img`
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

const Listings = () => {
    return (
        <Section>
            <Container>
                <Heading>
                    <h1> new heading</h1>
                </Heading>
                <InfoRow>
                    <InfoWrap>
                        <Image src={ImageOne} alt="home"/>
                        <h2> info info inf info info</h2>
                        <InfoLink to='/homes'>
                            <p> view details</p>
                            <Arrow/>
                        </InfoLink>
                    </InfoWrap>
                    <InfoWrap>
                        <Image src={ImageTwo} alt="home"/>
                        <h2> info2info2info2</h2>
                        <InfoLink to='/homes'>
                            <p> view details 2</p>
                            <Arrow/>
                        </InfoLink>
                    </InfoWrap>
                </InfoRow>
            </Container>
        </Section>
    );
};

export default Listings