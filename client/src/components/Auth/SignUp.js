import React, { useState } from 'react';
import { Container, Paper, Avatar, Typography, FormControlLabel, FormControl, RadioGroup, Radio, Button } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CompanySignUp from './CompanySignUp';
import ProgrammerSignUp from './ProgrammerSignUp';
import  useStyle from './styles';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const SignUp = () => {
    const history = useHistory();
    const [radio, setRadio] = useState();
    const classes = useStyle();

    const goToSignIn = () => {
        history.push('/signin');
    }

    return (
        <StyledBody>
        <Container component="main" maxWidth="xs" >
            <Paper elevation={3} className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5">Sign Up</Typography>
            <form className={classes.form}>
            <FormControl component="fieldset" style={{marginBottom: '20px'}}>
                <Typography variant="body1">Choose your role:</Typography>
                <RadioGroup row aria-label="Role" name="row-radio-buttons-group" onChange={(e) => setRadio(e.target.value)}>
                    <FormControlLabel value="company" control={<Radio />} label="Company" />
                    <FormControlLabel value="freelancer" control={<Radio />} label="Freelancer" />
                </RadioGroup>
            </FormControl>
            { 
                (radio === 'freelancer') && <ProgrammerSignUp />
            }
            { 
                (radio === 'company') && <CompanySignUp />
            }
            </form>
            <Button variant="text" onClick={goToSignIn}>Already have an account?Sign In</Button>
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

export default SignUp;
