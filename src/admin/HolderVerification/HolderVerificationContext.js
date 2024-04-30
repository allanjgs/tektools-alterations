import React, { createContext, useContext, useState } from 'react';

const HolderVerificationContext = createContext();

export const HolderVerificationProvider = ({ children }) => {
  const [creatorAddress, setCreatorAddress] = useState('');
  const [collectionName, setCollectionName] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedTraitType, setSelectedTraitType] = useState('');
  const [selectedTraitValue, setSelectedTraitValue] = useState('');
  const [selectedQuantityValue, setSelectedQuantityValue] = useState('');
  const [isCheckedSkipRole, setIsCheckedSkipRole] = useState(false);
  const [isCheckedHashlist, setIsCheckedHashlist] = useState(false);
  const [isCheckedNotificationMinting, setIsCheckedNotificationMinting] = useState(false);
  const [isCheckedNotificationSales, setIsCheckedNotificationSales] = useState(false);
  const [isCheckedNotificationListing, setIsCheckedNotificationListing] = useState(false);

  return (
    <HolderVerificationContext.Provider value={{
      creatorAddress,
      setCreatorAddress,
      collectionName,
      setCollectionName,
      selectedRole,
      setSelectedRole,
      isCheckedSkipRole, 
      setIsCheckedSkipRole, 
      isCheckedHashlist, 
      setIsCheckedHashlist, 
      selectedTraitType, 
      setSelectedTraitType,
      selectedTraitValue, 
      setSelectedTraitValue,
      selectedQuantityValue, 
      setSelectedQuantityValue,
      isCheckedNotificationMinting, 
      setIsCheckedNotificationMinting,
      isCheckedNotificationSales, 
      setIsCheckedNotificationSales,
      isCheckedNotificationListing, 
      setIsCheckedNotificationListing,

    }}>
      {children}
    </HolderVerificationContext.Provider>
  );
};

// Hook customizado para usar o contexto
export const useHolderVerification = () => {
  return useContext(HolderVerificationContext);
};
