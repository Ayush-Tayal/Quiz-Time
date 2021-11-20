export const RIGHT_ANSWER = "RIGHT_ANSWER";
export const WRONG_ANSWER = "WRONG_ANSWER";


export const rightAnswer = (data)=> {
    return {
        type:RIGHT_ANSWER,
        payload:data
    }
}


export const wrongAnswer = (data)=> {
    return {
        type:WRONG_ANSWER,
        payload:data
    }
}