// Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiTwotoneUsb } from 'react-icons/ai';
import { FiUserCheck } from 'react-icons/fi';
import DropdownChoose from '../ChooseServer/DropdownChoose';
import { useServer } from '../Contexts/ServerContext';


const Sidebar = () => {

  const { selectedServer, updateSelectedServer } = useServer(); // Use o hook useServer para acessar o contexto do servidor
  
  const handleServerChange = (serverId) => {
    updateSelectedServer(serverId); // Atualize o servidor selecionado no contexto
  };

  return (
    <section className='h-auto p-2 lg:p-6 text-white/70 bg-second drop-shadow-xl shadow-2xl shadow-shadow'>
      <div className='relative w-48'>
        <div className='pb-8'>
          <DropdownChoose onSelect={handleServerChange} />
        </div>
        <div className='flex flex-col gap-y-4'>
          <NavLink
            activeClassName='active'
            to={{
              pathname: 'AntiBotMembers',
              state: { selectedServer }
            }}
            className='flex items-center gap-2 py-1 px-2  hover:text-white'
          >
            <AiTwotoneUsb />
            AntiBotMembers
          </NavLink>
          <NavLink
            activeClassName='active'
            to='verify-user'
            className='flex items-center gap-2 py-1 px-2  hover:text-white'
          >
            <FiUserCheck />
            Verify User
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
