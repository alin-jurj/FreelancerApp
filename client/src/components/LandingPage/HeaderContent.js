import React from 'react';
import styled from 'styled-components';
import freelancer from '../../img/freelancer.png';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import arrow from '../../img/arrow.svg';

const HeaderContent = () => {
    const history = useHistory();

    return (
        <HeaderContentStyled>
            <div className="left-content">
                <div className='left-text-container'>
                    <h1>Find the perfect freelance services for your business</h1>
                    <p className="white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <Button variant="contained"  style={{backgroundColor: "#16194F", color: 'white'}} onClick={() => history.push('/signup')}>
                        Register now &nbsp;
                        <img src={arrow} alt="arow" />
                        </Button>
                </div>
            </div>
            <div className="right-content">
                <img src={freelancer} alt="" />
            </div>
        </HeaderContentStyled>
    );
}

const HeaderContentStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .left-content{
        display: flex;
        align-items: center;
        h1{
            font-size: 3rem;
            font-weight: 600;
        }

        .white{
            padding: 1.6rem 0;
        }
    }


`;

export default HeaderContent;
