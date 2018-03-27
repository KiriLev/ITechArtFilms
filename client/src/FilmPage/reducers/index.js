import { combineReducers } from 'redux';
import filmReducer from './film';


export default combineReducers({
    film: filmReducer
});