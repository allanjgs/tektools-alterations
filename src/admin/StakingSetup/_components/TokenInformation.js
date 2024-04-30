import React from 'react';
import Input from '../../components/ui/input';


const TokenInformation = ({ valueName, valueAddress, onChangeName, onChangeAddress }) => {

  const handleChangeName = (event) => {
    onChangeName(event.target.value);
  };

  return (
    <div className='flex flex-row gap-x-5'>
      <div className='flex flex-col w-full gap-y-1 lg:w-1/2'>
        <span className='px-3 text-base font-thin'>Enter the name of token*</span>
        <Input type="text" value={valueName} onChange={handleChangeName} placeholder="Exemple: Bonk, King, Dust, etc." />
      </div>
      <div className='flex flex-col w-full gap-y-1 lg:w-1/2'>
        <span className='px-3 text-base font-thin'>Enter the token address here*</span>
        <Input type="text" value={valueName} onChange={handleChangeName} placeholder="Example: DezXAZ8z7PnrnRjz3wXBoRgixCa6xjnB7" />
      </div>
    </div>
  );
};

export default TokenInformation