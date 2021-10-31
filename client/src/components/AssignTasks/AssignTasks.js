import React, { useState, useEffect } from 'react';
import { Grid, Divider, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import GlobalStyle from '../LandingPage/GlobalStyle';
import axios from 'axios';
import bg from '../../img/bg.svg';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import AssignJobCard from './AssignJobCard';
import CheckIcon from '@mui/icons-material/Check';
import { getJoboffers } from '../../actions/joboffers';
import Topbar from '../MyProfile/Topbar';
import Menu from '../MainPage/Menu';
const AssignTasks = () => {
    const [menuOpen,setMenuOpen] = useState(false);

    const [user,setUser] =useState(JSON.parse(localStorage.getItem('profile')));
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

    
  
    let joboffersByCompany = joboffers.filter(function (e) {
        return (e.company == user.result.email && e.status === 'pending');
    });
   return (
            <BodyStyle>
                
                <GlobalStyle />
                <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
               { joboffersByCompany.map((joboffer) =>{
                 return(
                    <Grid container justifyContent="flex-start" style={{paddingLeft:'50px', paddingRight:'50px', paddingTop:'30px'}}>

                        <Grid item xs={12} >
                            <AssignJobCard joboffer={joboffer} />
                        </Grid>
                        </Grid>
                   
                   )
                   
               })
            
            }
            
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

export default AssignTasks
