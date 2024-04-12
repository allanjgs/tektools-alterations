import React from 'react'
import Switch from '../../components/ui/switch';


const SwitchNotification = ({isCheckedMinting, isCheckedSales, isCheckedListing, setIsCheckedMinting, setIsCheckedSales, setIsCheckedListing}) => {
  // Estados e métodos para Minting
  const handleCheckboxMinting = (event) => {
    setIsCheckedMinting(event.target.checked);
  };

  // Estados e métodos para Sales
  const handleCheckboxSales = (event) => {
    setIsCheckedSales(event.target.checked);
  };

  // Estados e métodos para Listing
  const handleCheckboxListing = (event) => {
    setIsCheckedListing(event.target.checked);
  };

  return (
    <div className='flex flex-col gap-y-3'>
      <Switch
        span='Minting'
        isChecked={isCheckedMinting}
        handleCheckboxChange={handleCheckboxMinting}
        labelLeft="NO"
        labelRight="YES"
      />
      <Switch
        span='Sales'
        isChecked={isCheckedSales}
        handleCheckboxChange={handleCheckboxSales}
        labelLeft="NO"
        labelRight="YES"
      />
      <Switch
        span='Listing'
        isChecked={isCheckedListing}
        handleCheckboxChange={handleCheckboxListing}
        labelLeft="NO"
        labelRight="YES"
      />
    </div>
  )
}

export default SwitchNotification
