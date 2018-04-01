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

const Users = (props) => {
    const { classes } = props;
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
                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Username</TableCell>
                                    <TableCell>Password</TableCell>
                                    <TableCell>CreatedAt</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.users.map(user => {
                                    return (
                                        <TableRow key={user._id}>
                                            <TableCell>{user.username}</TableCell>
                                            <TableCell>{user.hashedPassword}</TableCell>
                                            <TableCell>{user.created_at}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            </div>
        </MuiThemeProvider>
    );
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

export default withStyles(styles)(reduxForm({ form: 'users' })(Users));