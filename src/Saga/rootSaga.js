import { all } from "redux-saga/effects";
import { handleLogin } from "./Login";
import { handleRegister } from "./Register";
import { handleUser } from "./User";

export default function* rootSaga(){
    yield all([handleLogin(),handleRegister(),handleUser()]);
}