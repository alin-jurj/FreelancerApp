import React, { useState, useRef }from "react";
import GlobalStyle from '../LandingPage/GlobalStyle';
import { Typography, Button, Grid, TextField, Container, Paper, Avatar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import { addProject } from '../../actions/portofolio';

const AddProject = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const initialState = {name: '', username: user.result.email, description: '', photo: '', githubLink: ''};
    const [projectFormOpen, setProjectFormOpen] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const [projectData, setProjectData] = useState(initialState);

    const handleShowProject = () => setProjectFormOpen(!projectFormOpen);

    const handleAddProject = async (e) => {
        e.preventDefault();
        dispatch(addProject(projectData));
        document.getElementById('name').value = "";
        document.getElementById('description').value = "";
        document.getElementById('github').value = "";
        setProjectData(initialState);
        handleShowProject();
    }

    return (
        <>
        <GlobalStyle />
        <Container component="main" maxWidth="sm" spacing={3}>
            <Grid item xs={12} >
                <Button variant="text" color="inherit" alignContent="left" fullWidth endIcon={projectFormOpen ? <CloseIcon /> : <AddIcon /> } onClick={handleShowProject}>
                    {projectFormOpen ? "Close Form" : "Add Project" }
                </Button>
            </Grid>
            {
                projectFormOpen && (
                <>
                    <form>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField id="name" name="name" style={{backgroundColor:'white', borderRadius:'5px'}} fullWidth required label="Project Name" variant="outlined" value={projectData.name} onChange={(e) => setProjectData({ ...projectData, name: e.target.value })}/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="description" name="description" style={{backgroundColor:'white', borderRadius:'5px'}} fullWidth required label="Project Description" variant="outlined" multiline rows={4} value={projectData.description} onChange={(e) => setProjectData({ ...projectData, description: e.target.value })}/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="github" name="githubLink" style={{backgroundColor:'white', borderRadius:'5px'}} fullWidth required label="Github Link" variant="outlined" value={projectData.githubLink} onChange={(e) => setProjectData({ ...projectData, githubLink: e.target.value })}/>
                            </Grid>
                            <div  style={{paddingLeft: '15px', marginBottom: '10px'}}>
                                <Typography variant="subtitle2">Choose photo</Typography>
                                <FileBase id="photo" type="file" multiple={false} onDone={({ base64 }) => setProjectData({ ...projectData, photo: base64 })} />
                            </div>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" fullWidth style={{marginBottom: '10px'}} onClick={handleAddProject}>add</Button>
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

export default AddProject;
