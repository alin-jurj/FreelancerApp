import React, { useState } from 'react';
import { Grid, Container, Paper, Avatar, TextField, Button, Typography, CircularProgress } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import FileBase from 'react-file-base64';
import  useStyle from './styles';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { addProject } from '../../actions/portofolio';


const AddProject = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const classes = useStyle();
    const history = useHistory();
    const dispatch = useDispatch();

    const [projectData, setProjectData] = useState({name: '', username: '', description: '', photo: '', githubLink: ''});

    if(!user) return null;

    const handleAddProject = async (e) => {
        e.preventDefault();
        setProjectData({...projectData, username: user.result.email});
        dispatch(addProject(projectData, history));
    }

    return (
        <StyledBody>
        <div>
            <Container component="main" maxWidth="xs">
            <Paper elevation={3} className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <AddIcon />
                </Avatar>
                <Typography variant="h5">Add Project</Typography>
                <form className={classes.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField name="name" fullWidth required label="Project Name" variant="outlined" value={projectData.name} onChange={(e) => setProjectData({ ...projectData, name: e.target.value })}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="description" fullWidth required label="Project Description" variant="outlined" multiline rows={4} value={projectData.description} onChange={(e) => setProjectData({ ...projectData, description: e.target.value })}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="githubLink" fullWidth required label="Github Link" variant="outlined" value={projectData.githubLink} onChange={(e) => setProjectData({ ...projectData, githubLink: e.target.value })}/>
                        </Grid>
                        <div className={classes.fileInput} style={{paddingLeft: '15px', marginBottom: '10px'}}>
                            <Typography variant="subtitle2">Choose photo</Typography>
                            <FileBase type="file" multiple={false} onDone={({ base64 }) => setProjectData({ ...projectData, photo: base64 })} />
                        </div>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" fullWidth style={{marginBottom: '10px'}} onClick={handleAddProject}>add</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
        </div>
        </StyledBody>
    );
}

const StyledBody = styled.div`
  background: url('https://svgshare.com/i/bCk.svg');
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

export default AddProject;
