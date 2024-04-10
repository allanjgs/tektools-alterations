import React, { useState } from 'react'
import Button from '../components/ui/button'
import Dropdown from '../components/ui/dropdown'
import creatorAddress from './_components/creatorAddress'



const optionsCreator = [
  { label: 'Opção 1', value: 'option1' },
  { label: 'Opção 2', value: 'option2' },
  { label: 'Opção 3', value: 'option3' }
]


const HolderVerification = () => {
  //Toggle Button para tipo de verificação
  const [isChecked, setIsChecked] = useState(false)
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }
  const handleClickCancel = () => {
    console.log('Botão de cancelar clicado')
  }

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectCreator = (option) => {
    setSelectedOption(option);
    console.log('Opção selecionada:', option);
  };
  return (
    <section className='container mx-auto h-full bg-white/5 text-white'>
      <div className='flex flex-col'>
        <h1>Holder Verification</h1>
        {/* Colection information section  */}
        {/* Creator Address */}
        <creatorAddress/>


        {/* Select a role, verificar se irei modular */}
        {/* <div>
          <span>Select role</span>
          <Dropdown options={optionsCreator} value={selectedOption} onSelect={handleSelectCreator} placeholder='Select a role'></Dropdown>
        </div> */}


        {/* <div className='flex flex-row gap-x-10 font-thin text-lg tracking-wide items-center pt-4'>
          <span>Hashlist</span>
          <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center'>
            <input
              type='checkbox'
              checked={isChecked}
              onChange={handleCheckboxChange}
              className='sr-only'
            />
            <span className='label flex items-center '>
              NO
            </span>
            <span
              className={`mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${isChecked ? 'bg-accent' : 'bg-third'
                }`}
            >
              <span
                className={`h-6 w-6 rounded-full bg-white duration-200 ${isChecked ? 'translate-x-[28px]' : ''
                  }`}
              ></span>
            </span>
            <span className='label flex items-center'>
              YES
            </span>
          </label>
        </div> */}


        {/* Define per attribute section  */}
        <div></div>
        {/* Define per quantity section  */}
        <div></div>
        {/* Button section  */}
        <hr class="h-px my-8 bg-gray border-0" />
        <div className='flex justify-between'>
          <Button onClick={handleClickCancel} type='reset' className='w-40 bg-basic border'>Cancelar</Button>
          <Button onClick={handleClickCancel} type='reset'>Save</Button>
        </div>
      </div>
    </section>
  )
}

export default HolderVerification