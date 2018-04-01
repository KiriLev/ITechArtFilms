import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { MainpageReducers } from '../Mainpage/reducers'
import { FilmPageReducers } from '../FilmPage/reducers'




export default combineReducers({
    mainPage: MainpageReducers.default,
    filmPage: FilmPageReducers.default,
});