import React, { useEffect, useRef, useState } from "react";
import { BsTrash3Fill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import ReactPaginate from 'react-paginate';
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import axios from "../Service/requested";
import { getAllProducts } from "../Service/ProductService";
import { json } from "react-router";

 const  ProductsPage = () => {
  const [data, setdata] = useState([]);
  const items = [1, 2, 3, 4, 5, 6, 7];
  
    const handlePageClick = (event) => {
    }
  

  // useEffect(() => {
      
  //     getAllProducts().then((json) =>{setdata(json)});
    
      
  // },[]);
  return (
    <div className="bg-slate-100">
      <div className="justify-between flex flex-row p-2 rounded-md m-[8px] bg-white">
        <span className="text-lg">Trang quản lý sản phẩm</span>
        <button className="bg-purple-800 text-white rounded-md ">
          Thêm sản phẩm
        </button>
      </div>
      
      <div className="col-span-8 flex mt-2 bg-white m-[8px] rounded-md">
      <table className="table-auto w-full border">
        <thead>
          <tr className='border-slate-200 border-2'>
            <th className='border-slate-200 border-2'>Id</th>
            <th className='border-slate-200 border-2'>Title</th>
            <th className='border-slate-200 border-2'>price</th>
            <th className='border-slate-200 border-2'>category</th>
            <th className='border-slate-200 border-2'>description</th>
            <th className='border-slate-200 border-2'>Image</th>
            <th className='border-slate-200 border-2'>Edit</th>
            <th className='border-slate-200 border-2'>Remove</th>
          </tr>
        </thead>
        <tbody>
        {data.map((dat,i) => {
        return (
          <tr className='border-slate-200 border-2' key={i}>
            <td className='border-slate-200 border-2'>{dat.id}</td>
            <td className='border-slate-200 border-2'>{dat.title}</td>
            <td className='border-slate-200 border-2'>{dat.price}$</td>
            <td className='border-slate-200 border-2'>{dat.category}</td>
            <td className='border-slate-200 border-2'>{dat.description}</td>
            <td className='border-slate-200 border-2'><img className="max-h-10" src={dat.image} alt="" /></td>
            <td className='border-slate-200 border-2'><button className="bg-blue-600 m-2 align-middle text-white rounded-md p-2"><BsFillPencilFill/></button></td>
            <td className='border-slate-200 border-2'><button className="bg-red-600 m-2 align-middle text-white rounded-md p-2"><BsTrash3Fill/></button></td>
          </tr>
        );
      })}
          
         
        </tbody>
        
      </table>
      
      </div>
      <div className=''>
      <ReactPaginate className=" bg-white inline-flex items-center  justify-center"
        nextLabel={
          <span className="border-2 bg-white inline-flex m-1 p-1 hover:bg-slate-200">
          Next
          <BsChevronRight className="pt-2"/>
          </span>
          }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        pageCount={50}
        previousLabel={
        <span className="border-2 bg-white inline-flex  m-1 p-1 hover:bg-slate-200">
        <BsChevronLeft className="pt-2"/>
        Previous
        </span>
        }
        pageClassName="border-2 bg-white inline-flex m-1 p-1 w-6 hover:bg-slate-200"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel={
          <span className="border-2 bg-white inline-flex m-1 p-1">
          ...
          </span>
          }
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
      </div>
      
    </div>
  );
};

export default ProductsPage;