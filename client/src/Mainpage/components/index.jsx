
import React from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import FilmCard from './FilmCard';
import InfiniteScroll from 'react-infinite-scroller';
import { CircularProgress } from 'material-ui/Progress';
import FilmsList from './FilmsList';


const styles = {
    root: {
        
    },

};

const Mainpage = (props) => {
    return (
        <FilmsList {...props}/>
    );
}

Mainpage.propTypes = {

}

export default withStyles(styles)(Mainpage);