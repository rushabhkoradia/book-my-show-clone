import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EntertainmentCardSlider from '../components/EntertainmentCarousel/EntertainmentCard.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';

const HomePage = () => {
    
    const [popularMovies, setPopularMovies] = useState([]);
    useEffect(() => {
        const requestPopularMovies = async() => {
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    }, []);

    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="container mx-auto">
                    <h1 className="text-2xl font-bold text-gray-700 my-3">The Best of Entertainment</h1>
                    <EntertainmentCardSlider />
                </div>

                <div className="bg-navColor-700 py-16">
                    <div className="container mx-auto px-4">
                        <div className="flex">
                            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Rupay" className="w-full h-full" />
                        </div>
                        <PosterSlider images={ popularMovies } title="Premieres" subtitle="Brand New Releases Every Friday" isDark />
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4">
                <PosterSlider images={ popularMovies } title="Online Streaming Events" isDark={false} />
            </div>
        </>
    );
};

export default HomePage;
