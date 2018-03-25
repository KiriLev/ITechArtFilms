import React from 'react';

import { withStyles } from 'material-ui/styles';

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';

import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';


const styles = {
    card: {
        maxWidth: 600,
        marginBottom: 50
    },
    media: {
        height: 500,
    },
};


const FilmCard = ({ classes, title, description, picLink }) => {
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={picLink}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                    {title}
                </Typography>
                <Typography component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    More
                </Button>
            </CardActions>
        </Card>

    );
}


export default withStyles(styles)(FilmCard);