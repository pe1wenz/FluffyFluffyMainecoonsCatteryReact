import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";

interface ScrollUpFadeInProps {
    isVisible?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
    threshold?: number;
}


const ScrollUpFadeInWrapper = styled.div<ScrollUpFadeInProps>`
    opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
    transition: opacity 0.5s ease-in-out;
`;


const ScrollUpFadeIn: React.FC<ScrollUpFadeInProps> = ({children,
                                                           onClick,
                                                        threshold
                                                     }) => {
    const [isVisible, setIsVisible] = useState(false);

    const myRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const getYPosition = () => {
            if (myRef.current) {
                const rect = myRef.current.getBoundingClientRect();

                // Check if the position is fixed
                if (threshold == null) {
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    threshold = rect.top - window.scrollY  - 800;
                }
            }
        };

        window.addEventListener("scroll", getYPosition);
        return () => {
            window.removeEventListener("scroll", getYPosition);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            // You can adjust the threshold value to control when the button becomes visible
            // const threshold = threshold;

            // @ts-ignore
            setIsVisible(scrollTop > threshold);
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [threshold]);


    return (<ScrollUpFadeInWrapper isVisible={isVisible} onClick={onClick}>
        <div ref={myRef}>
            {children}
        </div>
    </ScrollUpFadeInWrapper>);
};

export default ScrollUpFadeIn;
