import { Grid, Divider } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import CompanyCard from './CompanyCard';

const Companies = () => {
    const companies = useSelector((state) => state.users);

    
    return (
        <div>
            <Grid container spacing={4} justifyContent="flex-start" style={{paddingLeft: '40px', paddingRight: '40px', paddingTop: '100px'}}>
            <Grid item>
                <Divider variant="middle" style={{marginBottom: '50px'}}/>
            </Grid>
            {companies.map( (company) => {
                return (
                    <Grid item>
                        <CompanyCard company={company} />
                    </Grid>
                )
            })}
            </Grid>
        </div>
    )
}

export default Companies
