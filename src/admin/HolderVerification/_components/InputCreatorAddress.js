import React from 'react';
import { useHolderVerification } from '../HolderVerificationContext';
import Input from '../../components/ui/input';

const InputCreatorAddress = () => {
  const { creatorAddress, setCreatorAddress } = useHolderVerification();

  const handleChange = (event) => {
    setCreatorAddress(event.target.value);
    console.log('O valor de CreatorAddress Name é: ', creatorAddress)
  };

  return (
    <div className='flex flex-col w-full gap-y-1 lg:w-1/2'>
      <span className='px-3'>Enter a creator's address</span>
      <Input type="text" value={creatorAddress} onChange={handleChange} placeholder="Creator Address" />
    </div>
  );
};

export default InputCreatorAddress;
