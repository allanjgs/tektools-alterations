import React from 'react';
import { useHolderVerification } from '../HolderVerificationContext';
import Dropdown from '../../components/ui/dropdown';
import Button from '../../components/ui/button';

const optionsTraitType = [
  { label: 'Opção 1', value: '123' },
  { label: 'Opção 2', value: '234' },
  { label: 'Opção 3', value: '345' }
];
const optionsTraitValue = [
  { label: 'Opção 4', value: '456' },
  { label: 'Opção 5', value: '567' },
  { label: 'Opção 6', value: '678' }
];
const optionsTraitRole = [
  { label: 'Opção 7', value: '789' },
  { label: 'Opção 8', value: '890' },
  { label: 'Opção 9', value: '901' }
];

const DropdownTrait = ({ onAddTrait }) => {
  const { selectedRole, setSelectedRole, selectedTraitType, setSelectedTraitType, selectedTraitValue, setSelectedTraitValue } = useHolderVerification(); // Apenas se você estiver usando Context

  const handleClickAdd = () => {
    const newTraitInfo = {
      type: selectedTraitType,
      value: selectedTraitValue,
      role: selectedRole
    };
    onAddTrait(newTraitInfo);
  };

  const handleSelectTraitType = (event) => {
    setSelectedTraitType(event.target.value);
  };

  const handleSelectTraitValue = (event) => {
    setSelectedTraitValue(event.target.value);
  };

  const handleSelectTraitRole = (event) => {
    setSelectedRole(event.target.value);
  };

  return (
    <div className='flex flex-col lg:flex-row w-full gap-y-5 lg:gap-x-5 items-center text-base font-thin'>
      <div className='flex flex-col w-full gap-y-1'>
        <span className='px-3 '>Trait type</span>
        <Dropdown options={optionsTraitType} value={selectedTraitType} onChange={(e) => setSelectedTraitType(e.target.value)} placeholder='Enter a trait type' />
      </div>
      <div className='flex flex-col w-full gap-y-1'>
        <span className='px-3'>Trait value</span>
        <Dropdown options={optionsTraitValue} value={selectedTraitValue} onChange={(e) => setSelectedTraitValue(e.target.value)} placeholder='Enter a trait value' />
      </div>
      <div className='flex flex-col w-full gap-y-1'>
        <span className='px-3'>Select role</span>
        <Dropdown options={optionsTraitRole} value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)} placeholder='Select a role' />
      </div>
      <div className='flex h-full items-end pt-5 lg:pt-0'>
        <Button onClick={handleClickAdd} type='button' className='h-12 lg:w-12 font-thin bg-main'>ADD</Button>
      </div>
    </div>
  );
};

export default DropdownTrait;