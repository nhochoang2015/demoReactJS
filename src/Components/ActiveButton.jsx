import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { changeStatus } from '../Actions/user';
const ActiveButton = (props) => {
    const dispatch = useDispatch();
    let onCheck = props.status;
    const [checked,setChecked] = useState(onCheck);
    
    useEffect(() => {
      if(onCheck) setChecked(onCheck);
      
    }, [onCheck])
    const handleChange = (data) =>{
      dispatch(changeStatus(data));
      setChecked(!checked);
    }
  return (
    <div> 
            <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={checked} className="sr-only peer" onChange={(e)=>{handleChange({id:props.id, status: e.target.checked})}}/>
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
    </div>
  )
}

export default ActiveButton