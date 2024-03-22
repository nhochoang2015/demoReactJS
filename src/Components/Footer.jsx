import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 bottom-0 w-max justify-between">

    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="#" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
                <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Contact</a>
            </li>
        </ul>
    
    <div className="flex justify-center items-center space-x-1">
        <a href="#" className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-blue-800">
            <FaFacebookF/>
        </a>
        <a href="#"  className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-600">
            <FaTwitter/>
        </a>
        <a href="#" className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
            <FaGithub/>
        </a>
        <a href="#"  className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white  hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-red-400">
        <FaGoogle/>
        </a>
    </div>
    </div>
    <p className="mb-4 text-sm text-center text-gray-500 dark:text-gray-400 sm:mb-0">
      &copy; 2023-2024. All rights reserved.
  </p>
  
    </footer>
  )
}

export default Footer