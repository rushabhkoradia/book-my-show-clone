import React from 'react';
import HeroSlider from 'react-slick';

// components
import { NextArrow, PrevArrow } from './Arrows.component';

const HeroCarousel = () => {
    const settingsLg = {
        arrows: true,
        centerMode: true,
        centerPadding: "100px",
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    
    const images = [
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
        "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=738&q=80",
        "https://images.unsplash.com/photo-1611604548018-d56bbd85d681?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    ]

    return (
        <>
           <div className="lg:hidden">
                 <HeroSlider {...settings}>
                {
                    images.map((image) => (
                        <div className="w-20 h-64 md:h-80 py-3">
                            <img src={image} alt="Image Carousel" className="w-full h-full rounded-md" />
                        </div>
                    ))
                }
                </HeroSlider>
           </div>

            <div className="hidden lg:block">
                <HeroSlider style={{ padding: 0, width: '100%', maxHeight: '600px' }} {...settingsLg}>
                {
                    images.map((image) => (
                        <div className="w-full h-96 px-2 py-3">
                            <img src={image} alt="Image Carousel" className="w-full h-full rounded-md" />
                        </div>
                    ))
                }
                </HeroSlider>
           </div> 
        </>
    );
}

export default HeroCarousel;