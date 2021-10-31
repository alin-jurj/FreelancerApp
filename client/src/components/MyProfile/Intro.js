import React, { useState, useEffect } from 'react';
import GlobalStyle from '../LandingPage/GlobalStyle';
import Topbar from '../MyProfile/Topbar';
import Menu from '../MainPage/Menu';
import bg from '../../img/bg.svg';
import { useParams } from 'react-router-dom';
import { Grid, Typography, Divider } from '@material-ui/core';

import "../MyProfile/MyProfile.scss"
import styled from 'styled-components';

import { getUsers } from "../../api";
export default function Intro() {
    const [menuOpen,setMenuOpen] = useState(false);
    const { id } = useParams();
    const user = JSON.parse(localStorage.getItem('profile'));


  return (
      <>
          <GlobalStyle />
          <Grid container justifyContent="flex-start" style={{paddingLeft:'50px', paddingRight:'50px'}}>
              <Grid item xs={9}>
                  <Grid container spacing={3}>
                      <Grid item xs={8}>
                          <Typography variant="h3" style={{fontFamily:'Nunito', marginTop:'100px'}}>Hi there! I am </Typography>
                      </Grid>
                      <Grid item xs={8}>
                          <Typography variant="h3" style={{fontFamily:'Nunito'}}>{user.result.name}</Typography>
                      </Grid>
                  </Grid>
              </Grid>
                <div>
                    <img alt={user.result.name} src={user.result.photo} style={{width:'20em',height:'20em',paddingRight:'100px'}} />
               </div>
            </Grid>
         </>
  );
}

