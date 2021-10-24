import React from 'react';
import { Box, Typography, Paper, Divider } from '@material-ui/core';

const PendingOfferCard = ({offer}) => {
    return (
            <Box sx={{display: 'flex', alignItems: 'center', width: 'fit-content', bgcolor: 'background.paper', color: 'black',padding: '10px', borderRadius: '5px',}}>
               
                    <Typography variant="h6">{offer.companyname}</Typography>
                
               
                    <Divider orientation="vertical" flexItem style={{marginLeft: '10px', marginRight: '10px'}} />
               
                
                    <Typography variant="body2">{offer.name}</Typography>
                
                
                    <Divider orientation="vertical" flexItem style={{marginLeft: '10px', marginRight: '10px'}}/>
                    <Typography variant="body2">{offer.description}</Typography>
                
                    <Divider orientation="vertical" flexItem style={{marginLeft: '10px', marginRight: '10px'}}/>
                
                    <Typography variant="body2">My asking price: {offer.price}€</Typography>
            </Box>    
    );
}

export default PendingOfferCard;
