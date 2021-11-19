import { RIGHT_ANSWER, WRONG_ANSWER } from "../Actions";


const initialState = 0;

const scoreReducer = (state=initialState, action)=>{
    switch(action.type){
        case RIGHT_ANSWER:
            return state + 4;
        
        case WRONG_ANSWER:
            return state - 1;
    
        default:
            return state;
    }
}

export default scoreReducer