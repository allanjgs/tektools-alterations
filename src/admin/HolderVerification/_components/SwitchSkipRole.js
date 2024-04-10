import React from 'react';
import Switch from '../../components/ui/switch';
import { useHolderVerification } from '../HolderVerificationContext';


const SwitchSkipRole = () => {
  const { isCheckedSkipRole, setIsCheckedSkipRole } = useHolderVerification();

  const handleCheckboxChange = () => {
    setIsCheckedSkipRole(!isCheckedSkipRole);
    console.log(isCheckedSkipRole)
  };

  return (
      <Switch
        span='Skip Role Manegement'
        isChecked={isCheckedSkipRole}
        handleCheckboxChange={handleCheckboxChange}
        labelLeft="NO"
        labelRight="YES"
      />
  );
};

export default SwitchSkipRole;
