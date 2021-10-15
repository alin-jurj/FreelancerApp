import React from 'react';
import styled from 'styled-components';
import logo from '../../img/logo.svg';
import { useHistory, Link } from 'react-router-dom';


const Navigation = () => {
    const history = useHistory();

    const goToSignUp = () => {
        history.push('/signin');
    }
    
    return (
        <NavigationStyle>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Features</a>
                </li>
                <li>
                    <a href="">Pricing</a>
                </li>
            </ul>
            <Link to="/signup">Sign Up</Link>
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
