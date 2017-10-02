export default function (state={
                                id:[1,2,3,4,5,6],
                                type:["A","B","C","D","E"],
                                amount:[0,0,0,0,0,0]

                                },action) {
    switch(action.type){
        case "SUBMIT_BUTTON_CLICKED":
            return {
                id:[1,2,3,4,5,6],
                type:["A","B","C","D","E"],
                amount:action.payload
            };
            return;
            break;
        case "RESET_BUTTON_CLICKED":
            return{
                id:[1,2,3,4,5,6],
                type:["A","B","C","D","E"],
                amount:action.payload
            };
            return;
            break
    }
    return state
}