import React, { useState, useEffect } from 'react';
import GlobalStyle from '../LandingPage/GlobalStyle';
import Topbar from '../MyProfile/Topbar';
import Menu from '../MainPage/Menu';
import styled from 'styled-components';
import bg from '../../img/bg.svg';
import { useParams } from 'react-router-dom';
import { Grid, Typography, Divider } from '@material-ui/core';
import axios from 'axios';
import { getUserProjects } from '../../actions/portofolio';
import { useDispatch } from 'react-redux';
import Reviews from '../Review/Reviews';
import Projects from '../MyPortofolio/Projects/Projects';
import CardsFreelancer from './CardsFreelancer'
import { getUserCreditCards } from '../../actions/CreditCard';
const FreelancerInfo = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    const [user, setUser] = useState(null);
    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserProjects());
    }, [dispatch]);
    useEffect(() => {
        dispatch(getUserCreditCards());
    }, [dispatch]);

    useEffect(() => {
        axios(`http://localhost:5000/user/${id}`)
        .then(response =>{
            setUser(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    if(!user) return null;

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
                            <Typography variant="h3" style={{fontFamily:'Nunito'}}>{user.name}</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="subtitle2" style={{fontFamily:'Nunito'}}>contact: {user.email}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <img alt={user.name} src={user.photo} style={{borderRadius: '15px', width: '20em'}} />
                </Grid>
                <Grid item xs={12}>
                    <Divider variant="middle" style={{marginBottom:'40px'}}/>
                </Grid>
                <Grid item xs={12}>
                    <Reviews company={user}/>
                </Grid>
                <Grid item xs={12}>
                    <Divider variant="middle" style={{marginBottom:'40px', marginTop:'30px'}}/>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" style={{paddingLeft:'15px', fontFamily:'Nunito', color:'#879ff8',paddingTop:'80px', paddingBottom:'40px'}}>{user.name}'s Portofolio</Typography>
                    <div style={{paddingLeft:'15px', fontFamily:'Nunito', color:'#879ff8',paddingTop:'80px', paddingBottom:'40px'}}>
                    <Projects user={user}/>
                    </div>
                </Grid>
            </Grid>
            <div className="works" style={{paddingTop:'80px', paddingBottom:'40px'}}>
            <CardsFreelancer user={user}/>
            </div>
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
    .works {
        background-color: crimson;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
`;

export default FreelancerInfo;