import React, { useState, useEffect } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { roleList, serverList } from '../TesteData/DataServerList';
import { useServer } from '../Contexts/ServerContext';
import AvatarImage from '../../img/AvatarTektools.png';

const AntiBotMembers = () => {
  // Recebe qual server está selecionado no Context
  const { selectedServer } = useServer();
  // Definindo estados para o servidor selecionado e o canal selecionado
  const [selectedChannel, setSelectedChannel] = useState('');
  // Filtrando a lista de canais com base no servidor selecionado
  const filteredChannels = serverList.find(server => server.id === selectedServer)?.channels || [];
  //Toggle Button para tipo de verificação
  const [isChecked, setIsChecked] = useState(false)
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }


  //data e hora
  const [currentDateTime, setCurrentDateTime] = useState('');
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date(Date.now());
      const formattedDateTime = `${formatNumber(now.getMonth() + 1)}/${formatNumber(now.getDate())}/${now.getFullYear()} ${formatNumber(now.getHours())}:${formatNumber(now.getMinutes())}`;
      setCurrentDateTime(formattedDateTime);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const formatNumber = (number) => {
    return number.toString().padStart(2, '0');
  };
  //button
  const saveClick = (event) => {
    console.log('Save')
  }

  return (
    <section className='mx-auto text-white h-auto '>
      <div className=' flex flex-col gap-y-8 '>
        <h1 className='font-semibold text-4xl'>Anti bot members</h1>
        <h2 className='font-semibold text-2xl'>User Verification</h2>
        <p className='font-thin text-lg tracking-wide'>In order to join Toolbox NFTs we need first to verify you are not a bot, please click the verify button to start the verification</p>
        <div className='flex flex-col lg:flex-row gap-x-5 justify-between gap-y-4'>
          {/* Dropdown para selecionar o servidor */}
          <div className=' flex flex-col lg:w-1/2'>
            <span className='pb-1 tracking-tight'>Select channel</span>
            <div className="relative w-full">
              <select
                className="block w-full bg-third border border-white/70 hover:border-white px-4 py-3 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline appearance-none"
                onChange={(event) => setSelectedChannel(event.target.value)}
                value={selectedChannel}
              >
                <option value="" hidden>Select a channel</option>
                {filteredChannels.map(channel => (
                  <option key={channel.id} value={channel.name}>
                    {channel.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <RiArrowDropDownLine className="text-white text-4xl" />
              </div>
            </div>
          </div>
          {/* Dropdown para selecionar o servidor */}
          <div className='t flex flex-col  lg:w-1/2'>
            <span className='pb-1 tracking-tight'>Select role</span>
            <div className="relative w-full">
              <select
                className="block w-full bg-third border border-white/70 hover:border-white px-4 py-3 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline appearance-none"
              >
                <option value="" hidden>Select a role</option>
                {roleList.map(role => (
                  <option key={role.id} value={role.condition}>
                    {role.condition}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <RiArrowDropDownLine className="text-white text-4xl" />
              </div>
            </div>

          </div>
        </div>
        {/* Check box para selecionar tipo de verificação */}
        <div className='flex flex-row gap-x-10 text-white font-thin text-lg tracking-wide items-center pt-4'>
          <span>Verification Type</span>
          <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center'>
            <input
              type='checkbox'
              checked={isChecked}
              onChange={handleCheckboxChange}
              className='sr-only'
            />
            <span className='label flex items-center '>
              Standart
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
            <span className='label flex items-center  '>
              Captcha
            </span>
          </label>
        </div>
        {/* Preview inicialmente escondido */}
        <div className=''>
          <h2 className='font-semibold text-3xl pb-8'>Preview</h2>
          <div className='flex bg-second w-full h-auto rounded-md gap-x-4 p-3'>
            <div className='items-start justify-start'>
              <img src={AvatarImage} alt="" className='h-12' />
            </div>
            <div className='flex flex-col gap-y-3' >
              <div className='flex flex-row items-center text-center gap-x-4 font-semibold'>
                <h1 className='text-main text-xl'>Tektools</h1>
                <span className='text-white bg-accent px-1 py-0.5 rounded-md font-extralight text-xs'>BOT</span>
                <p className='text-[12px]'>{currentDateTime}</p>
              </div>
              <div className='bg-basic border-l-4 border-main shadow-sm w-72 p-3 font-light rounded-sm'>
                <h2 className='text-2xl mb-2'>
                  User verification
                </h2>
                <p>
                  In order to join Toolboc NFTs, we need first to verify you are not a bot, please click the verify button to start the verification process.
                </p>
              </div>
              <span className='flex uppercase bg-accent w-24 h-12 justify-center items-center rounded-lg tracking-wide'>
                Verify
              </span>
            </div>
          </div>
        </div>
        {/* Botao de Save */}
        <div className='flex '>
          <button
            onClick={saveClick}
            className='flex uppercase bg-accent rounded-lg items-center justify-center w-36 h-14 text-center text-base font-bold hover:bg-accentHouver tracking-wide'>
            Save
          </button>
        </div>
      </div>
    </section>
  );
};

export default AntiBotMembers;
