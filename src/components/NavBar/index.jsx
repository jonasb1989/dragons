import React from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/logo.svg';

import './index.scss';

const NavBar = ({ onLogOut }) => {
    return (
        <div className="nav-bar">
            <div className="nav-bar-logo">
                <Logo />
            </div>
            <div className="nav-bar-options">
                <Link className="option" to="/DragonsList">DRAGÕES</Link>
                <Link className="option" to="/Cadastro">CADASTRAR</Link>
                <Link className="option" to="/" onClick={onLogOut}>LOG OUT</Link>
            </div>
        </div>
    );
};

export default NavBar;
