import React from "react";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

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
    padding: 2rem 1rem 0;
    //margin-bottom: 40px;
    margin-top: 25px;
    margin-left: 15px;
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
    }
`;

const KittenWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between; /* Adjust as needed */

    padding: 1rem 0;
    
    

    @media screen and (max-width: 768px){
        flex-direction: column;
    } 
`;


const PhotoSetWrapper = styled.div`
    width: 100%;
    margin: 3rem 0 0;
`;

const CustomHeroContainer = styled.div`
    width: 100%;
    height: 50%;
    padding: 0 0 2rem;

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


const Litter: React.FC<LitterProps> =({kittensData}) => {
    return (
        <LitterSection>

            <Heading>
                <h2>Litter</h2> <h1>{kittensData[0].litterName}</h1>
            </Heading>
               <KittenWrapper>
                   {kittensData.map((kitten, index) =>(
                       <PhotoSetWrapper key={index}>
                           <KittenInfoWrapper>
                                   <h2>{kitten.name}</h2>
                               <KittenDetailInfo>
                                   <h3>{kitten.gender}</h3>
                                   <h3>{kitten.color}</h3>
                                   <h3>{kitten.birthday}</h3>
                                   <h3>{kitten.availability}</h3>
                               </KittenDetailInfo>
                           </KittenInfoWrapper>
                           <CustomHeroContainer>
                               <ImageGallery
                                   items={kitten.images}
                                   showBullets={true}
                                   showPlayButton={false}
                                   showFullscreenButton={true}
                                   showNav={false}
                                   autoPlay={true}
                                   slideInterval={4000}
                                   slideDuration={900}
                                   slideOnThumbnailOver={true}
                               />
                           </CustomHeroContainer>
                       </PhotoSetWrapper>
                   ))}
               </KittenWrapper>

        </LitterSection>
    );
};

export default Litter;
