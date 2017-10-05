import {RESET_BUTTON_CLICKED} from '../actions/btn-reset-action';
import {SUBMIT_BUTTON_CLICKED} from '../actions/btn-submit-action';
import {INPUT_FIELD_CHANGED} from '../actions/input-field-change-action';

export default function (state = {
    id: [1, 2, 3, 4, 5, 6],
    type: ["A", "B", "C", "D", "E", "F"],
    amount: [0, 0, 0, 0, 0, 0],
    liveupdate: true,
    newStateAmount: [0, 0, 0, 0, 0, 0],
    alert: "non"
}, action) {
    switch (action.type) {
        case RESET_BUTTON_CLICKED:
            return {
                id: [1, 2, 3, 4, 5, 6],
                type: ["A", "B", "C", "D", "E", "F"],
                amount: [0, 0, 0, 0, 0, 0],
                liveupdate: true,
                newStateAmount: [0, 0, 0, 0, 0, 0],
                alert: "reset"
            };
            break;

        case INPUT_FIELD_CHANGED:
            let inputFieldID = action.payload.id;
            let inputFieldValue = action.payload.value;
            let newStateAmountArr = [];
            state.id.map((id) => {
                if (id === inputFieldID) {
                    newStateAmountArr.push(parseInt(inputFieldValue));
                } else {
                    newStateAmountArr.push(parseInt(state.newStateAmount[id - 1]));
                }
            });
            if (action.payload.liveupdate) {
                return {
                    id: [1, 2, 3, 4, 5, 6],
                    type: ["A", "B", "C", "D", "E", "F"],
                    amount: newStateAmountArr,
                    liveupdate: action.payload.liveupdate,
                    newStateAmount: newStateAmountArr,
                    alert: "non"
                };
            } else {
                return {
                    id: [1, 2, 3, 4, 5, 6],
                    type: ["A", "B", "C", "D", "E", "F"],
                    amount: state.amount,
                    liveupdate: action.payload.liveupdate,
                    newStateAmount: newStateAmountArr,
                    alert: "non"
                };
            }
        case SUBMIT_BUTTON_CLICKED:
            return {
                id: [1, 2, 3, 4, 5, 6],
                type: ["A", "B", "C", "D", "E", "F"],
                amount: state.newStateAmount,
                liveupdate: action.payload.liveupdate,
                newStateAmount: state.newStateAmount,
                alert: "submit"
            };
            break;
        default:
            return state
    }
}