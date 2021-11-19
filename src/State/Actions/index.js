export const RIGHT_ANSWER = "RIGHT_ANSWER";
export const WRONG_ANSWER = "WRONG_ANSWER";


export const rightAnswer = ()=> {
    return {
        type:RIGHT_ANSWER
    }
}


export const wrongAnswer = ()=> {
    return {
        type:WRONG_ANSWER
    }
}