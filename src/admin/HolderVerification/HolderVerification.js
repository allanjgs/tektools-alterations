import { BiRefresh } from "react-icons/bi";
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import SelectRole from '../components/SelectRole';
import Button from '../components/ui/button';
import ButtonUploadList from './_components/ButtonUploadList';
import DropdownRoleQuantity from './_components/DropdownInputQuantity';
import DropdownTrait from './_components/DropdownTrait';
import CollectionName from './_components/InputCollectionName';
import CreatorAddress from './_components/InputCreatorAddress';
import SwitchHashlist from './_components/SwitchHashlist';
import SwitchNotification from './_components/SwitchNotification';
import SwitchSkipRole from './_components/SwitchSkipRole';
import TableQuantity from './_components/TableQuantity';
import TableTrait from './_components/TableTrait';
import { fetchCollectionData } from '../../utils/api';

const HolderVerification = () => {
  const [creatorAddress, setCreatorAddress] = useState('');
  const [collectionName, setCollectionName] = useState('');
  const [selectRole, setSelectRole] = useState('')
  const inheritSelectRole = (selectedRole) => {
    setSelectRole(selectedRole)
  }
  const [showSections, setShowSections] = useState(false);
  const [traits, setTraits] = useState([]);
  const [dadosApi, setDadosAPI] = useState();
  const [quantitys, setQuantitys] = useState([]);
  const [isCheckedSkipRole, setIsCheckedSkipRole] = useState(false)
  const [isCheckedHashlist, setIsCheckedHashlist] = useState(false)
  const [isCheckedNotificationMinting, setIsCheckedNotificationMinting] = useState(false)
  const [isCheckedNotificationSales, setIsCheckedNotificationSales] = useState(false)
  const [isCheckedNotificationListing, setIsCheckedNotificationListing] = useState(false)
  const handleAddTrait = (newTraitInfo) => {
    if (!newTraitInfo.attributeName || !newTraitInfo.attributeValue || !newTraitInfo.roleId) {
      toast.error("Todos os campos da trait devem ser preenchidos.");
      return;
    }

    const traitExists = traits.some(trait =>
      trait.attributeName === newTraitInfo.attributeName &&
      trait.attributeValue === newTraitInfo.attributeValue &&
      trait.roleId === newTraitInfo.roleId
    );

    if (!traitExists) {
      setTraits([...traits, newTraitInfo]);
    } else {
      toast.error("A combinação de trait já existe.")
    }
  };

  const handleClickDel = (index) => {
    const isConfirmed = window.confirm("Tem certeza que deseja excluir este item?");
    if (isConfirmed) {
      setTraits(traits.filter((_, i) => i !== index));
    }
  };

  const handleAddQuantity = (newQuantityInfo) => {
    if (!newQuantityInfo.roleName || !newQuantityInfo.numberOfNfts) {
      toast.error("Todos os campos devem ser preenchidos.");
      return;
    }

    const quantityExists = quantitys.some(quantity =>
      quantity.roleName === newQuantityInfo.roleName
    );
    if (!quantityExists) {
      setQuantitys([...quantitys, newQuantityInfo]);
    } else {
      toast.error("A combinação já existe.");
    }
  };

  const handleClickDelQuantity = (index) => {
    const isConfirmed = window.confirm("Tem certeza que deseja excluir este item?");
    if (isConfirmed) {
      setQuantitys(quantitys.filter((_, i) => i !== index));
    }
  };

  const handleClickSave = async () => {
    if (creatorAddress && collectionName && selectRole.id) {
      const localStorageKey = `${creatorAddress}`;
      const existingData = localStorage.getItem(localStorageKey);
      if (existingData) {
        toast.info("Dados já existem no armazenamento local.");
        setDadosAPI(JSON.parse(existingData));
        setShowSections(true);
        return;
      }
      toast.promise(
        fetchCollectionData(creatorAddress, collectionName, selectRole.id, isCheckedHashlist, isCheckedSkipRole, true)
          .then(response => {
            if (!response.ok) {
              throw new Error('Erro na resposta da API');
            }
            return response.json();
          })
          .then(data => {
            console.log('Dados recebidos da API:', data);
            localStorage.setItem(localStorageKey, JSON.stringify(data));
            setDadosAPI(data);
            setShowSections(true);
          }),
        {
          pending: 'Enviando dados...',
          success: 'Dados enviados com sucesso!',
          error: 'Erro ao enviar dados!'
        }
      );
    } else {
      toast.error("Por favor, preencha todos os campos necessários antes de salvar.");
    }
  };

  const handleRefreshData = async () => {
    const localStorageKey = `${creatorAddress}`;
    localStorage.removeItem(localStorageKey);
    toast.promise(
      fetchCollectionData(creatorAddress, collectionName, selectRole.id, isCheckedHashlist, isCheckedSkipRole)
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro na resposta da API');
          }
          return response.json();
        })
        .then(data => {
          console.log('Dados atualizados recebidos da API:', data);
          localStorage.setItem(localStorageKey, JSON.stringify(data));
          setDadosAPI(data);
          setShowSections(true);
        }),
      {
        pending: 'Atualizando dados...',
        success: 'Dados atualizados com sucesso!',
        error: 'Erro ao atualizar dados!'
      }
    );
  };

  const handleClickSaveTrait = () => {
    const collectedTraits = {
      guildId: localStorage.getItem('selectedServer'),
      creatorsAddress: creatorAddress,
      rolePerAttribute: traits,
      rolePerQty: quantitys,
      holderRole: selectRole.id,
      Minting: isCheckedNotificationMinting,
      Sales: isCheckedNotificationSales,
      Listing: isCheckedNotificationListing
    }
    console.log(collectedTraits)
  }


  const handleClickCancel = () => {
    toast.warning('clicou no cancelar')
    window.location.reload()
  }


  return (

    <section className='container mx-auto h-full text-white py-5'>
      <div className='flex flex-col'>
        <div>
          <h1 className='text-4xl pb-14 font-bold' >Holder Verification</h1>
        </div>
        {/* Collection information section */}
        <div className='flex flex-col gap-y-5 py-5'>
          <h2 className='text-2xl font-medium'>Collection information</h2>
          <div className='flex flex-col lg:flex-row lg:gap-x-5 gap-y-5'>
            <div className='flex justify-between items-end gap-x-2 lg:w-1/2'>
              <CreatorAddress value={creatorAddress} onChange={setCreatorAddress} />
              {localStorage.getItem(`${creatorAddress}`) && showSections && (
                <button onClick={handleRefreshData} className='hidden  bg-main items-center justify-center w-12 h-12 rounded-lg'>
                  <BiRefresh className="text-white font-semibold text-2xl" />
                </button>
              )}
            </div>
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
          <div className='pb-5 lg:w-1/2'>
            <SelectRole onSelectRole={inheritSelectRole} />
          </div>
        </div>
        
        {/* Define per quantity section  */}
        <div className={`flex flex-col gap-y-5 py-5 ${showSections ? '' : 'hidden'}`}>
          <h2 className='text-2xl font-medium'>Define role per quantity</h2>
          <div className='flex flex-col gap-y-5 lg:flex-row lg:gap-x-5 justify-between w-full'>
            <DropdownRoleQuantity onAddQuantity={handleAddQuantity} creatorAddress={creatorAddress} />
          </div>
          <div className='flex justify-center'>
            <TableQuantity quantitys={quantitys} onClickDel={handleClickDelQuantity} />
          </div>
        </div>

        {/* Define per attribute section  */}
        <div className={`flex flex-col gap-y-5 py-5 ${showSections ? '' : 'hidden'}`}>
          <h2 className='text-2xl font-medium'>Define role per attribute</h2>
          <div className='flex w-full'>
            <DropdownTrait onAddTrait={handleAddTrait} creatorAddress={creatorAddress}/>
          </div>
          <div className='flex justify-center'>
            <TableTrait traits={traits} onClickDel={handleClickDel}  />
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
          {!showSections ? (<Button onClick={handleClickSave} type='button'>Save</Button>) : (<Button onClick={handleClickSaveTrait} type='button'>SaveTrait</Button>)}

        </div>
      </div>
    </section >
  );
};

export default HolderVerification;
