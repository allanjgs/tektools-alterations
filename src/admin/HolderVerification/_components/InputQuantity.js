// import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';
import { useHolderVerification } from '../HolderVerificationContext';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';

const handleClickAdd = () => {
  console.log('Botão de Add clicado');
};

const InputQuantity = () => {
  const { selectedQuantityValue, setSelectedQuantityValue } = useHolderVerification();

  const [quantity, setQuantity] = useState(selectedQuantityValue);

  const handleChangeQuantity = (event) => {
    setSelectedQuantityValue(event.target.value);
    console.log('O valor de collection Name é: ', selectedQuantityValue)
  };

  // useEffect(() => {
  //   setQuantity(selectedQuantityValue);
  // }, [selectedQuantityValue]);

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
    <div className='flex flex-col lg:w-1/2 gap-y-1 gap-x-5'>
      <span className='px-3'>Quantity NFTs</span>
      <div className='flex flex-row justify-between w-full gap-x-5'>
        <div className='flex w-full border rounded-lg bg-accent'>
          <Button onClick={handleDecrement} type='button' className='w-12  h-full'><AiOutlineMinus /></Button>
          <Input type="text" value={selectedQuantityValue} onChange={handleChangeQuantity} placeholder="Enter a quantity NFTs" className='rounded-none border-none' />
          <Button onClick={handleIncrement} type='button' className='w-12  h-full'><AiOutlinePlus /></Button>
        </div>
        <div id='2' className='flex h-full'>
          <Button onClick={handleClickAdd} type='reset' className='h-12 w-16 font-thin bg-main'>ADD</Button>
        </div>
      </div>
      {console.log('valor salvo para envio da API é: ', selectedQuantityValue)}
    </div>
  );
};

export default InputQuantity;
