import { createStore } from "redux"
export const CHANGE_TASK = "CHANGE_TITLE"


// ACTION CREATOR
export function changeTask(value){
    return{
        type: CHANGE_TASK,
        payload: value,
    } 
}



const initialState = {
    task: [],

}

const TaskReducer= (state= initialState, action) =>{
    switch(action.type){
        case CHANGE_TASK:
            return{
                ...state,
                title: action.payload,
            };
        default:
            return{
                ...state,
            };
    }
}

export const store = createStore(TaskReducer,initialState)