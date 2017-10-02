import {combineReducers} from 'redux';
import formReducer from './reducer-form';
import barChartReducer from './reducer-bar-chart'
import btnSubmitReducer from './reducer-btn-submit'



const allReducers = combineReducers({
    formItems : formReducer,
    barChartData : barChartReducer,
    btnSubmitState : btnSubmitReducer,

});

export default allReducers;