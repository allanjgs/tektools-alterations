import React, { useState } from 'react';
import { HolderVerificationProvider, useHolderVerification } from './HolderVerificationContext';
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

const HolderVerification = () => {

  const handleClickCancel = () => {
    console.log('Botão de cancelar clicado');
  };

  const handleClickSave = () => {
    // Salvar as informações do creatorAddress em outra variável
    console.log('Botão de Save clicado');
  };

  return (
    <HolderVerificationProvider>
      <section className='container mx-auto h-full bg-white/5 text-white'>
        <div className='flex flex-col gap-y-3'>
          <h1>Holder Verification</h1>
          <div className='flex flex-col lg:flex-row lg:gap-x-5'>
            <CreatorAddress />
            <CollectionName />
          </div>
          <div className='flex flex-col lg:flex-row lg:gap-x-10 '>
            <SwitchHashlist />
            <SwitchSkipRole />
          </div>
          <SelectRole />

          {/* Define per attribute section  */}
          <div className='flex flex-col gap-y-3'>
            <h1>Define role per attribute</h1>
            <div className='flex w-full'>
              <DropdownTrait />
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
            <Button onClick={handleClickSave} type='reset'>Save</Button>
          </div>
        </div>
      </section>
    </HolderVerificationProvider>
  );
};

export default HolderVerification;
