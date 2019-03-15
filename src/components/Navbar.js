import React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

export default function Navbar() {
    const NavBarContainer = styled.div`
        margin-bottom: 50px;
        .link {
            text-decoration: none;
        }
    `
    return (
        <NavBarContainer>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Link className="link" to="/">
                        <Button>Home</Button>
                    </Link>
                    <Link className="link" to="/form">
                        <Button>Form</Button>
                    </Link>
                    <Link className="link" to="/table">
                        <Button>Table</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </NavBarContainer>
    );
};