import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const CarouselItem = ({name, image}) => {
    return (
        <CarouselItemStyled>
        <div className="container">
            <img className="media" height="400px"  src={image} alt={name} />
            <div className="overlay">
                <Typography className="text" variant="h6">{name}</Typography>
            </div>
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
`;

export default CarouselItem;
