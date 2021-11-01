import React, { useState, useEffect } from 'react';
import gamedev from '../../img/carousel/game_dev.png'
import mobapp from '../../img/carousel/mob_app.png'
import sec from '../../img/carousel/sec.png'
import webapp from '../../img/carousel/web_dev.png'
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';
import CarouselItem from '../LandingPage/CarouselItem';
import { useSelector } from 'react-redux';
import CarouselItemCompany from './CarouselItemCompany';
import CarouselItemFreelancer from './CarouselItemFreelancer';

const Tasks = ({}) => {
    const [user,setUser] =useState(JSON.parse(localStorage.getItem('profile')));
    const joboffers = useSelector((state) => state.joboffers);
    let joboffersByCompany = joboffers.filter(function (e) {
        return (e.programmer == user.result.email && e.status == 'accepted');
    });
    return (
        <CarouselStyled>
            <div className="carousel">
                <h1>Ongoing tasks</h1>
            </div>

            <Carousel itemsToShow={4}>
                {
                    joboffersByCompany.map( (item) => {
                        if(item.description.includes('Web'))
                            return (
                                <CarouselItemFreelancer name= {item.name} image={webapp} value={item.percentage} item={item}/>
                            )

                        else if(item.description.includes("Mobile"))
                            return (
                                <CarouselItemFreelancer name={item.name} image={mobapp} value={item.percentage} item={item}/>
                            )


                        else if(item.description.includes("Game"))
                            return (
                                <CarouselItemFreelancer name={item.name} image={gamedev} value={item.percentage} item={item}/>
                            )

                        else
                            return (
                                <CarouselItemFreelancer name={item.name} image={sec}  value={item.percentage} item={item}/>
                            )
                        // )}
                    })
                }

            </Carousel>
        </CarouselStyled>

    )}
const CarouselStyled = styled.div`
            h1{
                margin-top: 400px;
                position:relative;
                display: flex;
                padding-left: 100px;
                margin-bottom: 30px;
                color: #16194F;
                font-weight: 600;
            }
        `;

export default Tasks