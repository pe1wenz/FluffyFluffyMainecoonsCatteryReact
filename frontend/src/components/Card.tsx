import React from "react";
import '../assets/css/Card.css'

interface CardProps {
    slide: Slide;
}

interface Slide {
    image: string;
    title: string;
    comment: string;
    label: string;
    path: string;
    alt: string;
}

const Card: React.FC<CardProps> = ({ slide }) =>{
    return (
        <article className="card">
            <img
                className="card__background"
                src={slide.image}
                alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                width="1920"
                height="2193"
            />
            <div className="card__content | flow">
                <div className="card__content--container | flow">
                    <h2 className="card__title">{slide.title}</h2>
                    <p className="card__description">
                        {slide.comment}
                    </p>
                </div>
                <button className="card__button">{slide.label}</button>
            </div>
        </article>
    );
};

export default Card;