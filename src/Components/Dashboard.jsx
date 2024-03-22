import React from "react";
import ListManagement from "./ListManagement";
import Content from "./Content";
import { Link } from "react-router-dom";
import { BsShop } from "react-icons/bs";
import { BsCurrencyExchange } from "react-icons/bs";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { BsBox2Heart } from "react-icons/bs";
import { BsBagCheck } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";


const Dashboard = () => {
  const lists = [
    { link: "/sales", name: "Quản lý doanh thu", icon: <BsCurrencyExchange /> },
    { link: "/products", name: "Quản lý sản phẩm", icon: <BsBagCheck /> },
    { link: "/orders", name: "Quản lý đơn hàng", icon: <BsBox2Heart /> },
    { link: "/customers", name: "Quản lý khách hàng", icon: <FaUsers /> },
    {
      link: "/transactions",
      name: "Quản lý giao dịch",
      icon: <FaExchangeAlt />,
    },
    {
      link: "/messengers",
      name: "Quản lý tin nhắn",
      icon: <BsEnvelopeAtFill />,
    },
  ];

  return (
    // <div className="text-white flex-col fixed bg-neutral-800 font-normal h-screen w-60">
    //   <div className="flex justify-center mt-8 mb-6">
    //     <BsShop className="mr-1 text-green-600 size-6" />
    //     <span className="text-lg"> DemoAdminShop</span>
    //   </div>
    //   <div className="flex-1 justify-between">
    //     {lists.map((list, i) => (
    //       <div
    //         key={i}
    //         className="flex items-start justify-start me-1 mb-3 ms-6 mr-1 text-gray-600  hover:bg-gray-700 hover:text-white transition"
    //       >
    //         {list.icon}
    //         <Link to={list.link}>
    //           <span className="text-lg text-gray-600"> {list.name}</span>
    //         </Link>
    //       </div>
    //     ))}
    //     <div className=" items-end me-1 mb-3 ms-6 mr-1 text-gray-600 hover:bg-gray-700 hover:text-white text-lg transition">
    //       <BsBagCheck className="" />
    //       <Link to={"/products"}>
    //         <span> Cài đặt</span>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-white flex-col flex font-normal h-screen  items-center">
        <div className=" shadow-md h-16 w-full items-center justify-center">
        <BsShop className="mr-1 text-green-600 size-8 pt-1" />
        Demo Shop
        </div>
        <div className="h-16 items-center justify-center m-4">
        <FaUsers className="mr-1 text-blue-700 size-8 pt-1" />
        </div>
    </div>
  );
};

export default Dashboard;
