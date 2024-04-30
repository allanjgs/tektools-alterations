import React from 'react';
import Input from '../../components/ui/input';

const InputCollectionName = ({value, onChange}) => {

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className='flex flex-col w-full gap-y-1 lg:w-1/2'>
    <span className='px-3 text-base font-thin '>Enter collection name</span>
      <Input type="text" value={value} onChange={handleChange} placeholder="Collection Name" />
    </div>
  );
};

export default InputCollectionName;