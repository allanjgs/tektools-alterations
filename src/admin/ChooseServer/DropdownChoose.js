import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';


const DropdownChoose = ({ onSelect }) => {
  const userDataLocal = JSON.parse(localStorage.getItem('userData'))
  const selectedServerId = localStorage.getItem('selectedServer');

  const handleServerChange = (event) => {
    const selectedServerId = event.target.value;
    onSelect(selectedServerId);
  };

  return (
    <div className="relative">
      <select
        className="block w-full text-white/90 bg-second border border-white/70 hover:border-white px-4 py-3 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline appearance-none "
        onChange={handleServerChange}
      >
        <option value="" hidden>Select Server</option>
        {userDataLocal && userDataLocal.servers && userDataLocal.servers.map((server) => (
          <option key={server.id} value={server.id} selected={selectedServerId === null ? server.id === '' : server.id === selectedServerId}>
            {server.name}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <RiArrowDropDownLine className="text-white text-2xl" />
      </div>
    </div>
  )
};

export default DropdownChoose;
