import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { MainpageReducers } from '../Mainpage'
import { FilmPageReducers } from '../FilmPage'




export default combineReducers({
    mainPage: MainpageReducers.default,
    filmPage: FilmPageReducers.default,
});