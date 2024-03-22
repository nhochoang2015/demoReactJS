import React, { useState } from "react";
import { BiFilterAlt } from "react-icons/bi";


const Filter = () => {
    const [showFilter,setShowFilter] = useState(false);
    function handleFilter(){
        if(showFilter===false){
            setShowFilter(true);
        }else{
            setShowFilter(false);
        }
    }
  return (
    <div>
      <div >
        <button onClick={()=>{handleFilter()}} className="flex hover:border hover:rounded-md hover:shadow-md p-1 m-2">
          Filter
          <BiFilterAlt className="size-8 text-gray-400 " />
        </button>
      </div>
      {showFilter?(
        <div className="block w-full border h-20">
            
        </div>
      ):null}
      
    </div>
  );
};

export default Filter;
