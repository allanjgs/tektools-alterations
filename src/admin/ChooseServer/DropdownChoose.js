import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { serverList } from '../TesteData/DataServerList';


const DropdownChoose = ({ onSelect }) => {
  const handleServerChange = (event) => {
    const selectedServerId = event.target.value;
    onSelect(selectedServerId); // Passando o id do servidor selecionado para a função onSelect do Sidebar
    console.log('Selected Server no dropdown:', selectedServerId);
  };
 
  return (
    <div className="relative">
      <select
        className="block w-full text-white/90 bg-second border border-white/70 hover:border-white px-4 py-3 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline appearance-none "
        onChange={handleServerChange}
      >
        <option value="" hidden>Select Server</option>
        {serverList.map((server) => (
          <option key={server.id} value={server.id}>
            {server.name}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
        <RiArrowDropDownLine className="text-white text-4xl" />
      </div>
    </div>
  );
};

export default DropdownChoose;
