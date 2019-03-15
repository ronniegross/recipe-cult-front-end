import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <AppBar className="navbar" position="static" color="primary">
                <Toolbar>
                    <Link to="/">Home</Link>
                    <Link to="/form">Form</Link>
                    <Link to="/table">Table</Link>
                </Toolbar>
                </AppBar>
            </div>
         );
    }
}
 
export default Navbar;