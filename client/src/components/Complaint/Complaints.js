import { Grid, Divider, Paper, Typography,Button,IconButton } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { deleteComplaint } from '../../actions/complaint';
import Complaint from './Complaint';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { getComplaints } from '../../actions/complaint';
const Complaints = () => {
    const dispatch = useDispatch();
    const complaints = useSelector((state) => state.complaints);
    
    useEffect(() => {
      dispatch(getComplaints());
  }, [dispatch]);

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
                                <Grid justifyContent="space-between" item xs={12}>
                                    <div>reason: {complaint.reason}</div>
                                    <Button style={{marginLeft: '1500px',marginBottom: '50px'}} onClick={() => dispatch(deleteComplaint(complaint._id))}>
                                    <IconButton>
                                    <DeleteIcon fontSize="large"/>
                                    </IconButton>
                                    </Button>
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
