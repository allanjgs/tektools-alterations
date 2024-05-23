import React from 'react'
import TokenImage from './_components/TokenImage'
import InputTokenDecimals from './_components/InputTokenDecimals'
import InputTokenDescription from './_components/InputTokenDescription'
import InputTokenName from './_components/InputTokenName'
import InputTokenSymbol from './_components/InputTokenSymbol'
import InputTokenTotal from './_components/InputTokenTotal'

const SectionTokenCreation = () => {

  return (
    <div className='flex flex-col gap-y-5'>
        <div className='flex flex-row gap-4 w-full'>
          <div className='flex items-center'>
            <TokenImage />
          </div>
          <div className='flex flex-col w-full justify-center gap-y-5'>
            <div className='flex flex-row'>
              <InputTokenName />
              <InputTokenSymbol />
            </div>
            <div>
              <InputTokenDescription />
            </div>
            {/* InputTokenSymbol */}
            <div className='flex w-full justify-end gap-x-10 px-3'>
              <InputTokenDecimals />
              <InputTokenTotal />
            </div>
          </div>
        </div>
      </div>
  )
}

export default SectionTokenCreation