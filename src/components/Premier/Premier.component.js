import React from 'react';
import Slider from 'react-slick';

// component
import Poster from '../Poster/Poster.component';

export const Premier = () => {
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        InitialSlide: 0
    };

    const PremierImages = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            alt: "Movie Image",
            title: "The Balkan Line",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            alt: "Movie Image",
            title: "The Balkan Line",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            alt: "Movie Image",
            title: "The Balkan Line",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            alt: "Movie Image",
            title: "The Balkan Line",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            alt: "Movie Image",
            title: "The Balkan Line",
            subtitle: "English"
        }
    ];

    return (
        <>
            <Slider { ...settings }>
                { PremierImages.map((image) => (
                    <Poster { ...image } />
                )) }
            </Slider>
        </>
    );
};