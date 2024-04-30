import React from 'react';
import Switch from '../../components/ui/switch';

const SwitchSpecificReward = ({ isChecked, setIsChecked }) => {
  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
      <Switch
        span='Would you like to setup trait specific rewards?'
        isChecked={isChecked}
        handleCheckboxChange={handleChange}
        labelLeft="NO"
        labelRight="YES"
      />
  )
}

export default SwitchSpecificReward