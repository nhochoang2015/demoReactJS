import {put,select,takeLeading} from 'redux-saga/effects';
import Global from '../utils/global';
import { setDataUser, setLimitPage, setTotal,setList,addUser, setDefaultUser, setUserSearch, setListSearch } from '../Actions/user';

export const getUserFromReducer = (state) => state.user.users;
export const getLimitFromReducer = (state) => state.user.limitPage;
export const getTotalFromReducer = (state) => state.user.total;
export const getListSearchFromReducer = (state) => state.user.listSearch;

export function* loadDefaultData(action){
    const {payload} = action;
    yield put(setDataUser(payload.list));

    yield put(setDefaultUser(payload.list));
    yield put(setLimitPage(payload.pageLimit));
    yield put(setTotal(payload.total));
}
export function* addUserSaga(action){
    const {payload} = action;
    let userTemp = yield select(getUserFromReducer);
    let uid = userTemp.find(x => x.id === payload.id);
    console.log("user", uid);
    if (uid != null) {
        return
    }
    let newList = [payload,...userTemp ];
    yield put(setDataUser(newList));
    yield put (setTotal(newList.length));

}
export function* deleteUserSaga(action){
    const { payload } = action;
    let userTemp = yield select(getUserFromReducer);
    console.log('test',userTemp)
    let newUser = userTemp.filter((user) => user.id !== payload);
    console.log(newUser);
    yield put(setDataUser(newUser));
    yield put(setTotal(newUser.length));
}
export function* editUserSaga(action){
    const {payload}  =action;
    let userTemp = yield select(getUserFromReducer);
    console.log('data',userTemp);
    const newUser = userTemp.map(user => {
        if (user.id === payload.id) {
            return { ...user, photo: payload.photo, name: payload.name, email: payload.email };
        }
        return user;
    })
    console.log('user',newUser);
    yield put(setDataUser(newUser));

}
export function* findByNameSaga(action){
    const {payload} = action;
    let userTemp = yield select(getUserFromReducer);
    console.log('data',userTemp);
    const users = userTemp.filter(user => user.name.includes(payload));
   if(users === null){

   }
    yield put(setListSearch(users));
    console.log('user',users)
    console.log('userTemp',userTemp);
    console.log('payload', payload);
    
 
   
    
}
export function* changeStatus(action){
    const {payload} = action;
    console.log(payload,'payload')
    let userTemp = yield select(getUserFromReducer);
    userTemp = userTemp.map(user => {
        if(user.id === payload.id){
            return user = {
                ...user, status: payload.status,
            }
        }else{
            return user;
        }
        console.log('st',user.status);
    });
    
    console.log('new' , userTemp);
    // yield put(setDataUser(userTemp));
}
export function* handleUser() {
    yield takeLeading("LOAD_DATA_USER", loadDefaultData);
    yield takeLeading("ADD_USER", addUserSaga);
    yield takeLeading("DELETE_USER", deleteUserSaga);
    yield takeLeading("EDIT_USER", editUserSaga);
    yield takeLeading("FIND_BY_NAME", findByNameSaga);
    yield takeLeading("CHANGE_STATUS", changeStatus);
    
}
