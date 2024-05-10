import React, { useEffect, useState } from 'react';
import Dropdown from './ui/dropdown';

const SelectChannel = ({onSelectChannel}) => {
  const [channels, setChannels] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState('');

  useEffect(() => {
    const fetchChannels = async () => {
      const response = await fetch(`/channels/${localStorage.getItem('selectedServer')}`);
      const data = await response.json();
      setChannels(data);
    };

    fetchChannels();
  }, []);

  const handleSelectChannel = (event) => {
    const selectedValue = event.target.value
    setSelectedChannel(selectedValue)
    onSelectChannel(selectedValue)
  };

  const dropdownOptions = channels.map(channel => ({
    value: channel.id,
    label: channel.name
  }));

  return (
    <div className='flex flex-col w-full gap-y-1'>
      <span className='px-3 text-base font-thin'>Select channel</span>
      <Dropdown options={dropdownOptions} value={selectedChannel} onChange={handleSelectChannel} placeholder='Select a channel' />
    </div>
  );
};

export default SelectChannel;
