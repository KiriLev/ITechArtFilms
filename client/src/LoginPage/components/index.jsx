import React from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';
import { Form, Field, change, reduxForm } from 'redux-form'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

import { withStyles } from 'material-ui/styles';
import TextField from './TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
    root: {
        textAlign: "center"
    },

};

const LoginPage = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Form onSubmit={(e) => {
                props.onSubmit(e);
                props.reset();
            }}>
                <Field
                    name="username"
                    component={TextField}
                    label="Username"
                /><br /><br />

                <Field
                    name="password"
                    component={TextField}
                    label="Password"
                    type="password"
                /><br />

                <Button type="submit"  >
                    Login
                </Button>
            </Form>
        </div>
    );
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

export default withStyles(styles)(reduxForm({ form: 'users' })(Users));