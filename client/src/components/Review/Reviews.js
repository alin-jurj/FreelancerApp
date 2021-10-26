import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getReviews } from '../../actions/review';
import { useDispatch } from 'react-redux';
import ReviewCard from './ReviewCard';
import AddReview from './AddReview';
import MyReview from './MyReview';

const Reviews = ({company}) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const allReviews = useSelector((state) => state.reviews);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReviews());
    }, [dispatch]);

    if(!allReviews) return null;

    const reviews = allReviews.filter( function(e) {
        return (e.to === company.name && e.from !== user.result.name);
    });

    const myReview = allReviews.filter(function(e) {
        return (e.to === company.name && e.from === user.result.name);
    })

    //if(!myReview[0]) return null;

    return (
        <Grid container spacing={3} elevation={4}>
            <Typography variant="h4" style={{paddingLeft:'15px', fontFamily:'Nunito', color:'#0b31b6'}}>Reviews </Typography>
            <Grid item xs={12}>
                {
                    (!myReview[0] && ( user.result.type === 'freelancer' || user.result.type === 'company') ) && <AddReview name={user.result.name} photo={user.result.photo} company={company.name}/>
                }
            </Grid>
            <Grid item xs={12}>{
                myReview[0] && <MyReview myReview={myReview[0]} />
            }
            </Grid>
                {
                    reviews.map((review) =>{
                        return (
                            <Grid item xs={12}>
                                <ReviewCard name={review.from} photo={review.photo} rating={review.rating} review={review.review} />
                            </Grid>
                        )
                    })
                }
        </Grid>
    );
}

export default Reviews;
