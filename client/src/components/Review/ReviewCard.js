import React from 'react';
import { Box, Grid, Typography, Avatar, Divider, Paper} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const ReviewCard = ({name, photo, rating, review}) => {

    return (
        <Paper elevation={3}>
        <Box sx={{bgcolor: 'background.paper', color: 'black'}}>
            <Box sx={{display: 'flex', alignItems: 'center', width: 'fit-content',paddingTop: '20px', paddingLeft: '20px'}}>
                <Avatar src={photo} />
                <Typography variant="h5" style={{fontFamily:'Nunito'}}>{name}</Typography>
            </Box>
            
            <Rating name="half-rating" defaultValue={rating} style={{paddingLeft: '20px'}} readOnly />
            
            <Divider variant="middle" flexItem style={{background: 'black'}}/>
            
            <Typography variant="body1" style={{fontFamily:'Nunito',paddingBottom: '20px', paddingLeft: '20px'}}>{review}</Typography>
        </Box>
        </Paper>
    );
}

export default ReviewCard;
