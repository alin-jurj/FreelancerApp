import React from 'react';
import Carousel from 'react-elastic-carousel';
import { CarouselItemComponent } from '../LandingPage/CarouselItemComponent';
import styled from 'styled-components';
import CarouselItem from '../LandingPage/CarouselItem';
import SearchBar from './SearchBar';
const Tasks = () => {

    return (
        <CarouselStyled>
        <div className="carousel">
            <h1>Ongoing tasks</h1>
        </div>
            
            <Carousel itemsToShow={4}>
                {CarouselItemComponent.map( (item) => {
                    return (
                        <CarouselItem name={item.name} image={item.image} />
                    )
                }

                )}

            </Carousel>
            </CarouselStyled>
    );
}
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
export default Tasks;