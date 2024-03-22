const initialState = {
    email:'',
    password:'',
}
const loginReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'GET_LOGIN':
            return state;
        default:
            return state;
    }
}
export default loginReducer;