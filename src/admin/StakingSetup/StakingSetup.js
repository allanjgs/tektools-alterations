import React, { useState } from 'react'
import DropdownStakingSelectRole from './_components/DropdownStakingSelectRole'
import TokenOption from './_components/TokenOption'
import TokenInformation from './_components/TokenInformation'
import SectionTokenCreation from '../TokenCreation/SectionTokenCreation'
import Button from '../components/ui/button'
import Modal from '../components/ui/modal'
import Checkbox from '../components/ui/checkbox'
import { InputHolderDay } from './_components/InputHolderDay'
import InputWithdraw from './_components/InputWithdraw'
import DropdownAmountDay from './_components/DropdownAmountDay'
import DropdownSelectChannel from './_components/DropdownSelectChannel'
import SwitchSpecificReward from './_components/SwitchSpecificReward'
import DropdownSelCollection from './_components/DropdownSelCollection'


const StakingSetup = () => {
  const [isCheckedTokenOption, setIsCheckedTokenOption] = useState(false)
  const [isCheckedSpecificReward, setIsCheckedSpecificReward] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const optionsSelectCollection = []
  const handleClickTokenCancel = (event) => {
    const isConfirmed = window.confirm("Tem certeza que deseja cancelar a criação do novo token?");
    if (isConfirmed) {
      setIsModalOpen(false)
      setIsCheckedTokenOption(event.target.checked)
    }
  };

  const handleClickTokenSave = () => {
    alert('Token salvo');
    setIsModalOpen(false);
    // Adicione a lógica para salvar o token aqui
  }

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };


  const handleClickCancel = () => {
    alert('clicou no cancelar')
  }
  const handleClickSave = () => {
    alert('clicou no Save')
  }
  return (
    <section className='container mx-auto h-full text-white py-5'>
      <div className='flex flex-col'>
        <div>
          <h1 className='text-4xl pb-14 font-bold'>Stalking Setup</h1>
        </div>
        {/* Role select */}
        <div className='flex flex-col gap-y-5 py-5'>
          <h2 className='text-2xl font-medium'>Select the role that can stake</h2>
          <div className='flex flex-row gap-x-5 items-end'>
            <DropdownStakingSelectRole />
            <Checkbox
              checked={isChecked}
              onChange={handleCheckboxChange}
              label="Server Points"
            />
          </div>
          <hr className="h-px mb-5 bg-gray border-0" />
        </div>
        {/* Token Section */}
        {!isChecked &&
          <div className='w-full gap-y-5 transition-all duration-700 '>

            <div className='w-1/2'>
              <TokenOption
                isChecked={isCheckedTokenOption}
                setIsChecked={setIsCheckedTokenOption}
              />
            </div>
            <div className='py-5'>
              {isCheckedTokenOption &&
                <div className="container mx-auto px-4">
                  <Button onClick={() => setIsModalOpen(true)}>
                    Criar Token
                  </Button>
                  <Modal
                    isOpen={isModalOpen}
                    onClose={handleClickTokenCancel}
                  >
                    <SectionTokenCreation />
                    <div className='flex justify-end gap-x-5 pt-10 mx-5'>
                      <Button onClick={handleClickTokenCancel} type='reset' className='w-40 bg-basic border'>Cancelar</Button>
                      <Button onClick={handleClickTokenSave} type='button'>Save</Button>
                    </div>
                  </Modal>
                </div>}
              {!isCheckedTokenOption && <TokenInformation />}
            </div>
            <hr className="h-px mb-5 bg-gray border-0" />
          </div>
        }
        {/* Rewards Details section */}
        <div>
          <h2 className='text-2xl font-medium'>Rewards Details</h2>
          <div className='flex flex-row gap-x-5 py-5'>
            <InputHolderDay />
            <InputWithdraw />
            <DropdownAmountDay />
          </div>
          <hr className="h-px mb-5 bg-gray border-0" />
        </div>
        {/* Select the collection that can stake */}
        <div className='flex flex-col'>
          <h2 className='text-2xl font-medium'>Select the collection that can stake</h2>
          <div className='flex flex-row gap-x-5 py-5'>
            <DropdownSelCollection optionsRole={optionsSelectCollection} />
            <DropdownSelectChannel />
          </div>
          <div className='py-5'>
            <h2 className='pb-5'>You can create custom trait specific reward basedon your NFT metadata to give its holder extra rewards, example: NFTs with trait Head, trait value Golden Necklace, get 10 rewards per day.</h2>
            <SwitchSpecificReward
              isChecked={isCheckedSpecificReward}
              setIsChecked={setIsCheckedSpecificReward}
            />
          </div>
          {isCheckedSpecificReward &&
            <div>
              <h2 className='text-2xl font-medium'>Information about your trait</h2>
              <div className='flex flex-row gap-x-5 py-5'>
              DropdownTraitType
              DorpdownTraitValue
              InputRewardTrait
                </div>
            </div>
          }

        </div>
      </div>
      {/* Button section  */}
      <hr className="h-px mb-5 bg-gray border-0" />
      <div className='flex justify-between pb-10'>
        <Button onClick={handleClickCancel} type='reset' className='w-40 bg-basic border'>Cancelar</Button>
        <Button onClick={handleClickSave} type='button'>Save</Button>
      </div>
    </section>
  )
}

export default StakingSetup;