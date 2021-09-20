import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//Layouts
import PlaysLayout from '../layouts/Plays.layout';

const PlaysHOC = ({ component: Component, ...rest }) => {
    //component
    //props => exact path
    return (
        <>
            <Route 
                { ...rest }
                component = {(props) => (
                    <PlaysLayout>
                        <Component { ...props } />
                    </PlaysLayout>
                )}
            />
        </>
    );
};
export default PlaysHOC;