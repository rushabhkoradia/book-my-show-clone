import React from 'react';
import Slider from 'react-slick';

// component
import Poster from '../Poster/Poster.component';

// settings
import settings from '../../config/PosterCarousel.config';

// images
import PremierImages from '../../config/TempPoster.config';

const Premier = () => {

    return (
        <>
            <div className="flex flex-col items-start py-4">
                <h3 className="text-white text-2xl font-bold">Premieres</h3>
                <p className="text-white text-sm">Brand new releases every Friday</p>
            </div>
            <Slider { ...settings }>
                { PremierImages.map((image) => (
                    <Poster { ...image } isDark />
                )) }
            </Slider>
        </>
    );
};
export default Premier;