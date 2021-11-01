import React, {useEffect, useState} from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import Progress from './Progress';
import { useHistory } from 'react-router';
import {HiPlus} from 'react-icons/hi';
import {useDispatch, useSelector} from "react-redux";
import { updateJobOffer } from '../../actions/joboffers';
import { height } from '@mui/system';
import { getJoboffers } from '../../actions/joboffers';
import { collapseClasses } from '@mui/material';
const CarouselItemCompany = ({name, programmer, image,value, item}) => {
  
    return (
        <CarouselItemStyled>
            <div className="container">
                <img className="media" height="400px"  src={image} alt={name} />
                <div className="overlay">
                    <Typography className="text" variant="h6">{name}</Typography>
                    <Typography className="text" variant="h6">{programmer}</Typography>
                </div>
               { value<100? (
                <div className="bar">
                    <Progress value= {value} max={100} />
                </div>  
               ):
               ( <div className="bar" >Finished</div>)   
            }
                </div>
        </CarouselItemStyled>
    );
}

const CarouselItemStyled = styled.div`
    .container{
        position: relative;
        text-align: center;
        color: white;
        cursor: pointer;
    }
    .media{
        filter: brightness(60%);
    }
    .media:hover{
        filter: brightness(40%);
    }
    .overlay{
        position: absolute;
        top: 8px;
        left: 15px;
    }
    .bar{
        position: absolute;
        top: 330px;
        left: 15px;
    }
`;

export default CarouselItemCompany;
