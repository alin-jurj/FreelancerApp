import React from 'react'
import Topbar from '../MyProfile/Topbar';
import Menu from './Menu';
import "../MyProfile/MyProfile.scss"
import { useState } from "react";
import bg from '../../img/bg.svg';
import styled from 'styled-components';
import GlobalStyle from '../LandingPage/GlobalStyle';
import SearchBar from './SearchBar';
export default function MainPage() {
    const [menuOpen,setMenuOpen] = useState(false)
    return(
        
        <HeaderStyle>
            <GlobalStyle />
            <div className="app">
                <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                
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

