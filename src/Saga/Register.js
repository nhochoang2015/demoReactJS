import {put,takeLeading} from 'redux-saga/effects';
export function* doRegister(action){
    const {payload} = action;
    const newUser = {
        email: payload.email,
        password: payload.password,
    }
    const saveData = localStorage.setItem('newUser',newUser);
    console.log(newUser);
    yield put({type:'GET_REGISTER'});

}
export function* handleRegister() {
    console.log('test')
    yield takeLeading("GET_REGISTER", doRegister);
    
}