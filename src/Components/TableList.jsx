import React from "react";
import ActiveButton from "./ActiveButton";
import userData from "../Components/assets/Data";
import DeleteUserModal from "./DeleteUserModal";
import EditUserModal from "./EditUserModal";
import DetailUser from "./DetailUser";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
const TableList = (props) => {
  const dispatch = useDispatch();
  const dataSelector = (state) => state.user.users;
  const dataListSearch = (state) => state.user.listSearch;
  const dataFromUsers = useSelector(dataSelector);
  const dataFromSearch = useSelector(dataListSearch);
  
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Gmail
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Created Date
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {dataFromUsers.map((item, i) => {
              return (
                <tr
                  key={i}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{item.id}</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.name}
                  </th>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">
                    <img className="w-8 h-8" src={item.photo} alt="" />
                  </td>
                  <td className="px-6 py-4">{item.createDate}</td>
                  <td className="px-6 py-4">
                    <ActiveButton status={item.status} id={item.id} />
                  </td>
                  <td className="px-6 py-4 flex ">
                    <EditUserModal
                      id={item.id}
                      email={item.email}
                      name={item.name}
                      photo={item.photo}
                    />
                    ||
                    <DeleteUserModal id={item.id} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableList;
