import React from 'react';
import { Box, Typography, Paper, Divider,Grid, IconButton,Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteJobOffer } from '../../actions/joboffers';
import { useDispatch } from 'react-redux';

const OfferCard = ({offer}) => {
    const dispatch = useDispatch();
    return (  
        <Paper elevation={6} style={{paddingTop:'20px', paddingBottom:'20px'}}>
        <Grid container rowSpacing={3} justifyContent="space-between" style={{paddingLeft:'15px'}}>
            <Grid item xs={3} >
                <Typography variant="h6" style={{fontFamily:'Nunito'}}>{offer.name}</Typography>
            </Grid>
            <Grid item xs={7}>
                <Typography variant="body1" style={{fontFamily:'Nunito'}} alignItems="flex-start">{offer.description}</Typography>
            </Grid>
            <Grid item xs={2} justifyContent="flex-end" >
                <Typography variant="h6" style={{fontFamily:'Nunito'}}> {offer.price}
                <Button  onClick={() => dispatch(deleteJobOffer(offer._id))}>
                <IconButton>
                <DeleteIcon fontSize="large"/>
                </IconButton>
                </Button>
                </Typography>
            </Grid>
        </Grid>
        <Grid item xs={10}>
            &nbsp;
        </Grid>
      </Paper>
    );
}

export default OfferCard;
