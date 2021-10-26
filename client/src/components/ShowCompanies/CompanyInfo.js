import React, { useState, useEffect } from 'react';
import GlobalStyle from '../LandingPage/GlobalStyle';
import Topbar from '../MyProfile/Topbar';
import Menu from '../MainPage/Menu';
import styled from 'styled-components';
import bg from '../../img/bg.svg';
import { useParams } from 'react-router-dom';
import { Grid, Typography, Divider } from '@material-ui/core';
import axios from 'axios';
import { getJoboffers } from '../../actions/joboffers';
import { useDispatch } from 'react-redux';
import ShowJobOffers from './ShowJobOffers';
import Reviews from '../Review/Reviews';

const CompanyInfo = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    const [company, setCompany] = useState(null);
    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJoboffers());
    }, [dispatch]);

    useEffect(() => {
        axios(`http://localhost:5000/user/${id}`)
        .then(response =>{
            setCompany(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    if(!company) return null;

    return (
        <BodyStyle>
            <GlobalStyle />
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <Grid container justifyContent="flex-start" style={{paddingLeft:'50px', paddingRight:'50px'}}>
                <Grid item xs={9}>
                    <Grid container spacing={3}>
                        <Grid item xs={8}>
                            <Typography variant="h3" style={{fontFamily:'Nunito'}}>{company.name}</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="body1" style={{fontFamily:'Nunito'}}>{company.description}</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="subtitle2" style={{fontFamily:'Nunito'}}>contact: {company.email}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <img alt={company.name} src={company.photo} style={{borderRadius: '15px'}} />
                </Grid>
                <Grid item xs={12}>
                    <Divider variant="middle" style={{marginBottom:'40px'}}/>
                </Grid>
                <Grid item xs={12}>
                    <Reviews company={company}/>
                </Grid>
                <Grid item xs={12}>
                    <Divider variant="middle" style={{marginBottom:'40px', marginTop:'30px'}}/>
                </Grid>
                <Grid item xs={12}>
                    <ShowJobOffers name={company.name}  email={company.email}/>
                </Grid>
            </Grid>
        </BodyStyle>
    )
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

export default CompanyInfo;