import React from 'react';
import Switch from '../../components/ui/switch';

const TokenOption = ({ isChecked, setIsChecked }) => {
  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
      <Switch
        span='Token'
        isChecked={isChecked}
        handleCheckboxChange={handleChange}
        labelLeft="I Have One"
        labelRight="Create New"

      />
  )
}

export default TokenOption