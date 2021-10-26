import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import JobOfferCard from './JobOfferCard';

const ShowJobOffers = ({name, email}) => {
    const joboffers = useSelector((state) => state.joboffers);

    let joboffersByCompany = joboffers.filter(function (e) {
        return (e.company === email && e.status === '');
    });

    return (
        <Grid container spacing={3} elevation={4}>
            <Typography variant="h4" style={{paddingLeft:'15px', fontFamily:'Nunito', color:'#0b31b6'}}>{name}'s Job Offers</Typography>
            {
                joboffersByCompany.map((joboffer) =>{
                    return (
                        <Grid item xs={12}>
                            <JobOfferCard joboffer={joboffer} />
                        </Grid>
                    )
                })
            }
        </Grid>
    );
}

export default ShowJobOffers;
