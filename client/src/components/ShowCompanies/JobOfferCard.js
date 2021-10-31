import React, { useState } from 'react';
import {Grid, Typography, Paper, Button, TextField, InputAdornment} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SendIcon from '@material-ui/icons/Send';
import EuroIcon from '@material-ui/icons/Euro';
import { useDispatch } from 'react-redux';
import { addJobOffer } from '../../actions/joboffers';


const JobOfferCard = ({joboffer}) => {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const [addOffer, setAddOffer] = useState(false);
    const [offer, setOffer] = useState({company: joboffer.company, companyname: joboffer.companyname, description: joboffer.description, name: joboffer.name, programmer: user.result.email, status: 'pending', percentage:0, price: null});

    const handleAddOffer = () => setAddOffer(!addOffer);

    const handleAddOfferByUser = () => {
        dispatch(addJobOffer(offer));
        handleAddOffer();
    }

    return (
        <Paper elevation={6} style={{paddingTop:'20px', paddingBottom:'20px'}}>
        <Grid container rowSpacing={3} justifyContent="space-between" style={{paddingLeft:'15px'}}>
            <Grid item xs={3} >
                <Typography variant="h6" style={{fontFamily:'Nunito'}}>{joboffer.name}</Typography>
            </Grid>
            <Grid item xs={7}>
                <Typography variant="body1" style={{fontFamily:'Nunito'}} alignItems="flex-start">{joboffer.description}</Typography>
            </Grid>        
            <Grid item xs={2} justifyContent="flex-end" onClick={handleAddOffer}>
                <Button endIcon={<AddIcon />}>Add Offer</Button>
            </Grid>
            {
                addOffer && (
                    <>
                    <Grid item xs={10}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={2} style={{paddingTop: '10px'}}>
                        <div>
                            <TextField label="Your Asking Price" type="number" InputLabelProps={{shrink: true,}} InputProps={{ startAdornment: (<InputAdornment position="end"><EuroIcon /></InputAdornment>),}} style={{width: '150px'}} value={offer.price} onChange={(e) => setOffer({ ...offer, price: e.target.value })}/>
                            <Button startIcon={<SendIcon />} style={{paddingTop: '25px'}} onClick={handleAddOfferByUser}/>
                        </div>
                    </Grid>
                    </>
                )
            }
        </Grid>
        </Paper>
    );
}

export default JobOfferCard;