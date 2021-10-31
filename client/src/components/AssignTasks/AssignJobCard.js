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
    const [newstatus,setStatus]= useState({company: joboffer.company,
        companyname: joboffer.companyname,
        companydescription: joboffer.description,
        name: joboffer.name,
        programmer: joboffer.programmer,
        status: joboffer.status,
        percentage: 0,
        price: joboffer.price,
    });
  const handleOffer = (decision) => {
        setStatus({...newstatus, status: decision});
       
       
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
                            <Button startIcon= {<CheckIcon/>}  onClick={handleOffer("accepted")}/>
                            <Button startIcon={ <CloseIcon/>} onClick={handleOffer("denied")} />
                        </div>
                    </Grid>

        </Paper>
    )
}

export default AssignJobCard
