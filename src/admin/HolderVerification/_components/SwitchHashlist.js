import React from 'react';
import Switch from '../../components/ui/switch';

const SwitchHashlist = ({ isChecked, setIsChecked }) => {
  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
      <Switch
        span='Hashlist'
        isChecked={isChecked}
        handleCheckboxChange={handleChange}
        labelLeft="NO"
        labelRight="YES"
      />
  );
};
export default SwitchHashlist;
