import {combineReducers} from 'redux';
import formReducer from './reducer-form';
import liveUpdateCheckboxreducer from './reducer-liveupdate-checkbox';
import addressBookReducer from './reducer-address-book';
import showAllertReducer from './reducer-alert';

const allReducers = combineReducers({
    formItems: formReducer,
    liveUpdateCheckValue: liveUpdateCheckboxreducer,
    addressBook: addressBookReducer,
    showAlert: showAllertReducer
});

export default allReducers;