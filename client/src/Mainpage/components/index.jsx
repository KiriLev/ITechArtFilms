
import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';


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