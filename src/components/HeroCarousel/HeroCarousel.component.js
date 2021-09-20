import React, { useState, useEffect } from 'react';
import HeroSlider from 'react-slick';
import axios from 'axios';

// components
import {NextArrowLg, PrevArrowLg, NextArrow, PrevArrow} from "./Arrows.component";

const HeroCarousel = () => {

    const [images,setImages] = useState([]);
    useEffect(async() => {
        const requestNowPlayingMovies = async() => {
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results);
        };
        requestNowPlayingMovies();
    }, []);

    const settingsLg = {
        arrows: true,
        centerMode: true,
        centerPadding: "100px",
        autoplay: true,
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

    return (
        <>
           <div className="lg:hidden">
                 <HeroSlider {...settings}>
                {
                    images.map((image) => (
                        <div className="w-20 h-64 md:h-80 py-3">
                            <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="Image Carousel" className="w-full h-full rounded-md" />
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
                            <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="Image Carousel" className="w-full h-full rounded-md" />
                        </div>
                    ))
                }
                </HeroSlider>
           </div> 
        </>
    );
}

export default HeroCarousel;