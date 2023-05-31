import React from 'react'
import logo from '../assets/logo-site.png'
import { Container } from './styles';

const Header = () => {
    return(
        <Container>
            <div className="header">
                <img src={logo} alt="LOGO PCWIZARD" className="logo"/>
            </div>
        </Container>
    );
};

export default Header
