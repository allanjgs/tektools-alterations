import React from 'react';
import { useHolderVerification } from '../HolderVerificationContext';
import Dropdown from '../../components/ui/dropdown';

const optionsRole = [
  { label: 'Opção 1', value: 'teste' },
  { label: 'Opção 2', value: 'teste 2' },
  { label: 'Opção 3', value: 'casa' }
];

const DropdownSelectRole = () => {
  const { selectedRole, setSelectedRole } = useHolderVerification();

  const handleSelectCreator = (event) => {
    setSelectedRole(event.target.value);
    console.log('Opção selecionada:', event.target.value);
  };

  return (
    <div className='flex flex-col w-full gap-y-1 lg:w-1/2 lg:pr-3'>
      <span className='px-3'>Select role</span>
      <Dropdown options={optionsRole} value={selectedRole} onChange={handleSelectCreator} placeholder='Select a role' />
    </div>
  );
};

export default DropdownSelectRole;
