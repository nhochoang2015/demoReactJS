import React from 'react'
const initialState = {
    email:'',
    password:'',
}
const registerReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'GET_LOGIN':
            return state;
        default:
            return state;
    }
}

export default registerReducer