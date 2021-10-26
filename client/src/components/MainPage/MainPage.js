import React from 'react'
import Topbar from '../MyProfile/Topbar';
import Menu from './Menu';
import "../MyProfile/MyProfile.scss"
import { useState } from "react";
import bg from '../../img/bg.svg';
import styled from 'styled-components';
import GlobalStyle from '../LandingPage/GlobalStyle';
import SearchBar from './SearchBar';
import {Divider} from '@material-ui/core';
import Tasks from './Tasks';
// import CategoriesCarousel from '../LandingPage/CategoriesCarousel';

export default function MainPage() {
    const [menuOpen,setMenuOpen] = useState(false)
    return(
        
        <HeaderStyle>
            <GlobalStyle />
            <div className="app">
                <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <SearchBar placeholder="Enter the name of a company..."/>
                <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <Divider variant="middle"/>
                <Tasks/>
            </div>
             
        </HeaderStyle>
        
    )
}
const HeaderStyle = styled.header`
    height: 100vh;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    background-position-y: 100%;
    .header-content{
        padding: 0 10rem;
    }
`;

