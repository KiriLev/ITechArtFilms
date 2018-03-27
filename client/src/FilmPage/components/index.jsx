
import React from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import FilmCard from './FilmCard';
import InfiniteScroll from 'react-infinite-scroller';
import { CircularProgress } from 'material-ui/Progress';


const styles = {
    root: {
        
    },

};

const FilmPage = (props) => {
    return (
        <Grid container justify="center" >
            <FilmCard {...props}/>
        </Grid>

    );
}

FilmPage.propTypes = {

}

export default withStyles(styles)(FilmPage);