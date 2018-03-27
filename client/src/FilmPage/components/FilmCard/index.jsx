import React from 'react';

import { withStyles } from 'material-ui/styles';

import Card, { CardContent} from 'material-ui/Card';

import Typography from 'material-ui/Typography';
import ReactStars from 'react-stars';

import styles from './styles';

import Grid from 'material-ui/Grid';
import PicsGallery from './PicsGallery';
import { CircularProgress } from 'material-ui/Progress';



const FilmCard = ({ classes, film, isLoading }) => {
    const { title, description, picLinks, rating } = film;
    return (
        <Card className={classes.card}>
            {
                (film.length === 0) ?
                    <CircularProgress active />
                    :
                    <div>
                        <PicsGallery images={picLinks.map(picLink => { return { src: picLink } })}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">
                                {title}
                            </Typography>
                            <div className={classes.rating}>
                                <ReactStars
                                    count={10}
                                    value={rating}
                                    edit={false}
                                    size={24}
                                />
                                <Typography variant="headline" component="h2">
                                    {rating}
                                </Typography>
                            </div>

                            <Typography component="p">
                                {description}
                            </Typography>
                        </CardContent>
                    </div>
            }
        </Card>



    );
}


export default withStyles(styles)(FilmCard);