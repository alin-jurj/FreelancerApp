import React from 'react';
import { Box, Typography, Paper, Divider,Grid } from '@material-ui/core';



const PendingOfferCard = ({offer}) => {
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
                <Typography variant="h6" style={{fontFamily:'Nunito'}}> {offer.price}</Typography>
            </Grid>
        </Grid>
        <Grid item xs={10}>
            &nbsp;
        </Grid>
      </Paper>
    );
}

export default PendingOfferCard;
