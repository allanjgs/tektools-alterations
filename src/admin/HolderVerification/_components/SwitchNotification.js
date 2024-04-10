import React from 'react'
import Switch from '../../components/ui/switch';
import { useHolderVerification } from '../HolderVerificationContext';

const SwitchNotification = () => {
  // Estados e métodos para Minting
  const { isCheckedNotificationMinting, setIsCheckedNotificationMinting } = useHolderVerification();
  const handleCheckboxMinting = () => {
    setIsCheckedNotificationMinting(!isCheckedNotificationMinting);
    console.log(isCheckedNotificationMinting)
  };

  // Estados e métodos para Sales
  const { isCheckedNotificationSales, setIsCheckedNotificationSales } = useHolderVerification();
  const handleCheckboxSales = () => {
    setIsCheckedNotificationSales(!isCheckedNotificationSales);
    console.log(isCheckedNotificationSales)
  };

  // Estados e métodos para Listing
  const { isCheckedNotificationListing, setIsCheckedNotificationListing } = useHolderVerification();
  const handleCheckboxListing = () => {
    setIsCheckedNotificationListing(!isCheckedNotificationListing);
    console.log(isCheckedNotificationListing)
  };

  return (
    <div className='flex flex-col gap-y-3'>
      <Switch
        span='Minting'
        isChecked={isCheckedNotificationMinting}
        handleCheckboxChange={handleCheckboxMinting}
        labelLeft="NO"
        labelRight="YES"
      />
      <Switch
        span='Sales'
        isChecked={isCheckedNotificationSales}
        handleCheckboxChange={handleCheckboxSales}
        labelLeft="NO"
        labelRight="YES"
      />
      <Switch
        span='Listing'
        isChecked={isCheckedNotificationListing}
        handleCheckboxChange={handleCheckboxListing}
        labelLeft="NO"
        labelRight="YES"
      />
    </div>
  )
}

export default SwitchNotification
