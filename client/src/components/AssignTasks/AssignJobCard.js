import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import {Grid, Typography, Paper, Button, TextField, InputAdornment} from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import EuroIcon from '@mui/icons-material/Euro';
import { useDispatch } from 'react-redux';
import { updateJobOffer } from '../../actions/joboffers';
const AssignJobCard = ({joboffer}) => {
    const dispatch = useDispatch();
    const history= useHistory();
   
    const [newjob,setjob]= useState({company: joboffer.company,
        companyname: joboffer.companyname,
        description: joboffer.description,
        name: joboffer.name,
        programmer: joboffer.programmer,
        status: joboffer.status,
        percentage: 0,
        price: joboffer.price,
    });
  const AcceptOffer = () => {
        setjob({...newjob, status: 'accepted'});
        dispatch(updateJobOffer(joboffer._id,newjob));
  }
  const DeniedOffer = () => {
    setjob({...newjob, status: 'denied'});
   dispatch(updateJobOffer(joboffer._id,newjob));
}
    return (
        <Paper elevation={6} style={{paddingTop:'20px', paddingBottom:'20px'}}>
        <Grid container rowSpacing={3} justifyContent="space-between" style={{paddingLeft:'15px'}}>
            <Grid item xs={3} >
                <Typography variant="h6" style={{fontFamily:'Nunito'}}>{joboffer.name}</Typography>
            </Grid>
            <Grid item xs={7}>
                <Typography variant="body1" style={{fontFamily:'Nunito'}} alignItems="flex-start">{joboffer.description}</Typography>
            </Grid>        
            <Grid item xs={2} justifyContent="flex-end" >
            <Typography variant="h6" style={{fontFamily:'Nunito'}}> {joboffer.price} <EuroIcon/> </Typography>
            </Grid>
        </Grid>
        <Grid item xs={10}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={2} style={{paddingTop: '10px'}}>
                        <div>
                            <Button startIcon= {<CheckIcon/>} onClick={AcceptOffer} />
                            <Button startIcon={ <CloseIcon/>}  onClick={DeniedOffer}/>
                        </div>
                    </Grid>

        </Paper>
    )
}

export default AssignJobCard
