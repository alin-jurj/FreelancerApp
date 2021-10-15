import { Divider } from '@material-ui/core';
import React from 'react';
import CategoriesCarousel from './CategoriesCarousel';
import GlobalStyle from './GlobalStyle';
import Header from './Header';


const LandingPage = () => {
    return (
        <>
        <GlobalStyle />
        <Header />
        <Divider variant="middle" style={{marginTop: '100px'}} />
        <CategoriesCarousel />
        <Divider variant="middle" style={{marginTop: '100px'}} />
        
        </>
    );
}

export default LandingPage;
