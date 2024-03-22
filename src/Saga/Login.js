import {put,takeLeading} from 'redux-saga/effects';
import Global from '../utils/global';

export function* checkLogin(action){

    const {payload} = action;
    const navigator = Global.Navigator.get();
    const dataStore = JSON.parse(localStorage.getItem("dataStore"));
    console.log('dataStore ',dataStore );
    localStorage.setItem('currentEmail',payload.email);
    localStorage.setItem('currentPassword',payload.password);
    console.log(payload.password);
    if(payload.email === dataStore.email && payload.password === dataStore.password){
        console.log('login success');
        yield put({type: 'GET_LOGIN'});
        navigator.navigate('/');
    }else{
        console.log('Login failed');
        navigator.navigate('/login');
    }
}
export function* handleLogin() {
    console.log('test')
    yield takeLeading("GET_LOGIN", checkLogin);
    
}
