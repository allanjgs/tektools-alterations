import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';
import SelectRole from '../../components/SelectRole';


const DropdownSelectRole = ({ onAddQuantity }) => {
  const [selectedQuantityValue, setSelectedQuantityValue] = useState('');
  const [selectRole, setSelectRole] = useState('')
  const inheritSelectRole = (selectedRole) => {
    setSelectRole(selectedRole);
  };
  
  const handleClickAdd = () => {
    const newQuantityInfo = {
      roleName: selectRole.name,
      roleId: selectRole.id,
      numberOfNfts: selectedQuantityValue
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
      <SelectRole onSelectRole={inheritSelectRole} />
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
