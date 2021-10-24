import React, { useState, useEffect } from 'react';
import Topbar from '../MyProfile/Topbar';
import Menu from '../MainPage/Menu';
import GlobalStyle from '../LandingPage/GlobalStyle';
import bg from '../../img/bg.svg';
import styled from 'styled-components';
import { Typography, Grid } from '@material-ui/core';
import axios from 'axios';
import PendingOfferCard from './PendingOfferCard';

const PendingOffers = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    const user = JSON.parse(localStorage.getItem('profile'));
    const [joboffers, setJobOffers] = useState(null);

    useEffect(() => {
        axios(`http://localhost:5000/joboffer/`)
        .then(response =>{
            setJobOffers(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    if (!joboffers) return null;

    let pendingUserOffers = joboffers.filter(function (e) {
        return (e.programmer === user.result.email && e.status === 'pending');
    })

    console.log(joboffers);

    return (
        <BodyStyle>
            <GlobalStyle />
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <Grid container spacing={3} style={{paddingLeft: '40px', paddingRight: '40px'}}>
                <Grid item xs={12}>
                    <Typography variant="h5" style={{fontFamily: 'Nunito'}}>My Pending Offers</Typography>
                </Grid>

                {
                    pendingUserOffers.map( (offer) => {
                        return (
                            <Grid item xs={12}>
                                <PendingOfferCard offer={offer} />
                            </Grid>
                        )
                    })
                }
            </Grid>
            </BodyStyle>
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

export default PendingOffers;
