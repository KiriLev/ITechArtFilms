import React from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';

import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
    root: {
        textAlign: "center"
    }
};

const Users = (props) => {
    const { classes } = props;

    return (
        <MuiThemeProvider  >
            <div className={classes.root}>
                <div>
                    <TextField value={props.newUserName} onChange={props.onFieldChange}/>
                    <Button onClick={props.addUser} >
                        Add
                    </Button>
                </div>
                <div>
                    {props.users}
                </div>
            </div>
        </MuiThemeProvider>


    );
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

export default withStyles(styles)(Users);