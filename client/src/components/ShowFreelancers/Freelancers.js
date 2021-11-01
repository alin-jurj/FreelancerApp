import { Grid, Divider, CircularProgress } from '@material-ui/core';
import React from 'react';

import { useSelector } from 'react-redux';
import CompanyCard from '../ShowCompanies/CompanyCard';
const Freelancers = () => {
    const freelancers = useSelector((state) => state.users);
    
    return (
            !freelancers.length ? <CircularProgress /> : 
            <div>
            <Grid container spacing={4} justifyContent="flex-start" style={{paddingLeft: '40px', paddingRight: '40px', paddingTop: '100px'}}>
            <Grid item>
                <Divider variant="middle" style={{marginBottom: '50px'}}/>
            </Grid>
            {freelancers.map( (freelancer) => {
                console.log(freelancers);
                return (
                    <Grid item>
                        <CompanyCard company={freelancer} />
                    </Grid>
                )
            })}
            </Grid>
        </div>
    )
}

export default Freelancers;
