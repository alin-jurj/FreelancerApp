import React, { useState , useEffect } from "react";
import styled from 'styled-components';
import Topbar from '../MyProfile/Topbar';
import Menu from '../MainPage/Menu';
import bg from '../../img/bg.svg';
import GlobalStyle from '../LandingPage/GlobalStyle';
import {Grid} from '@material-ui/core';
import './MyPortofolio.scss';
import AddToPortofolio from './AddToPortofolio';
import ProjectCard from './Projects/ProjectCard';
import Projects from "./Projects/Projects";
import { useDispatch } from 'react-redux';
import { getUserProjects } from '../../actions/portofolio';
import { Divider, Typography } from "@material-ui/core";

export default function MyPortofolio() {
    const user = JSON.parse(localStorage.getItem('profile'));
    const [menuOpen,setMenuOpen] = useState(false);
    const dispatch = useDispatch();

    console.log(user.result.email);
 
    useEffect(() => {
        dispatch(getUserProjects());
    }, [dispatch]);

    return (
        <>
        <BodyStyle>
        <GlobalStyle />
            <div className="app">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Divider variant="middle" />
            <Grid className="sections" container align="left">
                <Grid item xs={12} >
                    <Typography variant="h4" style={{paddingTop: '40px', paddingBottom:'40px', paddingLeft: '30px', color:"#290a42", fontFamily: 'Nunito'}} >My Portofolio</Typography>
                    <Divider variant="middle" style={{marginTop: '20px', marginBottom:'20px'}}/>
                    <AddToPortofolio />
                    <Divider variant="middle" style={{marginTop: '20px', marginBottom:'20px'}}/>
                    <Typography variant="h5" style={{paddingTop: '40px', paddingBottom:'40px', paddingLeft: '30px', color:"#290a42", fontFamily: 'Nunito'}} >My Projects</Typography>
                    <Projects />
                </Grid>
                
            </Grid>
            </div>
        </BodyStyle>
        </>
    );
}

const BodyStyle = styled.header`
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