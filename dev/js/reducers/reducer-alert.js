import{DISSMISS_ALERT} from '../actions/show-alert-action'
import {SUBMIT_BUTTON_CLICKED} from "../actions/btn-submit-action";
import {RESET_BUTTON_CLICKED} from "../actions/btn-reset-action";
export default function (state={alertVisible:false},action) {
    switch (action.type){
        case SUBMIT_BUTTON_CLICKED:
            return {alertVisible:true};
            break;
        case RESET_BUTTON_CLICKED:
            return {alertVisible:true};
            break;
        case DISSMISS_ALERT:
            return {alertVisible:action.payload};
            break;
        default:
            return state;
            break;
    }
}