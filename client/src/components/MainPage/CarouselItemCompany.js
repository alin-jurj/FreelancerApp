import React, {useState} from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import Progress from './Progress';
import { useHistory } from 'react-router';
import {HiPlus} from 'react-icons/hi';
import {useDispatch, useSelector} from "react-redux";
import { updateJobOffer } from '../../actions/joboffers';
import { height } from '@mui/system';
import { getJoboffers } from '../../actions/joboffers';
const CarouselItemCompany = ({name, image,value, item}) => {

    const dispatch = useDispatch();
    const history= useHistory();
    const [newstatus,setStatus]= useState({company: item.company,
        companyname: item.companyname,
        companydescription: item.companydescription,
        name: item.name,
        programmer: item.programmer,
        status: item.status,
        percentage: item.percentage,
        price: item.price,
    });

    const updateLoading = () => {
            setStatus({...newstatus, percentage: item.percentage + 25});
            dispatch(updateJobOffer(item._id,newstatus))
            
            dispatch(getJoboffers());
            console.log(item.percentage);
    }

    return (
        <CarouselItemStyled>
            <div className="container">
                <img className="media" height="400px"  src={image} alt={name} />
                <div className="overlay">
                    <Typography className="text" variant="h6">{name}</Typography>
                </div>
               { value<100? (
                <div className="bar">
                    <Progress value= {value} max={100} />
                    <HiPlus style={ {width: '15px'} ,{height:'15px'}, {color:'white'} } onClick={updateLoading}/>
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
