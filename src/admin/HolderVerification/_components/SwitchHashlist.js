import React from 'react';
import Switch from '../../components/ui/switch';
import { useHolderVerification } from '../HolderVerificationContext';


const SwitchHashlist = () => {
  const { isCheckedHashlist, setIsCheckedHashlist } = useHolderVerification();

  const handleCheckboxChange = () => {
    setIsCheckedHashlist(!isCheckedHashlist);
    console.log(isCheckedHashlist)
  };

  return (
      <Switch
        span='Hashlist'
        isChecked={isCheckedHashlist}
        handleCheckboxChange={handleCheckboxChange}
        labelLeft="NO"
        labelRight="YES"
      />
  );
};

export default SwitchHashlist;
