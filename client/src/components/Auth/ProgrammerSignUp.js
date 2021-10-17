import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signup } from '../../actions/auth';

const initialState = { name: '', phone: '',email:'', password: '', confirmPassword: '', type: 'freelancer' };

const ProgrammerSignUp = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [formData, setFormData] = useState(initialState);


    const submitSignUp = (e) => {
        e.preventDefault();
        //console.log(formData);
        dispatch(signup(formData, history));
        history.push('/addProject');
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField name="name" fullWidth required label="Name" variant="outlined" onChange={handleChange}/>
            </Grid>
            <Grid item xs={12}>
            <TextField name="phone" fullWidth required label="Phone Number" variant="outlined"  onChange={handleChange}/>
            </Grid>
            <Grid item xs={12}>
            <TextField name="email" fullWidth required label="Email Adress" variant="outlined" onChange={handleChange}/>
            </Grid>
            <Grid item xs={12}>
            <TextField name="password" fullWidth required label="Password" type="password" variant="outlined" onChange={handleChange}/>
            </Grid>
            <Grid item xs={12}>
            <TextField name="confirmPassword" fullWidth required label="Confirm Pasword" type="password" variant="outlined" onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth style={{marginBottom: '10px'}} onClick={submitSignUp}>Submit</Button>
            </Grid>
        </Grid>
    )
}

export default ProgrammerSignUp
