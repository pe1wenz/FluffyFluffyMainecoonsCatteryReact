import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import {defaultPhotos} from "../data/LitterListingData";

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
        image: string;
        title: string;
        comment: string;
        label: string;
        path: string;
        alt: string;
    }[]
}

const LitterSection = styled.section`
    width: 100%;
    height: 100%;
    padding: 1rem;
`;

const Heading = styled.div`
    font-size: 1.5rem;
    padding: 2rem 1rem;
    //margin-bottom: 40px;
    margin-top: 25px;
    margin-left: 15px;

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
    background-color: #f0f0f0;
    width: 100%;
    height: 100vh;
    margin: 0 0 2rem;
    @media screen and (max-width: 768px) {
        height: 50vh;
    }
`;

const KittenInfoWrapper = styled.div`
    margin-bottom: 1rem;
    text-align: center;
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


`;

const KittenDetailInfo = styled.div`
    flex-direction: column;
    margin: 0.5rem;
    text-align: left;
`;

// const YoutubeLinkIcon = styled.div`
//     width: 50%;
//
//     @media screen and (max-width: 768px) {
//         margin-bottom: 2rem;
//         width: 100%;
//     }
// `;
//
// const Youtube = styled(FaYoutube)`
//     font-size: clamp(1rem, 6vw, 2rem);
//     color: #cd853f;
// `;


const Litter: React.FC<LitterProps> =({kittensData}) => {
    console.log(kittensData);
    return (
        <LitterSection>

            <Heading>
                <h1>Litter {kittensData[0].litterName}</h1>
            </Heading>
               <KittenWrapper>
                   {kittensData.map((kitten, index) =>(
                       <PhotoSetWrapper>
                           <KittenInfoWrapper>
                                   <h2>{kitten.name}</h2>
                               <KittenDetailInfo>
                                   <h3>{kitten.color}</h3>
                                   <h3>{kitten.birthday}</h3>
                                   <h3>{kitten.availability}</h3>
                               </KittenDetailInfo>
                           </KittenInfoWrapper>
                           <CustomHeroContainer>
                               {/*<Gallery photos={defaultPhotos} />*/}
                               <Hero slides={kitten.images}/>
                               {/*<YoutubeLinkIcon>*/}
                               {/*    <a href={kitten.path} rel="noopener noreferrer" target="_blank">*/}
                               {/*        <Youtube/>*/}
                               {/*    </a>*/}
                               {/*</YoutubeLinkIcon>*/}
                           </CustomHeroContainer>
                       </PhotoSetWrapper>
                   ))}
               </KittenWrapper>
        </LitterSection>
    );
};

export default Litter;
