

import React, { Component } from 'react';

import Mainpage from '../components';
import { connect } from 'react-redux';
import { GlobalService } from '../../services';
import { loadFilms } from '../actions'
import { bindActionCreators } from 'redux';


class LoginPageContainer extends Component {

    constructor(props) {
        super(props);
        
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(page){
        LoginService.getFilms(offset, numOfCardsOnPage).then((films) => {
            if (films.data.length < numOfCardsOnPage){
                this.setState({ hasMore: false })
            }
            this.props.loadFilmsAction(films.data);

        }).catch(console.log);
    }

    render() {
        
        const props = {
            films: this.props.films,
            getFilms: this.getFilms,
            hasMore: this.state.hasMore
        }
        return <Mainpage {...props}/>;
    }
}

const mapStateToProps = function (state) {
    return {
        films: state.mainPage.films
    }
}

const mapDispatchToProps = function (dispatch) {
    return bindActionCreators({
        loadFilmsAction: loadFilms
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);
