import React from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';
import { Form, Field, change, reduxForm } from 'redux-form'

import { withStyles } from 'material-ui/styles';
import TextField from './TextField';

const styles = {
    root: {
        textAlign: "center"
    },

};

const RegisterPage = (props) => {
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
                        Register
                    </Button>


            </Form>
        </div>
    );
}

RegisterPage.propTypes = {
    users: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

export default withStyles(styles)(reduxForm({ form: 'register', enableReinitialize: true })(RegisterPage));