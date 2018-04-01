

import React, { Component } from 'react';

import FilmPage from '../components';
import { connect } from 'react-redux';
import { GlobalServices } from '../../services';
import { loadFilm } from '../actions'
import { bindActionCreators } from 'redux';


class FilmPageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading:true
        }
        this.getFilm = this.getFilm.bind(this);
        this.getFilm();

    }

    getFilm(){
        const id = this.props.match.params.id;
        GlobalServices.getFilm(id).then((film) => {
            this.setState({ isLoading: false })
            this.props.loadFilmAction(film.data);
        }).catch(console.log);
    }

    render() {
        const props = {
            film: this.props.film,
            isLoading: this.state.isLoading
        }
        return <FilmPage {...props}/>;
    }
}

const mapStateToProps = function (state) {
    return {
        film: state.filmPage.film
    }
}

const mapDispatchToProps = function (dispatch) {
    return bindActionCreators({
        loadFilmAction: loadFilm
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(FilmPageContainer);
