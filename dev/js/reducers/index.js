import {combineReducers} from 'redux';
import formReducer from './reducer-form';

const allReducers = combineReducers({
    formItems : formReducer,
});

export default allReducers;