import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';



export default ({ classes, commentData: {date, username, commentText}}) => {
    return (
        <div>
        <Card className={classes.card}>
          <CardHeader
            title={username}
            subheader={date}
          />
          <CardContent>
            <Typography component="p">
              {commentText}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
}

