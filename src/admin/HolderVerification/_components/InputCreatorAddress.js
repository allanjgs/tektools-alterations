import React from 'react';
import Input from '../../components/ui/input';


const InputCreatorAddress = ({ value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className='flex flex-col w-full gap-y-1 lg:w-1/2'>
      <span className='px-3 text-base font-thin'>Enter a creator's address</span>
      <Input type="text" value={value} onChange={handleChange} placeholder="Creator Address" />
    </div>
  );
};

export default InputCreatorAddress;