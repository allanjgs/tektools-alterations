import React from 'react';
import { useHolderVerification } from '../HolderVerificationContext';
import Dropdown from '../../components/ui/dropdown';
import Button from '../../components/ui/button';

const handleClickAdd = () => {
  console.log('Botão de Add clicado')
}

const optionsTraitType = []
const optionsTraitValue = []
const optionsTraitRole = []


const DropdownTrait = () => {
  const { selectedRole, setSelectedRole } = useHolderVerification();
  const { selectedTraitType, setSelectedTraitType } = useHolderVerification();
  const { selectedTraitValue, setSelectedTraitValue } = useHolderVerification();

  const handleSelectTraitType = (event) => {
    setSelectedTraitType(event.target.value);
    console.log('Opção selecionada:', event.target.value);
  };

  const handleSelectTraitValue = (event) => {
    setSelectedTraitValue(event.target.value);
    console.log('Opção selecionada:', event.target.value);
  };

return (
  <div className='flex flex-col lg:flex-row w-full gap-y-1 gap-x-5 items-center'>
    <div className='w-full'>
    <span className='px-3'>Trait type</span>
    <Dropdown options={optionsTraitType} value={selectedTraitType} onChange={handleSelectTraitType} placeholder='Enter a trait type' />
  </div>
  <div className='w-full'>
    <span className='px-3'>Trait value</span>
    <Dropdown options={optionsTraitValue} value={selectedTraitValue} onChange={handleSelectTraitValue} placeholder='Enter a trait value' />
  </div>
  <div className='w-full'>
    <span className='px-3'>Select role</span>
    <Dropdown options={optionsTraitRole} value={selectedTraitType} onChange={handleSelectTraitType} placeholder='Select a role' />
  </div>
  <div className='flex h-full items-end'>
    <Button onClick={handleClickAdd} type='reset' className='h-12 w-16 font-thin bg-main'>ADD</Button>
  </div>
  
  </div>
  )
}

export default DropdownTrait