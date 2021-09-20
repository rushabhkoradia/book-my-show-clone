import React from 'react';
import MovieNavbar from '../components/Navbar/Movie.Navbar.component';

const MovieLayout = (props) => {
    return (
        <>
            <MovieNavbar />
            { props.children }
        </>
    );
};

export default MovieLayout;