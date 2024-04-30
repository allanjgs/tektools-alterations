import React from 'react';
import Input from '../../components/ui/input';

const InputTokenName = ({ value, onChange }) => {

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className='flex flex-col w-full gap-y-1 px-3'>
      <span className='px-3 text-base font-thin'>Enter the name of your token*</span>
      <Input type="text" value={value} onChange={handleChange} placeholder="Valid options: Bonk, King, Dust, etc." />
    </div>
  )
}

export default InputTokenName