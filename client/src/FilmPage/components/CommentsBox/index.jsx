import React from 'react';

import { withStyles } from 'material-ui/styles';

import Card, { CardContent} from 'material-ui/Card';

import Typography from 'material-ui/Typography';
import ReactStars from 'react-stars';

import styles from './styles';

import Grid from 'material-ui/Grid';
import CommentCard from './CommentCard';
import { CircularProgress } from 'material-ui/Progress';



const CommentsBox = (props) => {
    const { commentsData, classes } = props;
    return (
        commentsData.map(comment => <CommentCard classes={classes} commentData={comment}/>)
    );
}

export default withStyles(styles)(CommentsBox);