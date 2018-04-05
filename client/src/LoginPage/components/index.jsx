import React from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';
import { Form, Field, change, reduxForm } from 'redux-form'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { Link } from "react-router-dom";

import { withStyles } from 'material-ui/styles';
import TextField from './TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
    root: {
        textAlign: "center"
    },

};

const LoginPage = (props) => {
    const { classes, handleSubmit, onSubmit } = props;
    return (
        <div className={classes.root}>
            <Form onSubmit={handleSubmit(onSubmit)}>
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


                <Link to={`register`} style={{ textDecoration: 'none' }}>
                    <Button>
                        Sign in
                    </Button>
                </Link>

            </Form>
        </div>
    );
}

LoginPage.propTypes = {

    onSubmit: PropTypes.func.isRequired,
}

export default withStyles(styles)(reduxForm({ form: 'login' })(LoginPage));