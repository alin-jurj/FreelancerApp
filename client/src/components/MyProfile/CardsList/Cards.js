import React from 'react';
import { getUserCreditCards } from '../../../actions/CreditCard';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import DesignCard from './DesignCard'
import Carousel from 'react-elastic-carousel';

 export const Cards = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const CreditCards = useSelector((state) => state.CreditCards);
    let credit = CreditCards.filter(function (e) {
        return e.username === user.result.email;
    })

    return (
        !credit.length ? <CircularProgress /> : (
            <Carousel itemsToShow={3}>
            {credit.map( (project) => {
                return (
                    <DesignCard project={project}/>
                )
            })}
        </Carousel>
        )
    );
}


