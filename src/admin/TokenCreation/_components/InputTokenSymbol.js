import React from 'react';
import Input from '../../components/ui/input';

const InputTokenSymbol = ({value, onChange}) => {

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className='flex flex-col w-auto gap-y-1 px-3'>
    <span className='px-3 text-base font-thin'>Enter the symbol of your token*</span>
      <Input type="text" value={value} onChange={handleChange} placeholder="Exemple: BNK, KNG, DST, etc." className='w-60'/>
    </div>
  )
}

export default InputTokenSymbol