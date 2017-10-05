import { LIVE_UPDATE_CHECKED, LIVE_UPDATE_UNCHECKED } from '../actions/live-update-checkbox-action';
export default function (state={checked:true},action) {
    switch (action.type){
        case LIVE_UPDATE_UNCHECKED:
            return {checked:false};
            break;
        case LIVE_UPDATE_CHECKED:
            return {checked:true};
            break;
        default:
            return state;
            break;
    }
}