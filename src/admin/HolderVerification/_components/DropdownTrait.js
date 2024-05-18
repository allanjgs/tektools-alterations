import React, { useState, useEffect } from 'react';
import SelectRole from '../../components/SelectRole';
import Button from '../../components/ui/button';
import Dropdown from '../../components/ui/dropdown';

const DropdownTrait = ({ onAddTrait, creatorAddress }) => {
  const [selectRole, setSelectRole] = useState('');
  const [selectedTraitType, setSelectedTraitType] = useState('');
  const [selectedTraitValue, setSelectedTraitValue] = useState('');
  const [selectedTraitId, setSelectedTraitId] = useState('');
  const [optionsTraitType, setOptionsTraitType] = useState([]);
  const [optionsTraitValue, setOptionsTraitValue] = useState([]);

  useEffect(() => {
    if (creatorAddress) {
      const storedTraits = localStorage.getItem(`${creatorAddress}`);
      if (storedTraits) {
        const parsedTraits = JSON.parse(storedTraits);
        if (parsedTraits && Array.isArray(parsedTraits.Attributes)) {
          const traitTypes = parsedTraits.Attributes.map(attr => ({ label: attr.TraitType, value: attr.TraitType, id: attr._id }));
          setOptionsTraitType(traitTypes);
        } else {
          setOptionsTraitType([{ label: 'Opção Padrão', value: 'default' }]);
        }
      } else {
        setOptionsTraitType([{ label: 'Opção Padrão', value: 'default' }]);
      }
    }
  }, [creatorAddress]);

  useEffect(() => {
    if (selectedTraitType && creatorAddress) {
      const storedTraits = localStorage.getItem(`${creatorAddress}`);
      if (storedTraits) {
        const parsedTraits = JSON.parse(storedTraits);
        if (parsedTraits && Array.isArray(parsedTraits.Attributes)) {
          const selectedAttribute = parsedTraits.Attributes.find(attr => attr.TraitType === selectedTraitType);
          if (selectedAttribute) {
            const traitValues = selectedAttribute.TraitValue || [];
            setOptionsTraitValue(traitValues.map(value => ({ label: value, value })));
            setSelectedTraitId(selectedAttribute._id); // Define o selectedTraitId com o _id correspondente
          } else {
            setOptionsTraitValue([]);
            setSelectedTraitId(''); // Limpa o selectedTraitId se nenhum atributo for encontrado
          }
        }
      }
    }
  }, [selectedTraitType, creatorAddress]);

  const inheritSelectRole = (selectedRole) => {
    setSelectRole(selectedRole);
  };

  const handleClickAdd = () => {
    const newTraitInfo = {
      id: selectedTraitId,
      type: selectedTraitType,
      value: selectedTraitValue,
      role: selectRole
    };
    onAddTrait(newTraitInfo);
  };

  return (
    <div className='flex flex-col lg:flex-row w-full gap-y-5 lg:gap-x-5 items-center text-base font-thin'>
      <div className='flex flex-col w-full gap-y-1'>
        <span className='px-3'>Trait type</span>
        <Dropdown options={optionsTraitType} value={selectedTraitType} onChange={(e) => setSelectedTraitType(e.target.value)} placeholder='Enter a trait type' />
      </div>
      <div className='flex flex-col w-full gap-y-1'>
        <span className='px-3'>Trait value</span>
        <Dropdown options={optionsTraitValue} value={selectedTraitValue} onChange={(e) => setSelectedTraitValue(e.target.value)} placeholder='Enter a trait value' />
      </div>
      <div className='flex flex-col w-full gap-y-1'>
        <SelectRole onSelectRole={inheritSelectRole} />
      </div>
      <div className='flex h-full items-end pt-5 lg:pt-0'>
        <Button onClick={handleClickAdd} type='button' className='h-12 lg:w-12 font-thin bg-main'>ADD</Button>
      </div>
    </div>
  );
};

export default DropdownTrait;