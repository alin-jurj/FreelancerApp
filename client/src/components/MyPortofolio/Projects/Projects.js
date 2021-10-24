import React from 'react';
import { getUserProjects } from '../../../actions/portofolio';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import ProjectCard from './ProjectCard';
import Carousel from 'react-elastic-carousel';

const Projects = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const projects = useSelector((state) => state.projects);
    let portofolio = projects.filter(function (e) {
        return e.username === user.result.email;
    })

    

    return (
        !portofolio.length ? <CircularProgress /> : (
            <Carousel itemsToShow={3}>
            {portofolio.map( (project) => {
                return (
                    <ProjectCard project={project}/>
                )
            })}
        </Carousel>
        )
    );
}

export default Projects;
