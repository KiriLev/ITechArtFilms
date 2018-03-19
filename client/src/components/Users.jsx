import React from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';
import { Form, Field, change, reduxForm } from 'redux-form'

import { withStyles } from 'material-ui/styles';
import TextField from './TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
    root: {
        textAlign: "center"
    }
};

const Users = (props) => {
    const { classes } = props;
    console.log(props);
    return (
        <MuiThemeProvider  >
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
                        Add
                    </Button>
                </Form>
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

export default withStyles(styles)(reduxForm({ form: 'users'})(Users));