import { Grid, Divider, CircularProgress } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import CompanyCard from './CompanyCard';

const Companies = () => {
    const users = useSelector((state) => state.users);
    {console.log(users)}
    let companies= users.filter(function (e) {
        return (e.type == "company");
    });
     {console.log(companies)}
    return (
        !companies.length ? <CircularProgress /> :
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
