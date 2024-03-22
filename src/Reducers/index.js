
import loginReducer from './loginReducer';
import registerReducer from "./registerReducer";
import { combineReducers } from "redux";
import userReducer from "./userReducer";

const allReducers =  combineReducers({
   
    user: userReducer,
    login: loginReducer,
    register: registerReducer,
}); 
export default allReducers;