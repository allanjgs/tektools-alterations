// AdminMain.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/HeaderAdmin';
import Sidebar from './Sidebar/Sidebar';

const AdminMain = () => {
  const route = '/admin/data/serverlist';

  return (
    <>
      <Header />
      <div className="flex ">
        {/* Passe a rota como uma propriedade para o Sidebar */}
        <Sidebar route={route} />
        <div className='flex w-full items-center justify-center mx-auto bg-basic h-screen'>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminMain;
