import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { MdHowToVote } from "react-icons/md";
import { AiFillDatabase } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlineToken } from "react-icons/md";
import { BsArrowLeftRight } from "react-icons/bs";
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
    <section className='h-full p-2 lg:p-6 text-white/70  drop-shadow-2xl shadow-2xl shadow-shadow'>
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
            Anti Bot Members
          </NavLink>

          <NavLink
            activeClassName='active'
            to='HolderVerification'
            className='flex items-center gap-2 py-1 px-2  hover:text-white'
          >
            <FiUserCheck />
            Holder Verification
          </NavLink>

          <NavLink
            activeClassName='active'
            to='StakingSetup'
            className='flex items-center gap-2 py-1 px-2  hover:text-white'
          >
            <BsArrowLeftRight />
            Staking Setup
          </NavLink>

          <NavLink
            activeClassName='active'
            to='AntiBotMembers'
            className='flex items-center gap-2 py-1 px-2  hover:text-white'
          >
            <AiOutlineLogout />
            Revenue Sharing
          </NavLink>
          <NavLink
            activeClassName='active'
            to='TokenCreation'
            className='flex items-center gap-2 py-1 px-2  hover:text-white'
          >
            <MdOutlineToken />
            SPL - Token Creation
          </NavLink>
          <NavLink
            activeClassName='active'
            to='AntiBotMembers'
            className='flex items-center gap-2 py-1 px-2  hover:text-white'
          >
            <AiFillDatabase />
            Decentralized Store
          </NavLink>
         
          <NavLink
            activeClassName='active'
            to='AntiBotMembers'
            className='flex items-center gap-2 py-1 px-2  hover:text-white'
          >
            <MdHowToVote />
            Voting System
          </NavLink>

          <NavLink
            activeClassName='active'
            to='AntiBotMembers'
            className='flex items-center gap-2 py-1 px-2  hover:text-white'
          >
            <MdLockOutline />
            Password Lock
          </NavLink>
          <NavLink
            activeClassName='active'
            to='AntiBotMembers'
            className='flex items-center gap-2 py-1 px-2  hover:text-white'
          >
            <MdOutlineAccountBalanceWallet />
            Wallet Management
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
