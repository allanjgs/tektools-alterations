import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/HeaderAdmin';
// import Header from '../components/Header/Header';
import Sidebar from './Sidebar/Sidebar';
import { HolderVerificationProvider } from './HolderVerification/HolderVerificationContext';

const AdminMain = () => {
  return (
    <HolderVerificationProvider>
    <div className='flex flex-col h-screen bg-bgAdmin bg-no-repeat bg-fixed bg-cover bg-top'>
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
    </HolderVerificationProvider>
  );
};

export default AdminMain;