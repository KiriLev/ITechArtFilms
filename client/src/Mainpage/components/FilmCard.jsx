import React from 'react';

import { withStyles } from 'material-ui/styles';

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';

import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import ReactStars from 'react-stars';


const styles = {
    card: {
        maxWidth: 600,
        marginBottom: 50
    },
    media: {
        height: 500,
    },
    rating:{
        width: "55%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    }
};


const FilmCard = ({ classes, title, description, picLink, rating }) => {
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
            <CardActions>
                <Button size="small" color="primary">
                    More
                </Button>
            </CardActions>
        </Card>

    );
}


export default withStyles(styles)(FilmCard);