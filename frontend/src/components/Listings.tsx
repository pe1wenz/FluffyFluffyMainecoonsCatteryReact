import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {IoMdArrowRoundForward} from "react-icons/io";
import LitterACover from '../assets/images/litter-images/litter-a/litter_a_cover_img.jpeg'
import LitterBCover from '../assets/images/litter-images/litter-b/litter_b_cover_img.jpg'
import LitterCCover from '../assets/images/litter-images/litter-c/litter_c_cover_img.jpeg'
import LitterDCover from '../assets/images/litter-images/litter-d/litter_d_cover_img.jpeg'
import LitterECover from '../assets/images/litter-images/litter-e/litter_e_cover_img.jpeg'
import LitterFCover from '../assets/images/litter-images/litter-f/litter_f_cover_img.jpeg'
import ScrollUpFadeIn from "./ScrollUpFadeIn";

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
    width: 100%;

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

const ImageLink = styled(Link)`
    
`;


const LitterInfo: React.FC<LitterInfoProps>  = ({ image, alt, litterName, to }) => {
    return (
            <InfoWrap>
                 <ScrollUpFadeIn >
                     {/*<InfoContent>*/}
                         <ImageLink to={to} rel="noopener noreferrer" target="_blank">
                            <Image src={image} alt={alt} />
                         </ImageLink>
                        <h2>{litterName}</h2>
                        <InfoLink to={to} rel="noopener noreferrer" target="_blank">
                            <p>View details</p>
                            <Arrow />
                        </InfoLink>
                     {/*</InfoContent>*/}
                 </ScrollUpFadeIn>
            </InfoWrap>
    );
};

const InfoContent = styled.div`
    border: solid 1px #000d1a;
`;

const InfoWrap = styled.div`
    flex: 0 0 calc(50% - 1rem);
    padding: 1rem 1rem;
    min-height: 350px;
    height: 100%;
    margin-bottom: 1rem;


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
        p{
            border-bottom: solid 1px #000d1a;
        }
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 400px;
    object-fit: scale-down;
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
                        <LitterInfo image={LitterFCover} alt="litter f kitten cover image" litterName="Litter F" to="/kittens/litter-f" />
                        <LitterInfo image={LitterECover} alt="litter e kitten cover image" litterName="Litter E" to="/kittens/litter-e" />
                        <LitterInfo image={LitterDCover} alt="litter d kitten cover image" litterName="Litter D" to="/kittens/litter-d" />
                        <LitterInfo image={LitterCCover} alt="litter c kitten cover image" litterName="Litter C" to="/kittens/litter-c" />
                        <LitterInfo image={LitterBCover} alt="litter b kitten cover image" litterName="Litter B" to="/kittens/litter-b" />
                        <LitterInfo image={LitterACover} alt="litter a kitten cover image" litterName="Litter A" to="/kittens/litter-a" />
                </InfoRow>
            </Container>
        </Section>
    );
};

export default Listings