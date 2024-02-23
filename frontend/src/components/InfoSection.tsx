import React from "react";
import styled from "styled-components";
import {Button} from "./Button";
import {IoMdArrowRoundForward} from "react-icons/io";

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0;
`;

const Container = styled.div`
    padding: 3rem calc((100vw - 1300px) / 2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;

    }
`;

const ColumnLeft = styled.div<ColumnLeftRightProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({reverse}) =>(reverse ? '2' : '1')};
    
    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }
    
    p{
        margin-bottom: 2rem;
    }
`;

const ColumnRight = styled.div<ColumnLeftRightProps>`
    padding: 1rem 2rem;
    order: ${({reverse}) =>(reverse ? '1' : '2')};
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 768px) {
        order: ${({reverse}) =>(reverse ? '2' : '1')};
    }
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media screen and (max-width: 768px) {
            width: 90%;
            height: 90%;
        }
    }
`;

const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 0.5rem;
`;

interface InfoSectionProps{
    heading: string,
    paragraphOne: string,
    paragraphTwo: string,
    buttonLabel: string,
    reverse: boolean,
    image: string
}

interface ColumnLeftRightProps {
    reverse: boolean;
}
const InfoSection = ({heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image} : InfoSectionProps) =>{
    return(
        <Section>
            <Container>
                <ColumnLeft reverse={!reverse}>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button to={"/our-cats"} primary={true}>
                        {buttonLabel}
                        <Arrow/>
                    </Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <img src={image} alt="home" />
                </ColumnRight>
            </Container>
        </Section>
    );
};

export default InfoSection