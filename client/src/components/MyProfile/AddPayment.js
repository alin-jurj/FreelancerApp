import React, { useState, useRef } from "react";
import GlobalStyle from '../LandingPage/GlobalStyle';
import { Typography, Button, Grid, TextField, Container, Paper, Avatar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import { addCreditCard } from '../../actions/CreditCard';
import { AddCreditCard } from "../Auth/AddCreditCard";

export const AddPayment = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const initialState = {name: '',bank: '', username: user.result.email,IBAN: ''};
    const [CreditCardFormOpen, setCreditCardFormOpen] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const [CreditCardData, setCreditCardData] = useState(initialState);

    const handleShowCreditCard = () => setCreditCardFormOpen(!CreditCardFormOpen);

    const handleAddCreditCard = async (e) => {
        e.preventDefault();
        dispatch(addCreditCard(CreditCardData));
        document.getElementById('name').value = "";
        document.getElementById('bank').value = "";
        document.getElementById('IBAN').value = "";
        setCreditCardData(initialState);
        handleShowCreditCard();
    }

    return (
        <>
        <GlobalStyle />
        <Container component="main" maxWidth="sm" spacing={3}>
            <Grid item xs={12} >
                <Button variant="text" color="inherit" alignContent="left" fullWidth endIcon={CreditCardFormOpen ? <CloseIcon /> : <AddIcon /> } onClick={handleShowCreditCard}>
                    {CreditCardFormOpen ? "Close Form" : "Add credit card" }
                </Button>
            </Grid>
            {
                CreditCardFormOpen && (
                <>
                    <form>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField id="name" name="name" style={{backgroundColor:'white', borderRadius:'5px'}} fullWidth required label="Card Name" variant="outlined" value={CreditCardData.name} onChange={(e) => setCreditCardData({ ...CreditCardData, name: e.target.value })}/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="bank" name="bank" style={{backgroundColor:'white', borderRadius:'5px'}} fullWidth required label="Bank" variant="outlined" multiline rows={4} value={CreditCardData.bank} onChange={(e) => setCreditCardData({ ...CreditCardData, bank: e.target.value })}/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="IBAN" name="IBAN" style={{backgroundColor:'white', borderRadius:'5px'}} fullWidth required label="IBAN" variant="outlined" value={CreditCardData.IBAN} onChange={(e) => setCreditCardData({ ...CreditCardData, IBAN: e.target.value })}/>
                            </Grid>
                            
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" fullWidth style={{marginBottom: '10px'}} onClick={handleAddCreditCard}>add</Button>
                            </Grid>
                        </Grid>
                    </form>
                </>
                )
            }
        </Container>
        </>
    );
}
