import React from "react";
import { Button } from "./Button";
import styled from "styled-components";
import ImageOne from "../assets/images/slider_imgs/slider_img1.jpeg";
import { IoMdArrowRoundForward } from "react-icons/io";

const cfaPageUrl = 'https://find-a-breeder.cfa.org/listing/fluffyfluffy/';

interface FeaturesProps {
    heading: string;
    paragraph1: string;
    paragraph2: string;
    button1Text: string;
    button1Link: string;
    button2Text: string;
    button2Link: string;
    imageSrc: string;
    customButton?: {
        text: string;
        link: string;
    };
}

const Section = styled.section`
  background: rgba(0, 13, 26, 0.94);
  padding: 12rem 0 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  background: white;
  padding: 3rem 2rem;
  position: relative;
`;

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Content = styled.div`
  flex: 0 0 50%;
  @media screen and (max-width: 950px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 220px;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.5;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
  justify-content: flex-start;
  padding: 1rem;
`;

const ColumnRight = styled.div`
  position: absolute;
  top: -100px;
  right: 0;
  max-width: 850px;
  max-height: 820px;
  height: 140%;
  width: 45%;
  padding-left: 1rem;
  padding-bottom: 2rem;

  @media screen and (max-width: 950px) {
    height: 320px;
    top: -95px;
    width: 80%;
    margin: 0 auto;
    left: 0;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const CustomButton = styled(Button)`
  margin-bottom: 1rem;
`;

const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

const Features: React.FC<FeaturesProps> = ({
                                               heading,
                                               paragraph1,
                                               paragraph2,
                                               button1Text,
                                               button1Link,
                                               button2Text,
                                               button2Link,
                                               imageSrc,
                                               customButton,
                                           }) => {
    return (
        <Section>
            <Container>
                <Wrap>
                    <ColumnLeft>
                        <Content>
                            <h1>{heading}</h1>
                            <p>{paragraph1}</p>
                            <p>{paragraph2}</p>
                            <CustomButton to={button1Link} target="_blank" rel="noopener noreferrer">
                                {button1Text}
                                <Arrow />
                            </CustomButton>

                            <CustomButton to={button2Link} target="_blank" rel="noopener noreferrer">
                                {button2Text}
                                <Arrow />
                            </CustomButton>

                            {customButton && (
                                <CustomButton to={customButton.link} target="_blank" rel="noopener noreferrer">
                                    {customButton.text}
                                    <Arrow />
                                </CustomButton>
                            )}
                        </Content>
                    </ColumnLeft>
                    <ColumnRight>
                        <Image src={imageSrc} />
                    </ColumnRight>
                </Wrap>
            </Container>
        </Section>
    );
};

export default Features;


// import React from "react";
// import {Button} from "./Button";
// import styled from "styled-components";
// import ImageOne from "../assets/images/slider_imgs/slider_img1.jpeg"
// import {IoMdArrowRoundForward} from "react-icons/io";
//
// const cfaPageUrl = 'https://find-a-breeder.cfa.org/listing/fluffyfluffy/';
//
// const Section = styled.section`
//     background: rgba(0, 13, 26, 0.94);
//     padding: 12rem 0 10rem;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
// `;
//
// const Container = styled.div`
//     background: white;
//     padding: 3rem 2rem;
//     position: relative;
//
// `;
//
// const Wrap = styled.div`
//     max-width: 1200px;
//     margin: 0 auto;
//
//
// `;
// const Content = styled.div`
//     flex: 0 0 50%;
//     @media screen and (max-width: 950px) {
//         flex: 0 0 100%;
//         max-width: 100%;
//         margin-top: 220px;
//     }
//
//     h1 {
//         margin-bottom: 2rem;
//         font-size: 2rem;
//     }
//
//     p {
//         margin-bottom: 1rem;
//         line-height: 1.5;
//     }
// `;
// const ColumnLeft = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     margin: 0 -15px;
//     justify-content: flex-start;
//     padding: 1rem;
// `;
//
// const ColumnRight = styled.div`
//     position: absolute;
//     top: -100px;
//     right: 0;
//     max-width: 850px;
//     max-height: 820px;
//     height: 140%;
//     width: 45%;
//     padding-left: 1rem;
//     padding-bottom: 2rem;
//
//     @media screen and (max-width: 950px) {
//         height: 320px;
//         top: -95px;
//         width: 80%;
//         margin: 0 auto;
//         left: 0;
//     }
// `;
// const Image = styled.img`
//     height: 100%;
//     width: 100%;
//     object-fit: cover;
//
// `;
//
// const CustomButton = styled(Button)`
// margin-bottom: 1rem`;
//
// const Arrow = styled(IoMdArrowRoundForward)`
//     margin-left: 0.5rem;
// `;
//
// const Features = () =>{
//     return (
//         <Section>
//             <Container>
//                 <Wrap>
//                     <ColumnLeft>
//                         <Content>
//                             <h1>We Are CFA Certified Cattery</h1>
//                             <p> CFA certification is a hallmark of excellence for cat breeders, symbolizing a dedication to maintaining the highest standards in breeding, care, and ethical practices. Achieving recognition from the world's largest registry of pedigreed cats underscores a cattery's commitment to responsible breeding, the well-being of its feline residents, and compliance with stringent health and safety guidelines.</p>
//                             <p> Prospective cat owners benefit from CFA certification as it provides assurance that the cattery follows ethical breeding practices, prioritizes the health and socialization of its cats, and aligns with CFA's rigorous breed standards. Beyond assuring quality, CFA-certified catteries often participate in cat shows, showcasing their commitment to breed excellence and contributing to the overall advancement and preservation of purebred cat breeds.</p>
//                             <CustomButton to='https://cfa.org' target="_blank" rel="noopener noreferrer">
//                                 Learn More
//                                 <Arrow/>
//                             </CustomButton>
//
//                             <CustomButton to={cfaPageUrl} target="_blank" rel="noopener noreferrer">
//                                 Our CFA Page
//                                 <Arrow/>
//                             </CustomButton>
//                         </Content>
//                     </ColumnLeft>
//                     <ColumnRight>
//                         <Image src={ImageOne} />
//                     </ColumnRight>
//                 </Wrap>
//             </Container>
//         </Section>
//     );
// };
//
// export default Features;