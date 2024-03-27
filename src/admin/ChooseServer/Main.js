import React from 'react';
import HeaderAdmin from '../Header/HeaderAdmin';
import ChooseServer from './ChooseServer';


const ChooseMain = () => {
  return (
    <div className='h-screen bg-basic w-full'>
      <div className='shadow-md shadow-shadow drop-shadow-xl'>
        <HeaderAdmin />
        </div>
      <div className="h-auto ">
          <ChooseServer />
      </div>
    </div>
  )
}

export default ChooseMain


