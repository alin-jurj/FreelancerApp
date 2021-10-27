import React from 'react';
import { getUserProjects } from '../../../actions/portofolio';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import ProjectCard from './ProjectCard';
import Carousel from 'react-elastic-carousel';

const Projects = ({user}) => {
    const projects = useSelector((state) => state.projects);
    let portofolio = projects.filter(function (e) {
        return e.username === user.email;
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
