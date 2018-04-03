import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import MainpageReducers from '../Mainpage/reducers'
import FilmPageReducers from '../FilmPage/reducers'
import RegisterPageReducers from '../RegisterPage/reducers'


export default combineReducers({
   // user: userReducer,
    form: formReducer,
    mainPage: MainpageReducers,
    filmPage: FilmPageReducers,
    registerPage: RegisterPageReducers,
});