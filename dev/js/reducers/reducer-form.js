export default function (state={
                                id:[1,2,3,4,5,6],
                                type:["A","B","C","D","E","F"],
                                amount:[0,0,0,0,0,0]

                                },action) {
    switch(action.type){
        case "SUBMIT_BUTTON_CLICKED":
            return {
                id:[1,2,3,4,5,6],
                type:["A","B","C","D","E","F"],
                amount:action.payload
            };
            return;
            break;
        case "RESET_BUTTON_CLICKED":
            return{
                id:[1,2,3,4,5,6],
                type:["A","B","C","D","E","F"],
                amount:action.payload
            };
            return;
            break;
        case"INPUT_FIELD_CHANGED":
            let inputFieldID = action.payload.id;
            let inputFieldValue = action.payload.value;
            console.log('reducer knows '+inputFieldValue+' & '+inputFieldID);
            let newStateAmount = [];
            state.id.map((id)=>{
                if(id === inputFieldID){
                    console.log('found');
                    newStateAmount.push(inputFieldValue);
                }else{
                    console.log(' other found');
                    newStateAmount.push((state.amount[id-1]));
                }
            });
            console.log(newStateAmount);
            return {
                id:[1,2,3,4,5,6],
                type:["A","B","C","D","E","F"],
                amount:newStateAmount
            };
        default:
            return state
    }
}