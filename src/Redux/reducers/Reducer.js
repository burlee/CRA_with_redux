import  { 
    INCREMENT
} 
from '../actions/types';

const initialState = { 
    reduxTest: 'ReduxTest - Działa',
    number: 0,
    array: [1,2,3,4,5,6,8,10,11,22,12]
}


export default function(state = initialState, action){
    switch(action.type){
        case INCREMENT:
        const number = state.number;
            return{
                ...state,
                number: number - 2
            }
        default: 
            return state;
    }
}