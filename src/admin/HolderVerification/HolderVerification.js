import React, { useState } from 'react';
import { HolderVerificationProvider } from './HolderVerificationContext';
import CreatorAddress from './_components/InputCreatorAddress';
import CollectionName from './_components/InputCollectionName';
import SelectRole from './_components/DropdownSelectRole';
import SwitchHashlist from './_components/SwitchHashlist';
import SwitchSkipRole from './_components/SwitchSkipRole';
import Button from '../components/ui/button';
import DropdownTrait from './_components/DropdownTrait';
import DropdownRoleQuantity from './_components/DropdownRoleQuantity';
import InputQuantity from './_components/InputQuantity';
import SwitchNotification from './_components/SwitchNotification';
import TableTrait from './_components/TableTrait';

const HolderVerification = () => {
  // Estados para armazenar os valores dos componentes de entrada e seleção
  const [creatorAddress, setCreatorAddress] = useState('');
  const [collectionName, setCollectionName] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [traits, setTraits] = useState([]);

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
    setTraits(traits.filter((_, i) => i !== index));
  };

  const handleClickSave = () => {
    // Coletando as informações em um objeto
    const collectedInfo = {
      CreatorAddress: creatorAddress,
      CollectionName: collectionName,
      SelectedRole: selectedRole,
      Traits: traits // Adicionando as traits coletadas
    };
    console.log(collectedInfo); // Aqui você pode substituir por uma chamada de API ou outra lógica conforme necessário
  };

  const handleClickCancel = () => {
    alert('clicou no cancelar')
  }

  return (
    <HolderVerificationProvider>
      <section className='container mx-auto h-full bg-white/5 text-white'>
        <div className='flex flex-col gap-y-3'>
          <h1>Holder Verification</h1>
          <div className='flex flex-col lg:flex-row lg:gap-x-5'>
            {/* Passando funções para atualizar o estado como props */}
            <CreatorAddress value={creatorAddress} onChange={setCreatorAddress} />
            <CollectionName value={collectionName} onChange={setCollectionName} />
          </div>
          <div className='flex flex-col lg:flex-row lg:gap-x-10 '>
            <SwitchHashlist />
            <SwitchSkipRole />
          </div>
          {/* Passando funções para atualizar o estado como props */}
          <SelectRole value={selectedRole} onChange={setSelectedRole} />

          {/* Define per attribute section  */}
          <div className='flex flex-col gap-y-3'>
            <h1>Define role per attribute</h1>
            <div className='flex w-full'>
              <DropdownTrait onAddTrait={handleAddTrait} />


            </div>
            <div className='flex justify-center'>
              <TableTrait traits={traits} onClickDel={handleClickDel} />
            </div>
          </div>
          {/* Define per quantity section  */}
          <div className='flex flex-col gap-y-3 w-full'>
            <h1>Define role per quantity</h1>
            <div className='flex flex-col lg:flex-row lg:gap-x-5 '>
              <DropdownRoleQuantity />
              <InputQuantity />
            </div>
            <div className='flex flex-col'>
              <h1>Notification</h1>
              <div className='flex justify-start'>
                <SwitchNotification />
              </div>
            </div>
          </div>
          {/* Button section  */}
          <hr className="h-px mb-5 bg-gray border-0" />
          <div className='flex justify-between'>
            <Button onClick={handleClickCancel} type='reset' className='w-40 bg-basic border'>Cancelar</Button>
            <Button onClick={handleClickSave} type='button'>Save</Button>
          </div>
        </div>
      </section>
    </HolderVerificationProvider>
  );
};

export default HolderVerification;
