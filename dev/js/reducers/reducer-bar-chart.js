export default function (state={
                                data: [1, 1, 1, 1, 1, 1] //default data
                                },action) {

    switch(action.type){
        case "SUBMIT_BUTTON_CLICKED":
            return {
                data: action.payload
            };
            return;
            break;
        case "RESET_BUTTON_CLICKED":
            return{
                data: action.payload
            };
            return;
            break
    }
    return state
}