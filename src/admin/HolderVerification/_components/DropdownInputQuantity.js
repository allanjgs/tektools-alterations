import React, { useState } from 'react';
import { useHolderVerification } from '../HolderVerificationContext';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';
import Dropdown from '../../components/ui/dropdown';

const optionsRole = [
  { label: 'Opção 1', value: 'teste' },
  { label: 'Opção 2', value: 'teste 2' },
  { label: 'Opção 3', value: 'casa' }
];

const DropdownSelectRole = ({ onAddQuantity }) => {
  const { selectedRole, setSelectedRole,  selectedQuantityValue, setSelectedQuantityValue } = useHolderVerification();

  const handleSelectCreator = (event) => {
    setSelectedRole(event.target.value);
    console.log('Opção selecionada:', event.target.value);
  };

  const handleClickAdd = () => {
    const newQuantityInfo = {
      role: selectedRole,
      nft: selectedQuantityValue
    };
    onAddQuantity(newQuantityInfo);
  };

  const [quantity, setQuantity] = useState(selectedQuantityValue);

  const handleChangeQuantity = (event) => {
    setSelectedQuantityValue(event.target.value);
  };

  const handleDecrement = () => {
    const newValue = Math.max(quantity - 1, 1);
    setQuantity(newValue);
    setSelectedQuantityValue(newValue);
  };

  const handleIncrement = () => {
    const newValue = Math.min(quantity + 1, 50);
    setQuantity(newValue);
    setSelectedQuantityValue(newValue);
  };

  return (
    <div className='flex flex-col gap-y-5 lg:flex-row lg:gap-x-5 justify-between w-full'>
      <div className='flex flex-col w-full gap-y-1 lg:w-1/2 '>
        <span className='px-3 text-base font-thin'>Select role</span>
        <Dropdown options={optionsRole} value={selectedRole} onChange={handleSelectCreator} placeholder='Select a role' />
      </div>
      <div className='flex flex-col gap-y-1 gap-x-5 text-base font-thin'>
        <span className='px-3'>Quantity NFTs</span>
        <div className='flex flex-row  gap-x-5'>
          <div className='flex border rounded-lg bg-accent'>
            <Button onClick={handleDecrement} type='button' className='w-[55px] h-full'><AiOutlineMinus /></Button>
            <Input type="text" value={selectedQuantityValue} onChange={handleChangeQuantity} placeholder="Enter a quantity NFTs" className='w-36 text-center px-0 rounded-none border-none' />
            <Button onClick={handleIncrement} type='button' className='w-[55px] h-full'><AiOutlinePlus /></Button>
          </div>
          <div className='h-full w-12 '>
            <Button onClick={handleClickAdd} type='reset' className='w-full font-thin bg-main'>ADD</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownSelectRole;
