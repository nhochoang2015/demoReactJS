import React, { useEffect,useCallback, useState } from "react";
import { Route, Routes } from "react-router";
import SalePage from "./SalePage";
import MessengerPage from "./MessengerPage";
import AccountsPage from "./AccountsPage";
import ProductsPage from "./ProductsPage";
import OrdersPage from "./OrdersPage";
import CustomersPage from "./CustomersPage";
import TransactionsPage from "./TransactionsPage";
import { BsPersonFillAdd } from "react-icons/bs";
import userData from "./assets/Data";
import AddModalButton from "./AddModalButton";
import Panigation from "./Panigation";
import TableList from "./TableList";
import Filter from "./Filter";
import { debounce } from "lodash";
import { findByName, loadDataUser, setDataUser, setListSearch } from "../Actions/user";

import { useDispatch, useSelector } from "react-redux";

const Content = () => {

  const dispatch = useDispatch();
  const dataSelector = (state) => state.user.users;
  const dataListSelector = (state) => state.user.listSearch;
  const dataTmp = useSelector(dataSelector);
  const dataListSearch = useSelector(dataListSelector);
  console.log('BIFFF',dataListSearch);
  // const allUsers = dataTmp.length;
  //  const activeUsers = dataTmp.filter(item => item.status===true).length;
  //  const disableUser = dataTmp.filter(item => item.status===false).length;
   const debounceSearch = useCallback(debounce((value) => dispatch(findByName(value)), 1000), []);
  
   const [checked,setChecked] = useState(false);
  const handleSearch = (data) =>{
   let value = data ;
    if(value ===''){
      setChecked(false);
    }else{
      setChecked(true);
    }
    if(checked === false){
      debounceSearch(value);
      dispatch(setDataUser(dataListSearch));
    }else{
      dispatch(setDataUser(dataTmp));
    }
    console.log('change',data);
    console.log('checked',checked);
}
  
  useEffect(() => {

    dispatch(loadDataUser(userData));
  }, [dispatch]);

  
  return (
    <div className="shadow-md mt-2" style={{ background: "#FAFEFF" }}>
      <div className="flex justify-start">
        <div className=" rounded-md shadow-md w-40  h-10 font-sans bg-gradient-to-br to-teal-400 from-violet-500 m-3 text-center text-white">
          All users: 
        </div>
        <div className=" rounded-md shadow-md w-40  h-10 font-sans bg-gradient-to-br to-teal-400 from-violet-500 m-3 text-center text-white">
          Active users:
        </div>
        <div className=" rounded-md shadow-md w-40  h-10 font-sans bg-gradient-to-br to-teal-400 from-violet-500 m-3 text-center text-white">
          Disable users:
        </div>
      </div>
      <div className=" flex justify-between">
        <div className="flex">
          <form className="w-80 m-3">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input  onChange={(e)=>{handleSearch(e.target.value);}}
                type="search"
                name="name"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search username"
              />
            </div>
          </form>
        </div>
        <div className="inline-flex items-center">
          <AddModalButton />
        </div>
      </div>
      <div>
        <Filter />
      </div>
      <div>
        <TableList list={dataListSearch}/>
      </div>
      <div className="justify-items-center">
        <Panigation />
      </div>
    </div>
  );
};

export default Content;
