import React, {useEffect, useState} from 'react';
import { Typography,TextField } from '@material-ui/core';
import styled from 'styled-components';
import Progress from './Progress';
import { useHistory } from 'react-router';
import {HiPlus} from 'react-icons/hi';
import {useDispatch, useSelector} from "react-redux";
import { updateJobOffer } from '../../actions/joboffers';
import CheckIcon from '@mui/icons-material/Check';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
const CarouselItemFreelancer = ({name,image,value, item}) => {

    const dispatch = useDispatch();
    const history= useHistory();
    const [newstatus,setStatus]= useState({company: item.company,
        companyname: item.companyname,
        description: item.description,
        name: item.name,
        programmer: item.programmer,
        status: item.status,
        percentage: item.percentage,
        price: item.price,
    });  
    const FinishedOffer = () => {
        setStatus({...newstatus, status: 'finished'});
        dispatch(updateJobOffer(item._id,newstatus));
  }
    const updateLoading = () => { 
         dispatch(updateJobOffer(item._id,newstatus));   
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
                    <TextField className="overlay" label="" variant="outlined" style={{width:'100px',height:'1px'}}  onChange={(e) => setStatus({...newstatus, percentage: e.target.value}) }/>
                    {/* <HiPlus style={ {width: '15px'} ,{height:'15px'}, {color:'white'} } onClick={updateLoading}/> */}
                     <div className="check">
                     <CheckIcon onClick={updateLoading}/>
                     </div>
                </div>  
                 ):
                 ( <>
                     <div className="bar" >Finished</div>
                    <div className="check">
                    <AssignmentTurnedInIcon onClick={FinishedOffer}/>
                    </div>
                    </> 
                 ) 
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
        top: 17px;
        left: 17px;
    }
    .check{
        position: absolute;
        top: 22px;
        left: 120px;
    }
    .bar{
        position: absolute;
        top: 330px;
        left: 15px;
    }
`;

export default CarouselItemFreelancer;
