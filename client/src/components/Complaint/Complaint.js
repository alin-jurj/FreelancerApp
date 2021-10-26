import React, { useState } from 'react';
import GlobalStyle from '../LandingPage/GlobalStyle';
import bg from '../../img/bg.svg';
import styled from 'styled-components';
import Topbar from '../MyProfile/Topbar';
import Menu from '../MainPage/Menu';
import { Paper, Typography, Container, Grid, TextField, Button } from '@material-ui/core';
import useStyle from './styles';
import { useDispatch } from 'react-redux';
import { addComplaint } from '../../actions/complaint';
import { useHistory } from 'react-router-dom';

const Complaint = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    const classes = useStyle();
    const history = useHistory();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const [formData, setFormData] = useState({from:user.result.name, against: '', reason: ''});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleComplaint = (e) => {
        e.preventDefault();
        dispatch(addComplaint(formData));
        history.push('/MainPage');
    }

    return (
        <BodyStyle>
            <GlobalStyle />
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <Container component="main" maxWidth="xs">
                <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h5" style={{fontFamily:'Nunito'}}>Make a complaint</Typography>
                    <form className={classes.form}>
                    <Grid container spacing={2} style={{marginTop: '10px'}}>
                        <Grid item xs={12}>
                            <TextField name="against" fullWidth required label="Against" variant="outlined" onChange={handleChange}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="reason" fullWidth required multiline rows={4} label="Reason" variant="outlined" onChange={handleChange}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" fullWidth style={{marginBottom: '10px'}} onClick={handleComplaint}>Submit</Button>
                        </Grid>
                    </Grid>
                </form>
                </Paper>
            </Container>
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

export default Complaint;
