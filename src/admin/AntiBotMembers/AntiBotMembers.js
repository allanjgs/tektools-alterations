import React, { useState, useEffect } from 'react';
import AvatarImage from '../../img/AvatarTektools.png';
import SelectChannel from '../components/SelectChannel';
import SelectRole from '../components/SelectRole';
import Switch from '../components/ui/switch';
import Button from '../components/ui/button';
import { toast } from 'react-toastify';

const AntiBotMembers = () => {
  const [selectChannel, setSelectChannel] = useState('')
  const inheritSelectChannel = (selectedChannel) => {
    setSelectChannel(selectedChannel);
  }
  const [selectRole, setSelectRole] = useState('')
  const inheritSelectRole = (selectedRole) => {
    setSelectRole(selectedRole)
  }
  const [isChecked, setIsChecked] = useState(false)
  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

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
  const saveClick = () => {
    if (selectChannel && selectRole) {
      const infoAntiBotMembers = {
        serverId: localStorage.getItem('selectedServer'),
        channelId: selectChannel,
        roleId: selectRole.id,
        captcha: isChecked,
      };
      fetch('/users/verification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(infoAntiBotMembers),
      })
        .then(response => response.json())
        .then(data => {
          toast.success('Message sent successfully!');
          window.location.reload();
        })
        .catch(error => {
          toast.error("Opss, something gone wrong.");
        });
    } else {
      toast.warning("Ops, review empty fields!");
    }
  }
  return (
    <section className='mx-auto text-white container'>
      <div className=' flex flex-col gap-y-8 '>
        <h1 className='font-semibold text-4xl'>Anti bot members</h1>
        <h2 className='font-semibold text-2xl'>User Verification</h2>
        <p className='font text-lg tracking-wide'>In order to join Toolbox NFTs we need first to verify you are not a bot, please click the verify button to start the verification</p>
        <div className='flex flex-col lg:flex-row gap-x-8 justify-between gap-y-4'>
          {/* Dropdown para selecionar o servidor */}
          <div className=' flex flex-col lg:w-1/2'>
            <SelectChannel onSelectChannel={inheritSelectChannel} />
          </div>
          {/* Dropdown para selecionar o servidor */}
          <div className='t flex flex-col  lg:w-1/2'>
            <SelectRole onSelectRole={inheritSelectRole} />
          </div>
        </div>
        {/* Check box para selecionar tipo de verificação */}
        <div className='w-1/2 flex flex-row gap-x-10 text-white font text-lg tracking-wide items-center pt-4'>
          <Switch
            span='Verification type'
            isChecked={isChecked}
            handleCheckboxChange={handleChange}
            labelLeft="Standart"
            labelRight="Captcha"
          />
        </div>
        {/* Preview inicialmente escondido */}
        <div className='hidden'>
          <h2 className='font-semibold text-3xl pb-8'>Preview</h2>
          <div className='flex bg-second w-full h-auto rounded-md gap-x-4 p-3'>
            <div className='items-start justify-start'>
              <img src={AvatarImage} alt="" className='h-12' />
            </div>
            <div className='flex flex-col gap-y-3' >
              <div className='flex flex-row items-center text-center gap-x-4 font-semibold'>
                <h1 className='text-main text-xl'>Tektools</h1>
                <span className='text-white bg-accentMain px-1 py-0.5 rounded-md font-extralight text-xs'>BOT</span>
                <p className='text-[12px]'>{currentDateTime}</p>
              </div>
              <div className='bg-basic border-l-4 border-main shadow-sm w-72 p-3 rounded-sm'>
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
        <Button onClick={saveClick} type='button'>Save</Button>
      </div>
    </section>
  );
};
export default AntiBotMembers;
