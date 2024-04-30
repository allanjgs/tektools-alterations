import React, { useState } from 'react'
import Button from '../components/ui/button'
import ButtonTokenSymbol from './_components/ButtonTokenSymbol'
import InputTokenContactsDiscord from './_components/InputTokenContactsDiscord'
import InputTokenDecimals from './_components/InputTokenDecimals'
import InputTokenDescription from './_components/InputTokenDescription'
import InputTokenName from './_components/InputTokenName'
import InputTokenSymbol from './_components/InputTokenSymbol'
import InputTokenTotal from './_components/InputTokenTotal'
import SwitchTokenContact from './_components/SwitchTokenContact'
import SectionTokenCreation from './SectionTokenCreation'

const TokenCreation = () => {
  const [isCheckedContact, setIsCheckedContact] = useState(false);

  const handleClickCancel = () => {
    alert('clicou no cancelar')
  }
  const handleClickSave = () => {
    alert('clicou no Save')
  }

  return (
    <section className='container mx-auto h-full text-white py-5'>
      <div className='flex flex-col gap-y-5'>
        <h1 className='text-4xl pb-14 font-bold' >SPL - Token creation</h1>
        <SectionTokenCreation />
        {/* Contact section */}
        <div className='py-5'>
          <SwitchTokenContact
            isChecked={isCheckedContact}
            setIsChecked={setIsCheckedContact}
          />
        </div>
        <div className='flex flex-row py-3 '>
          {isCheckedContact && <InputTokenContactsDiscord />}
          {isCheckedContact && <InputTokenContactsDiscord />}
          {isCheckedContact && <InputTokenContactsDiscord />}
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

export default TokenCreation