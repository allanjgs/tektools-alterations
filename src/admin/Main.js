import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/HeaderAdmin';
import Sidebar from './Sidebar/Sidebar';


const AdminMain = () => {
  return (
    <div className='flex flex-col h-screen bg-bgAdmin bg-no-repeat bg-fixed bg-cover bg-left font-outfit'>
      <Header />
      <div className='flex flex-1 overflow-hidden w-full'>
        <div className='w-64 '>
          <Sidebar />
          </div>
          <div className=' flex-1 overflow-y-auto pt-8'>
          <Outlet />
        </div>
      </div>
    </div>

  );
};

export default AdminMain;