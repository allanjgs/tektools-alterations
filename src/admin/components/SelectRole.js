import React, { useEffect, useState } from 'react';
import Dropdown from './ui/dropdown';

const SelectRole = ({onSelectRole}) => {
  const [role, setRole] = useState([]);
  const [selectedRole, setSelectedRole] = useState('');

  useEffect(() => {
    const fetchRoles = async () => {
      const response = await fetch(`/roles/${localStorage.getItem('selectedServer')}`);
      const data = await response.json()
      setRole(data)
    }
    fetchRoles();
  }, []);

  const handleSelectRole = (event) => {
    const selectedValue = event.target.value
    setSelectedRole(selectedValue)
    onSelectRole(selectedValue)
  };
  
  
  const dropdownOptions = role.map(role => ({
    value: role.id,
    label: role.name
  }));
  
  return (
    <div className='flex flex-col w-full gap-y-1'>
      <span className='px-3 text-base font-bold'>Select Role</span>
      <Dropdown options={dropdownOptions} value={selectedRole} onChange={handleSelectRole} placeholder='Select a role' />
    </div>
  );
};

export default SelectRole;
