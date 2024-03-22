const initialState = {
  users: [],
  defaultUsers: [],
  listSearch:[],
  pageLimit: 6,
  pageCount: 1,
  SearchKey: "",
  total: 0,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA_USER":
      console.log("reducer", action.payload);
      return { ...state, users: action.payload };
    case "SET_LIMIT_PAGE":
      return {
        ...state,
        pageLimit: state.pageLimit,
      };
    case "SET_TOTAL":
      return {
        ...state,
        total: action.payload,
      };
      case "SET_DEFAULT_USER":
      return {
        ...state,
        defaultUsers: action.payload,
      };
      case "SET_USER_SEARCH":
        return{
          ...state,
          users: action.payload,
        }
      case 'SET_LIST_SEARCH':
        return{
          ...state,
          listSearch: action.payload,
        }
    default:
      return state;
  }
};
export default userReducer;
