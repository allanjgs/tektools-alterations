import React from 'react';
import Input from '../../components/ui/input';

// Agora, InputCreatorAddress aceita `value` e `onChange` como props
const InputCreatorAddress = ({ value, onChange }) => {
  // A função handleChange agora chama a função onChange passada como prop,
  // com o novo valor do input. Isso permite que o estado seja atualizado no componente pai.
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className='flex flex-col w-full gap-y-1 lg:w-1/2'>
      <span className='px-3'>Enter a creator's address</span>
      {/* Input agora usa `value` e `handleChange` passados como props */}
      <Input type="text" value={value} onChange={handleChange} placeholder="Creator Address" />
    </div>
  );
};

export default InputCreatorAddress;