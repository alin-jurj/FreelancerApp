import React from 'react';
import styled from 'styled-components';
import bg from '../../img/bg.svg';
import HeaderContent from './HeaderContent';
import Navigation from './Navigation';

const Header = () => {
    return (
        <div>
            <HeaderStyle>
                <div className="header-content">
                    <Navigation />
                    <HeaderContent />
                </div>
            </HeaderStyle>
        </div>
    );
}

const HeaderStyle = styled.header`
    height: 100vh;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    background-position-y: 100%;
    .header-content{
        padding: 0 10rem;
    }
`;

export default Header;