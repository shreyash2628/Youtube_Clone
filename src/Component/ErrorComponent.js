import React from 'react';
import Error404 from '../Assests/404error.png'

const ErrorComponent = () => {
    // alert("API LIMIT EXCEEDED");
  return (
    <div  className=" h-screen w-screen border-gray-200 rounded shadow animate-pulse  dark:border-gray-700  shadow-2xl  lg:p-10 ">
    <div className="flex items-center justify-center h-full mb-4 bg-gray-300 rounded dark:bg-gray-700 ">
        <img className='h-full w-auto' src={Error404}></img>
    
   </div>
  </div>
  );
};

export default ErrorComponent;
