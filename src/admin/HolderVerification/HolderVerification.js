import React, { useState } from 'react';
import { HolderVerificationProvider } from './HolderVerificationContext';
import { useHolderVerification } from './HolderVerificationContext';
import CreatorAddress from './_components/InputCreatorAddress';
import CollectionName from './_components/InputCollectionName';
import SelectRole from './_components/DropdownSelectRole';
import SwitchHashlist from './_components/SwitchHashlist';
import SwitchSkipRole from './_components/SwitchSkipRole';
import Button from '../components/ui/button';
import DropdownTrait from './_components/DropdownTrait';
import DropdownRoleQuantity from './_components/DropdownInputQuantity';
import SwitchNotification from './_components/SwitchNotification';
import TableTrait from './_components/TableTrait';
import TableQuantity from './_components/TableQuantity';
import ButtonUploadList from './_components/ButtonUploadList';

const HolderVerification = () => {
  const [creatorAddress, setCreatorAddress] = useState('');
  const [collectionName, setCollectionName] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [showSections, setShowSections] = useState(false);
  const [traits, setTraits] = useState([]);
  const [quantitys, setQuantitys] = useState([]);
  const {
    isCheckedSkipRole,
    setIsCheckedSkipRole,
    isCheckedHashlist,
    setIsCheckedHashlist,
    isCheckedNotificationMinting,
    setIsCheckedNotificationMinting,
    isCheckedNotificationSales,
    setIsCheckedNotificationSales,
    isCheckedNotificationListing,
    setIsCheckedNotificationListing,
  } = useHolderVerification();


  const handleAddTrait = (newTraitInfo) => {
    if (!newTraitInfo.type || !newTraitInfo.value || !newTraitInfo.role) {
      alert("Todos os campos da trait devem ser preenchidos.");
      return;
    }

    const traitExists = traits.some(trait =>
      trait.type === newTraitInfo.type &&
      trait.value === newTraitInfo.value &&
      trait.role === newTraitInfo.role
    );

    if (!traitExists) {
      setTraits([...traits, newTraitInfo]);
    } else {
      alert("A combinação de trait já existe.");
    }
  };

  const handleClickDel = (index) => {
    const isConfirmed = window.confirm("Tem certeza que deseja excluir este item?");
    if (isConfirmed) {
      setTraits(traits.filter((_, i) => i !== index));
    }
  };

  const handleAddQuantity = (newQuantityInfo) => {
    if (!newQuantityInfo.role || !newQuantityInfo.nft) {
      alert("Todos os campos devem ser preenchidos.");
      return;
    }

    const quantityExists = quantitys.some(quantity =>
      quantity.role === newQuantityInfo.role
    );
    if (!quantityExists) {
      setQuantitys([...quantitys, newQuantityInfo]);
    } else {
      alert("A combinação já existe.");
    }
  };

  const handleClickDelQuantity = (index) => {
    const isConfirmed = window.confirm("Tem certeza que deseja excluir este item?");
    if (isConfirmed) {
      setQuantitys(quantitys.filter((_, i) => i !== index));
    }
  };

  const handleClickSave = () => {
    if (creatorAddress && collectionName && selectedRole) {
      setShowSections(true); // Mostra as seções se todos os campos estiverem preenchidos
      // Coletando as informações em um objeto
      const collectedInfo = {
        CreatorAddress: creatorAddress,
        CollectionName: collectionName,
        IsCheckedHashlist: isCheckedHashlist,
        IsCheckedSkipRole: isCheckedSkipRole,
        SelectedRole: selectedRole,
        Traits: traits,
        Quantity: quantitys,
        Minting: isCheckedNotificationMinting,
        Sales: isCheckedNotificationSales,
        Listing: isCheckedNotificationListing
      };
      console.log(collectedInfo); // Aqui podemos substituir por uma chamada de API ou outra lógica conforme necessário
    } else {
      alert("Por favor, preencha todos os campos necessários antes de salvar.");
    }
  };

  const handleClickCancel = () => {
    alert('clicou no cancelar')
  }


  return (
    <HolderVerificationProvider>
      <section className='container mx-auto h-full text-white py-5'>
        <div className='flex flex-col'>
          <div>
            <h1 className='text-4xl pb-14 font-bold' >Holder Verification</h1>
          </div>
          {/* Collection information section */}
          <div className='flex flex-col gap-y-5 py-5'>
            <h2 className='text-2xl font-medium'>Collection information</h2>
            <div className='flex flex-col lg:flex-row lg:gap-x-5 gap-y-5'>
              <CreatorAddress value={creatorAddress} onChange={setCreatorAddress} />
              <CollectionName value={collectionName} onChange={setCollectionName} />
            </div>
            <div className='flex flex-col lg:flex-row lg:gap-x-10 w-full gap-y-2'>
              <SwitchHashlist
                isChecked={isCheckedHashlist}
                setIsChecked={setIsCheckedHashlist}
              />
              <div className='w-px bg-gray'></div>
              <SwitchSkipRole
                isChecked={isCheckedSkipRole}
                setIsChecked={setIsCheckedSkipRole}
              />
            </div>
            <div >
              {isCheckedHashlist && <ButtonUploadList />}
            </div>
            <div className='pb-5'>
              <SelectRole value={selectedRole} onChange={setSelectedRole} />
            </div>
          </div>

          {/* Define per attribute section  */}
          <div className={`flex flex-col gap-y-5 py-5 ${showSections ? '' : 'hidden'}`}>
            <h2 className='text-2xl font-medium'>Define role per attribute</h2>
            <div className='flex w-full'>
              <DropdownTrait onAddTrait={handleAddTrait} />
            </div>
            <div className='flex justify-center'>
              <TableTrait traits={traits} onClickDel={handleClickDel} />
            </div>
          </div>


          {/* Define per quantity section  */}
          <div className={`flex flex-col gap-y-5 py-5 ${showSections ? '' : 'hidden'}`}>
            <h2 className='text-2xl font-medium'>Define role per quantity</h2>
            <div className='flex flex-col gap-y-5 lg:flex-row lg:gap-x-5 justify-between w-full'>
              <DropdownRoleQuantity onAddQuantity={handleAddQuantity} />
            </div>
            <div className='flex justify-center'>
              <TableQuantity quantitys={quantitys} onClickDel={handleClickDelQuantity} />
            </div>
          </div>
          {/* Notification section */}
          <div className={`flex flex-col pb-10 py-5 ${showSections ? '' : 'hidden'}`}>
            <h2 className='text-2xl pb-5 font-medium'>Notification</h2>
            <div className='flex justify-start'>
              <SwitchNotification
                isCheckedMinting={isCheckedNotificationMinting}
                setIsCheckedMinting={setIsCheckedNotificationMinting}
                isCheckedSales={isCheckedNotificationSales}
                setIsCheckedSales={setIsCheckedNotificationSales}
                isCheckedListing={isCheckedNotificationListing}
                setIsCheckedListing={setIsCheckedNotificationListing} />
            </div>
          </div>
          {/* Button section  */}
          <hr className="h-px mb-5 bg-gray border-0" />
          <div className='flex justify-between pb-10'>
            <Button onClick={handleClickCancel} type='reset' className='w-40 bg-basic border'>Cancelar</Button>
            <Button onClick={handleClickSave} type='button'>Save</Button>
          </div>
        </div>
      </section>
    </HolderVerificationProvider>
  );
};

export default HolderVerification;
