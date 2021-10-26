import React, { useEffect, useState } from "react";
import PortfolioList from "./PortfolioList";
import "./portfolio.scss";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getUserProjects } from '../../actions/portofolio'
import { Card, CardMedia, CardActions, CardContent, Button, Typography, IconButton, Grid, Link } from '@material-ui/core';
import ProjectCard from "../MyPortofolio/Projects/ProjectCard";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";
import { getUsers } from "../../api";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const user = JSON.parse(localStorage.getItem('profile'));
  const projects = useSelector((state) => state.projects);
  
  const dispatch = useDispatch();
  let portofolio = projects.filter(function (e) {
    return e.username === user.result.email;
})

  useEffect(() => {
    dispatch(getUserProjects());
  }, [dispatch]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {portofolio.map((d) => (
           <div className="item">  
            <h3> {d.name}</h3>
            <Link href={d.githubLink}> 
           <img src={d.photo} alt=""/>
           </Link>
            
            <div/>
          </div>
        ))}
     </div>
    </div>
  );
}