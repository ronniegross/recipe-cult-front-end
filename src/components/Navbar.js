import React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

export default function Navbar() {
    const NavBarContainer = styled.div`
        margin-bottom: 50px;
    `
    return (
        <NavBarContainer>
            <AppBar className="navbar" position="static" color="primary">
                <Toolbar>
                    <Link to="/">
                        <Button>Home</Button>
                    </Link>
                    <Link to="/form">
                        <Button>Form</Button>
                    </Link>
                    <Link to="/table">
                        <Button>Table</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </NavBarContainer>
    );
};