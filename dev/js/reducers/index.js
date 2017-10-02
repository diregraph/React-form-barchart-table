import {combineReducers} from 'redux';
import formReducer from './reducer-form';
import barChartReducer from './reducer-bar-chart';
import btnSubmitReducer from './reducer-btn-submit';
import btnResetReducer from './reducer-btn-reset';




const allReducers = combineReducers({
    formItems : formReducer,
    barChartData : barChartReducer,
    btnSubmitState : btnSubmitReducer,
    btnResetState : btnResetReducer

});

export default allReducers;