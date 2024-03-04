import React, {useState} from "react";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import kittens from "./Kittens";
import {Button} from "../components/Button";
import {MdOutlineExpandMore} from "react-icons/md";
import {BsChevronExpand} from "react-icons/bs";
import {FaList} from "react-icons/fa6";
import {BiSolidUpArrow} from "react-icons/bi";

interface LitterProps {
    kittensData: KittenData[];
}

interface KittenData{
    name: string,
    gender:string,
    color:string,
    birthday:string,
    availability: string,
    path:string,
    litterName:string,
    images: {
        original:string;
        thumbnail:string;
        comment:string;
    }[]
}

const LitterSection = styled.section`
    width: 100%;
    height: 100%;
    padding: 1rem;
`;

const Heading = styled.div`
    font-size: 1.5rem;
    display: flex;
    align-items: center;

    h1 {
        font-family: "Space Grotesk", sans-serif;
        display: inline-block;
        color: black;
        line-height: 1.2;
        font-weight: 500;
        font-size: 80px;
    }
    h2{
        font-family: "Space Grotesk", sans-serif;
        text-transform: uppercase;
        color: black;
        font-size: 24px;
        border-bottom: solid 7px #CD853F;
        margin-right: 1rem;
    }



    @media screen and (max-width: 768px) {
        text-align: start;
        
        &:hover {
            cursor: pointer;
        }
    }
`;

const KittenWrapper = styled.div`
    display: flex;
    //flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between; /* Adjust as needed */

    padding: 1rem 0;
    
    

    @media screen and (max-width: 768px){
        flex-direction: column;
    } 
`;


const PhotoSetWrapper = styled.div`
    width: 80%;
    margin: 3rem 0 0;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

const CustomHeroContainer = styled.div`
    width: 100%;
    height: 50%;
    padding: 0 4rem 2rem;
    
    @media screen and (max-width: 768px){
        padding: 0;
        height: 100%;
    }

    .image-gallery {
        width: 100% !important; // This ensures the width is set to 100%
    }

    .image-gallery-bullets .image-gallery-bullet {
        &.active {
            background: #CD853F;
        }
    }
`;

const KittenInfoWrapper = styled.div`
    //margin-bottom: 1rem;
    text-align: start;
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    h2{
        font-family: "Space Grotesk", sans-serif;
        color: black;
        line-height: 1.2;
        font-weight: 500;
        font-size: 64px;
        margin-bottom: 40px;
        background-color: #CD853F;
        
    }
    
    h3{
        font-family: "Space Grotesk", sans-serif;
        text-transform: uppercase;
        color: black;
        font-size: 16px;

    }
    
    @media screen and (max-width: 768px) {
        justify-content: start;
        margin-left: 15px;
        padding-left: 16px;
    }
`;

const KittenDetailInfo = styled.div`
    flex-direction: column;
    margin: 0 0.5rem 0.5rem 0.5rem;
    text-align: left;
    justify-content: center;
`;

const ExpandButton = styled.div`
    justify-content: center;
    align-items: center;

    font-family: "Space Grotesk", sans-serif;
    color: black;
    line-height: 1.2;
    font-weight: 500;
    font-size: 32px;
`;

const MinimizeButton = styled.div`
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: start;
    align-items: start;

    font-family: "Space Grotesk", sans-serif;
    color: black;
    line-height: 1.2;
    font-weight: 500;
    font-size: 32px;
    margin-bottom: 20px;
    border-bottom: solid 5px transparent;
    transition-duration: 0.3s;

    &:hover {
        border-bottom: solid 5px rgba(205, 133, 63, 0.57);
        transform: translateY(-2px);
        cursor: pointer;
    }
`;

const KittenSelectorsNav = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: start;
    align-content: space-between;
    margin-left: 15px;
    padding-left: 16px;
    margin-top: 8rem;
    width: 20%;
    
    @media screen and (max-width: 768px){
        position: relative;
        height: fit-content;
        width: 100%;
        margin-top: 1rem;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        position: relative;

        &.expanded {
            height: auto;
        }
    }
`;

const KittenSelectorWrapper = styled.div`
    display: inline-flex;

    h2 {
        font-family: "Space Grotesk", sans-serif;
        color: black;
        line-height: 1.2;
        font-weight: 500;
        font-size: 32px;
        margin-bottom: 20px;
        border-bottom: solid 5px transparent;
        transition-duration: 0.3s;

        &:hover {
            border-bottom: solid 5px rgba(205, 133, 63, 0.57);
            transform: translateY(-2px);
            cursor: pointer;
        }

    }

    &.active {
        h2 {
            border-bottom: solid 5px #CD853F;
        }
    }
`;




const Litter: React.FC<LitterProps> =({kittensData}) => {
    const [selectedKittenIndex, setSelectedKittenIndex] = useState<number | null>(0);
    const [isNavExpanded, setIsNavExpanded] = useState(true);
    const handleKittenSelectorClick = (index: number) => {
        setSelectedKittenIndex(index);
        // If in mobile view, close the nav bar after a selection
        if (window.innerWidth <= 768) {
            setIsNavExpanded(false);
        }
    };

    const toggleNav = () => {
        if (window.innerWidth <= 768) {
            setIsNavExpanded(!isNavExpanded);
        }else {
            setIsNavExpanded(true);
        }
    };



    return (
        <LitterSection>
            <KittenWrapper>
                {selectedKittenIndex !== null && (
                    <KittenSelectorsNav className={isNavExpanded ? "expanded" : ""}>
                        <Heading onClick={toggleNav}>
                            <h2>Litter</h2> <h1>{kittensData[0].litterName}</h1>
                            {window.innerWidth <= 768 && (
                                <ExpandButton >
                                    <BsChevronExpand />
                                </ExpandButton>
                            )}
                        </Heading>
                        {isNavExpanded &&
                            (
                                <>
                                    {kittensData.map((kitten, index) => (
                                        <KittenSelectorWrapper
                                            key={index}
                                            onClick={() => {
                                                handleKittenSelectorClick(index);
                                                toggleNav();
                                            }}
                                            className={selectedKittenIndex === index ? "active" : ""}
                                        >
                                            <h2>{kitten.name}</h2>
                                        </KittenSelectorWrapper>
                                    ))}
                                    {window.innerWidth <= 768 && (
                                        <MinimizeButton onClick={toggleNav}>
                                            <BiSolidUpArrow />
                                        </MinimizeButton>
                                    )}
                                </>
                            )
                        }
                    </KittenSelectorsNav>
                )}
                {selectedKittenIndex !== null && (
                    <PhotoSetWrapper>
                        <KittenInfoWrapper>
                            <h2>{kittensData[selectedKittenIndex].name}</h2>
                            <KittenDetailInfo>
                                <h3>{kittensData[selectedKittenIndex].gender}</h3>
                                <h3>{kittensData[selectedKittenIndex].color}</h3>
                                <h3>{kittensData[selectedKittenIndex].birthday}</h3>
                                <h3>{kittensData[selectedKittenIndex].availability}</h3>
                            </KittenDetailInfo>
                        </KittenInfoWrapper>
                        <CustomHeroContainer>
                            <ImageGallery
                                items={kittensData[selectedKittenIndex].images}
                                showBullets={true}
                                showPlayButton={false}
                                showFullscreenButton={true}
                                showNav={false}
                                autoPlay={true}
                                slideInterval={4000}
                                slideDuration={900}
                                slideOnThumbnailOver={false}
                            />
                        </CustomHeroContainer>
                    </PhotoSetWrapper>
                )}
            </KittenWrapper>

        </LitterSection>
    );
};

export default Litter;
