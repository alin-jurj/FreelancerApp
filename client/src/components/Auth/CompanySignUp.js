import { Button, Grid, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signup } from '../../actions/auth';
import  useStyle from './styles';
import FileBase from 'react-file-base64';

const initialState = { name: '', email:'', password: '', confirmPassword: '',photo: '',description: '', type: 'company' };

const CompanySignUp = () => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const history = useHistory();
    const [formData, setFormData] = useState(initialState);


    const submitSignUp = (e) => {
        e.preventDefault();
        //console.log(formData);
        dispatch(signup(formData, history));
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <Grid container spacing={2}>
            <div className={classes.fileInput} style={{paddingLeft: '15px', marginBottom: '10px'}}>
                <Typography variant="subtitle2">Choose profile photo</Typography>
                <FileBase type="file" multiple={false} onDone={({ base64 }) => setFormData({ ...formData, photo: base64 })} />
            </div>
            <Grid item xs={12}>
                <TextField name="name" fullWidth required label="Company Name" variant="outlined" onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
                <TextField name="description" fullWidth required label="Company Description" multiline rows={4} variant="outlined" onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
            <TextField name="email" fullWidth required label="Email Adress" variant="outlined" onChange={handleChange}/>
            </Grid>
            <Grid item xs={12}>
                <TextField name="password" fullWidth required label="Password" type="password" variant="outlined" onChange={handleChange}/>
            </Grid>
            <Grid item xs={12}>
                <TextField name="confirmPassword" fullWidth required label="Confirm Password" type="password" variant="outlined" onChange={handleChange}/>
            </Grid>
            <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth style={{marginBottom: '10px'}} onClick={submitSignUp}>Submit</Button>
            </Grid>
        </Grid>
    );
}

export default CompanySignUp;
