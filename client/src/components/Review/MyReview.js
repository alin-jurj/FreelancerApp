import React, { useState } from 'react';
import { Box, Typography, TextField, Divider, Grid, Paper, Avatar, Button} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { deleteReview, updateReview } from '../../actions/review';
import { useDispatch } from 'react-redux';

const MyReview = ({myReview}) => {
    const [editable, setEditable] = useState(false);
    const dispatch = useDispatch();
    const [review, setReview] = useState({from: myReview.from,
        photo: myReview.photo,
        to: myReview.to,
        rating: myReview.rating,
        review: myReview.review,});

    const handleUpdateReview = () => {
        dispatch(updateReview(myReview._id, review));
        handleEditable();
    }

    const handleEditable = () => setEditable(!editable);

    return (
        <Paper elevation={6} >
            <Grid container>
                <Grid item xs={10}>
                    <Box sx={{bgcolor: 'background.paper', color: 'black', padding: '20px'}}>
                        <Box sx={{display: 'flex', alignItems: 'center', width: 'fit-content', spacing: '2'}}>
                            <Avatar src={review.photo} />
                            <Typography variant="h4" style={{fontFamily:'Nunito'}}>Me</Typography>
                        </Box>
                        {
                            !editable ? (
                            <>
                            <Rating name="half-rating" value={review.rating} readOnly /> 
                            <Divider variant="middle" flexItem style={{background: 'black'}}/>
                            <Typography variant="body1" style={{fontFamily:'Nunito'}}>{review.review}</Typography>
                            </>
                            ) : (
                            <>
                            <Rating name="half-rating" value={review.rating} onChange={(e) => setReview({...review, rating: e.target.value})} /> 
                            <Divider variant="middle" flexItem style={{background: 'black'}}/>
                            <TextField label="Review" variant="outlined" fullWidth multiline rows={3} value={review.review} onChange={(e) => setReview({...review, review: e.target.value})}/>
                            <Button variant="contained" onClick={handleUpdateReview}>Save change</Button>
                            </>)
                        }
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Button startIcon={<EditIcon />} onClick={handleEditable}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Button startIcon={<DeleteIcon />} onClick={() => dispatch(deleteReview(myReview._id))}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default MyReview;
