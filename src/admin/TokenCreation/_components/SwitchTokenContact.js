import React from 'react';
import Switch from '../../components/ui/switch';

const SwitchTokenContact = ({ isChecked, setIsChecked }) => {
  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
      <Switch
        span='ADD Social Links'
        isChecked={isChecked}
        handleCheckboxChange={handleChange}
        labelLeft="NO"
        labelRight="YES"
        className='flex w-full items-end justify-end'
      />
  );
};
export default SwitchTokenContact;
