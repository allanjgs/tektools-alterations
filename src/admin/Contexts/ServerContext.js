import React, { createContext, useContext, useState } from 'react';

const ServerContext = createContext();

export const ServerProvider = ({ children }) => {
  const [selectedServer, setSelectedServer] = useState('');

  
  const updateSelectedServer = (serverId) => {
    console.log('Selected Server:', serverId);
    setSelectedServer(serverId);
  };

  return (
    <ServerContext.Provider value={{ selectedServer, updateSelectedServer }}>
      {children}
    </ServerContext.Provider>
  );
};

export const useServer = () => useContext(ServerContext);
