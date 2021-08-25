import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//Layouts
import DefaultLayout from '../layouts/Default.layout';
const DefaultHOC = ({ component: Component, ...rest }) => {
    //component
    //props => exact path
    return (
        <>
        <Route 
        { ...rest }
        component = {(props) => (
            <DefaultLayout>
                <Component { ...props } />
            </DefaultLayout>
        )}
        />
        </>
    );
};
export default DefaultHOC;