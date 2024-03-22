export const loadDataUser = (data) => ({
  type: "LOAD_DATA_USER",
  payload: data,
});
export const setDataUser = (data) => ({
  type: "SET_DATA_USER",
  payload: data,
});
export const setLimitPage = (data) => ({
  type: "SET_LIMIT_PAGE",
  payload: data,
});
export const setTotal = (data) => ({
  type: "SET_TOTAL",
  payload: data,
});
export const addUser = (data) => ({
  type: "ADD_USER",
  payload: data,
});
export const setList = (data) => ({
  type: "SET_LIST_USER",
  payload: data,
});
export const deleteUser = (data) => ({
  type: "DELETE_USER",
  payload: data,
});
export const setDefaultUser = (data) => ({
  type: "SET_DEFAULT_USER",
  payload: data,
});
export const editUser = (data) => ({
  type: "EDIT_USER",
  payload: data,
});

export const setUserSearch = (data) => ({
  type: "SET_USER_SEARCH",
  payload: data,
});
export const findByName = (data) => ({
  type: "FIND_BY_NAME",
  payload: data,
});
export const findByStatus = (data) => ({
  type: "FIND_BY_STATUS",
  payload: data,
});
export const changeStatus = (data)=>({
  type: 'CHANGE_STATUS',
  payload: data,
})
export const setListSearch = (data)=>({
  type: 'SET_LIST_SEARCH',
  payload: data,
})
export const logOut = (data)=>({
  type: 'LOG_OUT',
  payload: data,
})