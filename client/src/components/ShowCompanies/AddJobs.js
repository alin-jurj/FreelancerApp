import React, { useState, useRef }from "react";
import GlobalStyle from '../LandingPage/GlobalStyle';
import { Typography, Button, Grid, TextField, Container, Paper, Avatar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { addJobOffer } from "../../actions/joboffers";

const AddJobs = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const initialState = {company:user.result.email , 
        companyname: user.result.name, 
        description:'',
        name:'',
        programmer:'',
        status:'',
        percentage:0,
        price:0
    };
    const [JobofferFormOpen, setJobofferFormOpen] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const [JobofferData, setJobofferData] = useState(initialState);

    const handleShowJoboffer = () => setJobofferFormOpen(!JobofferFormOpen);

    const handleAddJoboffer = async (e) => {
        e.preventDefault();
        dispatch(addJobOffer(JobofferData));
        document.getElementById('name').value = "";
        document.getElementById('description').value = "";
        setJobofferData(initialState);
        handleShowJoboffer();
    }

    return (
        <>
        <GlobalStyle />
        <Container component="main" maxWidth="sm" spacing={3}>
            <Grid item xs={12} >
                <Button variant="text" color="black" alignContent="left" fullWidth endIcon={JobofferFormOpen ? <CloseIcon /> : <AddIcon /> } onClick={handleShowJoboffer}>
                    {JobofferFormOpen ? "Close Form" : "Add job offer" }
                </Button>
            </Grid>
            {
                JobofferFormOpen && (
                <>
                    <form>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField id="name" name="name" style={{backgroundColor:'white', borderRadius:'5px'}} fullWidth required label="Job offer Name" variant="outlined" value={JobofferData.name} onChange={(e) => setJobofferData({ ...JobofferData, name: e.target.value })}/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="description" name="description" style={{backgroundColor:'white', borderRadius:'5px'}} fullWidth required label="Joboffer Description" variant="outlined" multiline rows={4} value={JobofferData.description} onChange={(e) => setJobofferData({ ...JobofferData, description: e.target.value })}/>
                        </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" fullWidth style={{marginBottom: '10px'}} onClick={handleAddJoboffer}>add</Button>
                            </Grid>
                        </Grid>
                    </form>
                </>
                )
            }
        </Container>
        </>
    );
}

export default AddJobs;
