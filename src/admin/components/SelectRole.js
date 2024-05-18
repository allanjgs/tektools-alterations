import React, { useEffect, useState } from 'react';
import Dropdown from './ui/dropdown';

const SelectRole = ({ onSelectRole }) => {
  const [roles, setRoles] = useState([]);
  const [selectedRoleId, setSelectedRoleId] = useState('');

  useEffect(() => {
    const fetchRoles = async () => {
      const response = await fetch(`/roles/${localStorage.getItem('selectedServer')}`);
      const data = await response.json();
      setRoles(data);
    };
    fetchRoles();
  }, []);

  const handleSelectRole = (event) => {
    const selectedId = event.target.value;
    setSelectedRoleId(selectedId);
    const selectedRole = roles.find(role => role.id === selectedId);
    if (selectedRole) {
      onSelectRole(selectedRole);
      console.log('Role selecionado:', selectedRole);
      console.log('Role id selecionado:', selectedRole.id);
      console.log('Role name selecionado:', selectedRole.name);
    }
  };

  const dropdownOptions = roles.map(role => ({
    value: role.id,
    label: role.name
  }));

  return (
    <div className='flex flex-col w-full gap-y-1'>
      <span className='px-3 text-base font-bold'>Select Role</span>
      <Dropdown options={dropdownOptions} value={selectedRoleId} onChange={handleSelectRole} placeholder='Select a role' />
    </div>
  );
};

export default SelectRole;