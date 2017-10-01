import {combineReducers} from 'redux';
import formReducer from './reducer-form';
import barChartReducer from './reducer-bar-chart'


const allReducers = combineReducers({
    formItems : formReducer,
    barChartData : barChartReducer
});

export default allReducers;