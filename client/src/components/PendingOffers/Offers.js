import React, { useState, useEffect } from 'react';
import Topbar from '../MyProfile/Topbar';
import Menu from '../MainPage/Menu';
import GlobalStyle from '../LandingPage/GlobalStyle';
import bg from '../../img/bg.svg';
import styled from 'styled-components';
import { Typography, Grid,Divider } from '@material-ui/core';
import axios from 'axios';
import OfferCard from './OfferCard';
import { useDispatch } from 'react-redux';
import { getJoboffers } from '../../actions/joboffers';
import { useSelector } from 'react-redux';

const Offers = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    const user = JSON.parse(localStorage.getItem('profile'));
    const joboffers = useSelector((state) => state.joboffers);
    const dispatch = useDispatch();
   
    useEffect(() => {
      dispatch(getJoboffers());
 }, [dispatch]);
    

    if (!joboffers) return null;

    let DeniedOffers = joboffers.filter(function (e) {
        return (e.programmer === user.result.email && e.status === 'denied');
    })
    let PaidOffers = joboffers.filter(function (e) {
        return (e.programmer === user.result.email && e.status === 'paid');
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
                    <Typography variant="h5" style={{fontFamily: 'Nunito'}}>Denied Offers</Typography>
                </Grid>

                {
                    DeniedOffers.map( (offer) => {
                        return (
                            <Grid container justifyContent="flex-start" style={{paddingLeft:'50px', paddingRight:'50px', paddingTop:'100px'}}>
                            <Grid item xs={12}>
                                <OfferCard offer={offer} />
                            </Grid>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Divider variant="middle" style={{marginTop: '10px'}} />
            <Grid style={{paddingLeft: '40px', paddingRight: '40px'}}>
                <Grid item xs={12}>
                    <Typography variant="h5" style={{fontFamily: 'Nunito'}}>Paid Offers</Typography>
                </Grid>

                {
                    PaidOffers.map( (offer) => {
                        return (
                            <Grid style={{paddingLeft:'50px', paddingRight:'50px', paddingTop:'100px'}}>
                            <Grid item xs={12}>
                                <OfferCard offer={offer} />
                            </Grid>
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

export default Offers;
