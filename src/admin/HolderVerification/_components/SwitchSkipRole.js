import React from 'react';
import Switch from '../../components/ui/switch';

const SwitchSkipRole = ({ isChecked, setIsChecked }) => {
  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
      <Switch
        span='Skip Role Manegement'
        isChecked={isChecked}
        handleCheckboxChange={handleChange}
        labelLeft="NO"
        labelRight="YES"
      />
  );
};
export default SwitchSkipRole;
