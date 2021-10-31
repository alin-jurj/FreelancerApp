
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getUserProjects } from '../../actions/portofolio'
import { CircularProgress } from '@material-ui/core';
import { Container } from "@material-ui/core";
import { Card, CardMedia, CardActions, CardContent, Button, Typography, IconButton, Grid, Link } from '@material-ui/core';

import Carousel from 'react-elastic-carousel';
export default function PortfolioList() {
  const user = JSON.parse(localStorage.getItem('profile'));
  const projects = useSelector((state) => state.projects);
  
  const dispatch = useDispatch();
  let portofolio = projects.filter(function (e) {
    return e.username === user.result.email;
})
  return(
  !portofolio.length ? <CircularProgress /> : (
    <Carousel itemsToShow={3}>
    {portofolio.map((d) => (
      <Card>
      <CardMedia component="img" height="200" src={d.photo} />
      <Grid container justifyContent="flex-end">
      <Grid item xs={6}>
          <CardContent>
          <Link href={d.githubLink}>{d.name} </Link>
          </CardContent>
      </Grid>
      </Grid>
      </Card>
      ))}

  </Carousel>
  )
  );

}
