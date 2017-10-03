import {combineReducers} from 'redux';
import formReducer from './reducer-form';
import liveUpdateCheckboxreducer from './reducer-liveupdate-checkbox';
// import formDataReducer from './reducer-form-data'

const allReducers = combineReducers({
    formItems : formReducer,
    liveUpdateCheckValue : liveUpdateCheckboxreducer

});

export default allReducers;