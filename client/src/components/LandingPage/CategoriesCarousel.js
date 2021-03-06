import React from 'react';
import Carousel from 'react-elastic-carousel';
import CarouselItem from './CarouselItem';
import { CarouselItemComponent } from './CarouselItemComponent';
import styled from 'styled-components';

const CategoriesCarousel = () => {

    return (
        <CarouselStyled>
        <div className="carousel">
            <h1>Popular fields</h1>
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
        margin-top: 40px;
        display: flex;
        padding-left: 100px;
        margin-bottom: 30px;
        color: #16194F;
        font-weight: 600;
    }
`;

export default CategoriesCarousel;
