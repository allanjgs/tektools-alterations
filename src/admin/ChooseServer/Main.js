import React from 'react';
import HeaderAdmin from '../Header/HeaderAdmin';
import ChooseServer from './ChooseServer';


const ChooseMain = () => {
  return (
    <div className='h-screen w-full bg-bgAdmin bg-no-repeat bg-cover'>
      <div className=''>
        <HeaderAdmin />
        </div>
      <div className="h-auto">
          <ChooseServer />
      </div>
    </div>
  )
}

export default ChooseMain


