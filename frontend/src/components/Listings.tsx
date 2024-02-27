import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {IoMdArrowRoundForward} from "react-icons/io";
import ImageOne from '../assets/images/slider_imgs/slider_img1.jpeg'
import ImageTwo from '../assets/images/slider_imgs/slider_img2.jpeg'

const Section = styled.section`
    width: 100%;
    height: 50%;
    padding: 3rem calc((100vw - 1300px) / 2);
`;

const Container = styled.div`

`;
const Heading = styled.div`
    font-size: 1.5rem;
    padding: 0.5rem 3rem 1rem;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
        text-align: start;
    }
`;

const InfoRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem 2rem;
    justify-content: space-between;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;
interface LitterInfoProps {
    image: string;
    alt: string;
    litterName: string;
    to: string;
}
const LitterInfo: React.FC<LitterInfoProps>  = ({ image, alt, litterName, to }) => {
    return (
        <InfoWrap>
            <Image src={image} alt={alt} />
            <h2>{litterName}</h2>
            <InfoLink to={to}>
                <p>View details</p>
                <Arrow />
            </InfoLink>
        </InfoWrap>
    );
};
const InfoWrap = styled.div`
    flex: 0 0 calc(50% - 1rem);
    padding: 1rem 1rem;
    min-height: 350px;
    height: 100%;

    h2 {
        margin-bottom: 1rem;
        font-weight: 400;
    }

    &:nth-child(2n) {
        margin-top: 0;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 1rem;
        flex: 0 0 100%;
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
                    <h1> Our Litters</h1>
                </Heading>
                <InfoRow>
                    <LitterInfo image={ImageOne} alt="kitten image" litterName="Litter F" to="/kittens/litter-f" />
                    <LitterInfo image={ImageTwo} alt="kitten image" litterName="Litter E" to="/kittens/litter-e" />
                    <LitterInfo image={ImageTwo} alt="kitten image" litterName="Litter D" to="/kittens/litter-e" />
                    <LitterInfo image={ImageTwo} alt="kitten image" litterName="Litter C" to="/kittens/litter-e" />
                    <LitterInfo image={ImageTwo} alt="kitten image" litterName="Litter B" to="/kittens/litter-e" />
                    <LitterInfo image={ImageTwo} alt="kitten image" litterName="Litter A" to="/kittens/litter-e" />
                </InfoRow>
            </Container>
        </Section>
    );
};

export default Listings