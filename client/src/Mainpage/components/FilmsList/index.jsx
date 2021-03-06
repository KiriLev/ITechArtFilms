import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import FilmCard from '../FilmCard';
import InfiniteScroll from 'react-infinite-scroller';
import { CircularProgress } from 'material-ui/Progress';

import styles from './styles';

const FilmsList = (props) => {
    const { classes, films, getFilms, hasMore } = props;
    return (
        <Grid container justify="center" >
            <InfiniteScroll
                pageStart={0}
                loadMore={getFilms}
                hasMore={hasMore}
                loader={<CircularProgress />}
            >
                {films.map(film => {
                    return (
                        <Grid key={film._id} item xs={12}>
                            <FilmCard {...film} />
                        </Grid>
                    );

                })
                }

            </InfiniteScroll>
        </Grid>

    );
}

FilmsList.propTypes = {

}

export default withStyles(styles)(FilmsList);