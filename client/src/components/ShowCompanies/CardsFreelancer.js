import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import DesignCard from '../MyProfile/CardsList/DesignCard';
import Carousel from 'react-elastic-carousel';
import { getUserCreditCards } from '../../actions/CreditCard';
import { useDispatch } from 'react-redux';
   const CardsFreelancer = ({user}) => {
    
    const CreditCards = useSelector((state) => state.CreditCards);
    let credit = CreditCards.filter(function (e) {
        return e.username === user.email;
    })

    return (
        !credit.length ? <CircularProgress /> : (
            <Carousel itemsToShow={3}>
            {credit.map( (project) => {
                console.log(credit);
                return (
                    <DesignCard project={project}/>
                )
            })}
        </Carousel>
        )
    );
}
export default CardsFreelancer;