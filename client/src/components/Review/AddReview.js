import React, {useState} from 'react';
import { Box, Button, Typography, TextField, Divider, Grid, Paper} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { addReview } from '../../actions/review';
import { useDispatch } from 'react-redux';

const AddReview = ({name, photo, company}) => {
    const [addReviewFlag, setAddReview] = useState(false);
    const dispatch = useDispatch();
    const [reviewForm, setReview] = useState({from: name, photo: photo, to: company, rating: 0, review: ''});

    const handleAddReviewFlag = () => setAddReview(!addReviewFlag);

    const handleAddReview = () => {
        dispatch(addReview(reviewForm));
        setAddReview(!addReviewFlag);
        console.log(reviewForm);
    }

    return (
        <>
        <Button onClick={handleAddReviewFlag}>Add review</Button>
        {
            addReviewFlag && (
                <Paper elevation={6} style={{borderRadius: '40px'}}>
                <Box sx={{bgcolor: 'background.paper', color: 'black', padding: '20px'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', width: 'fit-content', spacing: '2'}}>
                        <Typography variant="h5">{name}</Typography>
                    </Box>
            
                    <Rating name="half-rating" defaultValue={null} value={reviewForm.rating} onChange={(e) => {setReview({...reviewForm, rating: e.target.value})}} />
            
                    <Divider variant="middle" flexItem style={{background: 'black'}}/>
            
                    <TextField label="Review" variant="outlined" fullWidth multiline rows={3} value={reviewForm.review} onChange={(e) => {setReview({...reviewForm, review: e.target.value})}}/>
                    <Grid container>
                        <Grid item xs={6}>
                            <Button variant="contained" fullWidth color="primary" onClick={handleAddReview}>Add</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" fullWidth onClick={handleAddReviewFlag} color="secondary">Close</Button>
                        </Grid>
                    </Grid>
                </Box>
                </Paper>
            )
        }
        
        </>
    );
}

export default AddReview;
