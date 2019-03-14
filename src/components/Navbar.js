import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <AppBar className="navbar" position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                    React
                    </Typography>
                </Toolbar>
                </AppBar>
            </div>
         );
    }
}
 
export default Navbar;