import React, { useState , useEffect } from "react";
import styled from 'styled-components';
import GlobalStyle from '../LandingPage/GlobalStyle';
import Topbar from './Topbar';
import Menu from '../MainPage/Menu';
import bg from '../../img/bg.svg';
import { Divider,Grid,Typography } from "@material-ui/core";
import { AddPayment } from "./AddPayment";
import { Cards } from "./CardsList/Cards";
import { useDispatch } from 'react-redux';
import { getUserCreditCards } from "../../actions/CreditCard";
export const Payment = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const [menuOpen,setMenuOpen] = useState(false);
    const dispatch = useDispatch();
    console.log(user.result.email);
    useEffect(() => {
        dispatch(getUserCreditCards());
    }, [dispatch]);

    return (
        <BodyStyle>
        <GlobalStyle />
        <div className="app">
           <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> 
           <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
           <Divider variant="middle" />
            <Grid className="sections" container align="left">
                <Grid item xs={12} >
                    <Typography variant="h4" style={{paddingTop: '40px', paddingBottom:'40px', paddingLeft: '30px', color:"#290a42", fontFamily: 'Nunito'}} >Add a credit card</Typography>
                    <Divider variant="middle" style={{marginTop: '20px', marginBottom:'20px'}}/>
                    <AddPayment/>
                    <Divider variant="middle" style={{marginTop: '40px', marginBottom:'20px'}}/>
                    <Cards/>
                </Grid>
                
            </Grid>
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
`;
