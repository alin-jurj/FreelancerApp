import React, { useState , useEffect } from "react";
import styled from 'styled-components';
import Topbar from '../MyProfile/Topbar';
import Menu from '../MainPage/Menu';
import bg from '../../img/bg.svg';
import GlobalStyle from '../LandingPage/GlobalStyle';
import {Grid} from '@material-ui/core';

import { useDispatch } from 'react-redux';
import { getUserProjects } from '../../actions/portofolio';
import { Divider, Typography } from "@material-ui/core";
import PortofolioList from './PortfolioList'
export default function Portofolio() {
    const user = JSON.parse(localStorage.getItem('profile'));
    const [menuOpen,setMenuOpen] = useState(false);
    const dispatch = useDispatch();

    console.log(user.result.email);
 
    useEffect(() => {
        dispatch(getUserProjects());
    }, [dispatch]);

    return (
        <>
            <Grid className="sections" container align="left">
                <Grid item xs={12} >
                    <Typography variant="h4" style={{paddingTop: '40px', paddingBottom:'40px', paddingLeft:'770px', color:"#290a42", fontFamily: 'Nunito'}} >My Portofolio</Typography>
                    {/* <Divider variant="middle" style={{marginTop: '20px', marginBottom:'20px'}}/> */}
                     <PortofolioList /> 
                </Grid>
                
            </Grid>
            
      
        </>
    );
}
