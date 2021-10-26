import { Grid, Divider, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';

const Complaints = () => {
    const complaints = useSelector((state) => state.complaints);

    return (
        <div>
            <Grid container spacing={4} justifyContent="flex-start" style={{paddingLeft: '40px', paddingRight: '40px', paddingTop: '100px'}}>
            <Grid item>
                <h3>Complaints</h3>
            </Grid>
            <Grid item>
                <Divider variant="middle" style={{marginBottom: '50px'}}/>
            </Grid>
            {complaints.map( (complaint) => {
                return (
                    <Grid item xs={12}>
                        <Paper>
                            <Grid container>
                                <Grid item xs={12}>
                                    <div>from: {complaint.from}</div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div>against: {complaint.against}</div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div>reason: {complaint.reason}</div>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                )
            })}
            </Grid>
        </div>
    );
}

export default Complaints;
