import React, { useState } from 'react';
import { Container, Paper, Avatar, Typography, Grid, TextField, Button } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import  useStyle from './styles';
import { signin } from '../../actions/auth';
import styled from 'styled-components';

const initialState = {email: '', password: ''};

const SignIn = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyle();
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        //console.log(formData);
        dispatch(signin(formData, history));
        history.push('/MainPage');
    }

    const goToSignUp = () => {
        history.push('/signup');
    }

    return (
        <StyledBody>
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">Sign In</Typography>
                <form className={classes.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField name="email" fullWidth required label="Email Adress" variant="outlined" onChange={handleChange}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="password" fullWidth required label="Password" type="password" variant="outlined" onChange={handleChange}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" fullWidth style={{marginBottom: '10px'}} onClick={handleSignIn}>Submit</Button>
                        </Grid>
                    </Grid>
                </form>
                <Button variant="text" onClick={goToSignUp}>Don't have an account? Sign Up</Button>
            </Paper>
        </Container>
        </StyledBody>
    );
}

const StyledBody = styled.div`
  background: url('https://svgshare.com/i/bCk.svg');
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

export default SignIn;
