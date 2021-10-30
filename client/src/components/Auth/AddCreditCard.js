import React, { useState } from 'react';
import { Grid, Container, Paper, Avatar, TextField, Button, Typography, CircularProgress } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import FileBase from 'react-file-base64';
import  useStyle from './styles';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { addProject } from '../../actions/portofolio';
import {addCreditCard} from '../../actions/CreditCard'

export  const AddCreditCard = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const classes = useStyle();
    const history = useHistory();
    const dispatch = useDispatch();

    const [CreditCardData, setCreditCardData] = useState({name: '', bank: '' , username: '', IBAN: ''});

    if(!user) return null;

    const handleAddCreditCard = async (e) => {
        e.preventDefault();
        setCreditCardData({...CreditCardData, username: user.result.email});
        dispatch(addCreditCard(CreditCardData, history));
    }

    return (
        <StyledBody>
        <div>
            <Container component="main" maxWidth="xs">
            <Paper elevation={3} className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <AddIcon />
                </Avatar>
                <Typography variant="h5">Add credit card</Typography>
                <form className={classes.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField name="name" fullWidth required label="Your Name" variant="outlined" value={CreditCardData.name} onChange={(e) => setCreditCardData({ ...CreditCardData, name: e.target.value })}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="bank" fullWidth required label="Bank" variant="outlined" multiline rows={4} value={CreditCardData.bank} onChange={(e) => setCreditCardData({ ...CreditCardData, bank: e.target.value })}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="IBAN" fullWidth required label="IBAN" variant="outlined" value={CreditCardData.IBAN} onChange={(e) => setCreditCardData({ ...CreditCardData, IBAN: e.target.value })}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" fullWidth style={{marginBottom: '10px'}} onClick={handleAddCreditCard}>add</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
        </div>
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
