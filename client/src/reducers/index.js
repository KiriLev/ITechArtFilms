import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form'
import { MainpageReducers } from '../Mainpage'


export default combineReducers({
    mainPage: MainpageReducers.default,
});