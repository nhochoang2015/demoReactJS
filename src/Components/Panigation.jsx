/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
const Panigation = () => {
  const limitPage = (state) => state.user.pageLimit; //6
  const totalUser = (state) => state.user.total; //21
  const dispatch = useDispatch();

  const getLimitPage = useSelector(limitPage);
  //console.log("getLimit", getLimitPage);
  const getTotalUser = useSelector(totalUser);
  //console.log("getTotalUser", getTotalUser);
  const getTotalPage = Math.round(getTotalUser / getLimitPage);
  //console.log("getTotalPage", getTotalPage);
  const listBtn = [];
  function PanigationNav() {
    for (let i = 1; i <= getTotalPage; i++) {
      //console.log("index", i);
      //console.log("getTotalPage", getTotalPage);
      listBtn.push(i);
      //console.log("listBtn", listBtn);
    }
    //console.log("listBtn", listBtn);
    return listBtn.map((item, i) => {
        return (
          
                <li key={i}>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    {item}
                  </a>
                </li>
                
        );
      
    });
    
    };

  return (
    <div className="mt-2">
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-sm">
          <li>
            <a
              href="#"
              className="pointer-events-none cursor-not-allowed flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>
          </li>
          {PanigationNav()}
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Panigation;
