import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//Layouts
import MovieLayout from '../layouts/Movie.layout';
const MovieHOC = ({ component: Component, ...rest }) => {
    //component
    //props => exact path
    return (
        <>
        <Route 
        { ...rest }
        component = {(props) => (
            <MovieLayout>
                <Component { ...props } />
            </MovieLayout>
        )}
        />
        </>
    );
};
export default MovieHOC;