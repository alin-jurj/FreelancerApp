import React from 'react';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import logo from '../../img/logo.svg';

const Navigation = () => {
    return (
        <NavigationStyle>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul>
                <l1>
                    <a href="">Home</a>
                </l1>
                <l1>
                    <a href="">Features</a>
                </l1>
                <l1>
                    <a href="">Pricing</a>
                </l1>
            </ul>
            <PrimaryButton name={'Sign Up'} />
        </NavigationStyle>
    );
}

const NavigationStyle = styled.nav`
    display: flex;
    justify-content: space-between;
    min-height: 10vh;
    align-items: center;

    ul{
        padding: 35px;
        display: flex;
        justify-content: space-between;
        width: 40%;
        list-style: none;
        box-sizing: border-box;
    }
    a{
        color: white;
        text-decoration: none;
    }
`;

export default Navigation;
