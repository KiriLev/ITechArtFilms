import React from 'react';

import { withStyles } from 'material-ui/styles';

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import { Link } from "react-router-dom";

import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import ReactStars from 'react-stars';

import styles from './styles';


const FilmCard = ({ classes, title, description, picLinks, rating, _id }) => {
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={picLinks[0]}
                title={title}
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
            </CardContent>
            <CardActions>
                <Link to={`films/${_id}`} style={{ textDecoration: 'none' }}>
                    <Button size="small" color="primary">
                        More
                    </Button>
                </Link>

            </CardActions>
        </Card>

    );
}


export default withStyles(styles)(FilmCard);