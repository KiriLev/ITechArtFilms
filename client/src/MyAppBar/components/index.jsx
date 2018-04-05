import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';

import { GlobalServices } from '../../services';


import { Link } from "react-router-dom";

const styles = {
    root: {
        flexGrow: 1,
    },

    flex: {
        flex: 1,
    },
    appbar:{
        backgroundColor:"rgb(209, 224, 224)"
    }
};

function MyAppBar(props) {
    const { classes, user, onLogout } = props;
    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        <Link to={``} style={{ textDecoration: 'none' }}>TopFilms</Link>
                    </Typography>
                    {user ?
                        <div>
                            <div>Hello, {user.username} </div>
                            <Button color="inherit" onClick={onLogout}>Logout</Button>
                        </div>
                        :
                        <Link to={`${process.env.PUBLIC_URL}/login`} style={{ textDecoration: 'none' }}>
                            <Button color="inherit">Login</Button>
                        </Link>
                    }

                </Toolbar>
            </AppBar>
        </div>
    );
}


MyAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(MyAppBar);