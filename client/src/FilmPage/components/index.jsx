
import React from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import FilmCard from './FilmCard';
import CommentsBox from './CommentsBox';

import InfiniteScroll from 'react-infinite-scroller';
import { CircularProgress } from 'material-ui/Progress';


const styles = {
    commentsBox:{
        width: "70%",
    }

};

const FilmPage = (props) => {
    const { comments } = props.film;
    return (
        <Grid container cols={1} justify="center" >
            <FilmCard {...props}/>
            <div className={props.classes.commentsBox}>
                <CommentsBox commentsData={comments || []}/>
            </div>
        </Grid>

    );
}

FilmPage.propTypes = {
    film: PropTypes.object.isRequired
}

export default withStyles(styles)(FilmPage);