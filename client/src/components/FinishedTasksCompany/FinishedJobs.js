import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import {Grid, Typography, Paper, Button, TextField, InputAdornment} from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import EuroIcon from '@mui/icons-material/Euro';
import { useDispatch } from 'react-redux';
import { getJoboffers, updateJobOffer } from '../../actions/joboffers';


const FinishedJobs = ({item}) => {
    const dispatch = useDispatch();
    const history= useHistory();
    

    const [newstatus,setStatus]= useState({company: item.company,
        companyname: item.companyname,
        description: item.description,
        name: item.name,
        programmer: item.programmer,
        status: item.status,
        percentage: item.percentage,
        price: item.price,
    });


    const handleOffer = () => {
        setStatus({...newstatus, status: 'paid'});
        dispatch(updateJobOffer(item._id,newstatus));
    }
    return (
        <Paper elevation={6} style={{paddingTop:'20px', paddingBottom:'20px'}}>
            <Grid container rowSpacing={3} justifyContent="space-between" style={{paddingLeft:'15px'}}>
                <Grid item xs={3} >
                    <Typography variant="h6" style={{fontFamily:'Nunito'}}>{item.name}</Typography>
                </Grid>
                <Grid item xs={7}>
                    <Typography variant="body1" style={{fontFamily:'Nunito'}} alignItems="flex-start">{item.description}</Typography>
                </Grid>
                <Grid item xs={2} justifyContent="flex-end" >
                    <Typography variant="h6" style={{fontFamily:'Nunito'}}> {item.price} <EuroIcon/> </Typography>
                </Grid>
            </Grid>
            <Grid item xs={10}>
                &nbsp;
            </Grid>
            <Grid item xs={2} style={{paddingTop: '10px'}}>
                <div>
                    <h6>PAY: </h6>
                    <Button startIcon= {<CheckIcon/>}  onClick={handleOffer}/>
                </div>
            </Grid>

        </Paper>
    )
}

export default FinishedJobs