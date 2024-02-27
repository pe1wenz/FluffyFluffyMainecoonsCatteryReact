import React from "react";
import styled, {css}  from "styled-components";
import {Link} from "react-router-dom";
import {Button} from "./Button";
import {IoMdArrowRoundForward} from "react-icons/io";
import {FaFacebookF, FaYoutube} from "react-icons/fa";
import cfaIcon from "../assets/images/icons/cfa.png";

const facebookPageUrl = 'https://www.facebook.com/FluffyFluffyCattery'; // Replace with your Facebook page URL
const youtubePageUrl = 'https://www.youtube.com/@FluffyFluffyMaineCoonsCattery'; // Replace with your Facebook page URL
const cfaPageUrl = 'https://find-a-breeder.cfa.org/listing/fluffyfluffy/';


const Section = styled.section`
    background: #000d1a;
    color: white;
    width: 100%;
    min-height: 600px;
    padding: 3rem calc((100vw - 1300px) /2);
`;
const Container = styled.div`
    height: 100%;
    width: 100%;
    padding: 2rem;
`;
const FooterTop = styled.div`
    display: flex;
    flex-direction: row;
    padding: 4rem 0;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;
const Quote = styled.div`
    flex: 1;
    padding: 2rem 0;
    
    h3{
        font-size: clamp(2rem, 8vw, 5rem);
    }
`;
const FooterInfo = styled.div`
    padding: 2rem;
    line-height: 3;
    display: flex;
    flex-direction: column;
    
    a {
        transition: 0.3s;
        color: white;
        text-decoration: none;
        &:hover{
            transform: translateY(-2px);
        }
    }

    @media screen and (max-width: 768px) {
        padding: 1rem 0;
    }
`;
const FooterBottom = styled.div`
    display: flex;
    padding: 2rem 0;

    @media screen and (max-width: 768px) {
    flex-direction: column;
    }
`;


const SocialIcons = styled.div`
    display: flex;
    width: 50%;
    

    @media screen and (max-width: 768px) {
        margin-bottom: 2rem;
        width: 100%;
        flex-direction: column;
    }
    
    
`;

const Icons = css`
    font-size: clamp(1rem, 6vw, 2rem);
    margin-right: 1.5rem;
    color: #cd853f;

    transition: 0.3s;
    &:hover{
        transform: translateY(-2px);
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 1.5rem;
    }
`;

const Youtube = styled(FaYoutube)`
    ${Icons}
`;
const Facebook = styled(FaFacebookF)`
    ${Icons}
`;

const Image = styled.img`
    ${Icons};
    width: 3rem;
    height: 3rem;
`;

const Contact = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 100%;
        justify-content: flex-start;

    }
`;

const CopyRight = styled.div`
    display: flex;
    align-items: center;
    color: white;
    justify-content: center;
    width: 100%;
`;

const Footer = () =>{
    return (
        <Section>
            <Container>
                <FooterTop>
                    <Quote>
                        <h3>Welcome to Fluffy Fluffy</h3>
                    </Quote>
                    <FooterInfo>
                        <h4> Contact Us</h4>
                        <a href="tel:+5405536185" target="_blank">(540) 553-6185</a>
                        <a href="mailto:fluffyfluffycattery@gmail.com" target="_blank">fluffyfluffycattery@gmail.com</a>
                        <Link to="/about-us">FAQ</Link>
                    </FooterInfo>
                    <FooterInfo>
                        <h4> Location</h4>
                        <a href="https://www.google.com/maps/place/Christiansburg,+VA,+USA" target="_blank">Christiansburg,
                            Virginia, USA</a>
                    </FooterInfo>
                </FooterTop>
                <FooterBottom>
                    <SocialIcons>
                        <a href={youtubePageUrl} rel="noopener noreferrer" target="_blank">
                            <Youtube/>
                        </a>
                        <a href={facebookPageUrl} rel="noopener noreferrer" target="_blank">
                            <Facebook/>
                        </a>
                        <a href={cfaPageUrl} rel="noopener noreferrer" target="_blank">
                            <Image src={cfaIcon}/>
                        </a>
                    </SocialIcons>
                    <Contact>
                        <Button to='/homes'>
                            Let's Chat <IoMdArrowRoundForward />
                        </Button>
                    </Contact>
                </FooterBottom>
                <CopyRight>&copy; 2024 by Fluffy Fluffy. All rights reserved.</CopyRight>
            </Container>
        </Section>
    );
}

export default Footer;