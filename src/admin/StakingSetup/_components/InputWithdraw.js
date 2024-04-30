import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';

const InputWithdraw = ({ onAddQuantity }) => {
  const [quantity, setQuantity] = useState('');

  const updateQuantity = (newQuantity) => {
    setQuantity(newQuantity);
    // Verifica se onAddQuantity é uma função antes de chamá-la
    if (typeof onAddQuantity === 'function') {
      onAddQuantity({ nft: newQuantity.toString() });
    } else {
      console.error('onAddQuantity is not a function');
    }
  };

  const handleChangeQuantity = (event) => {
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue) && newValue >= 1 && newValue <= 5) {
      updateQuantity(newValue);
    }
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0));
  };

  const handleIncrement = () => {
    setQuantity(prevQuantity => Math.min(prevQuantity + 1, 1000));
  };

  return (
    <div className='flex flex-col gap-y-1 gap-x-5 text-base font-thin'>
      <span className='px-3'>Minimum withdraw balance*</span>
      <div className='flex flex-row gap-x-5'>
        <div className='flex border rounded-lg bg-accent'>
          <Button onClick={handleDecrement} type='button' className='w-[45px] h-full'><AiOutlineMinus /></Button>
          <Input type="text" value={quantity} onChange={handleChangeQuantity} placeholder="Exemple: 100" className='text-center px-0 rounded-none border-none' />
          <Button onClick={handleIncrement} type='button' className='w-[45px] h-full'><AiOutlinePlus /></Button>
        </div>
      </div>
    </div>
  )
}

export default InputWithdraw