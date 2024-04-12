import React from 'react';
import Dropdown from '../../components/ui/dropdown';

const optionsRole = [
  { label: 'Opção A', value: 'qwerty' },
  { label: 'Opção B', value: 'asdfgh'},
  { label: 'Opção C', value: 'zxcvbn'}
];

const DropdownSelectRole = ({value, onChange}) => {

  const handleSelectCreator = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className='flex flex-col w-full gap-y-1 lg:w-1/2 '>
      <span className='px-3 text-base font-thin'>Select role</span>
      <Dropdown options={optionsRole} value={value} onChange={handleSelectCreator} placeholder='Select a role' />
    </div>
  );
};

export default DropdownSelectRole;
