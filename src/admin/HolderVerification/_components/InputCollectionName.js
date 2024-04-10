import React from 'react';
import { useHolderVerification } from '../HolderVerificationContext';
import Input from '../../components/ui/input';

const InputCollectionName = () => {
  const { collectionName, setCollectionName } = useHolderVerification();

  const handleChange = (event) => {
    setCollectionName(event.target.value);
    console.log('O valor de collection Name é: ', collectionName)
  };

  return (
    <div className='flex flex-col w-full gap-y-1 lg:w-1/2'>
    <span className='px-3 '>Enter collection name</span>
      <Input type="text" value={collectionName} onChange={handleChange} placeholder="Collection Name" />
    </div>
  );
};

export default InputCollectionName;