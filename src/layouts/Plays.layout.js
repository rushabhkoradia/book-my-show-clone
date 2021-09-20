import React from 'react';
import MovieNavbar from '../components/Navbar/Movie.Navbar.component';

const PlaysLayout = (props) => {
    return (
        <>
            <MovieNavbar />
            { props.children }
        </>
    );
};

export default PlaysLayout;