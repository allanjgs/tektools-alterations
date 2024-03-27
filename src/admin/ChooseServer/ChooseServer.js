import React from 'react';
import AvatarImage from '../../img/AvatarTektools.png';
import { serverList } from '../TesteData/DataServerList';
import { useServer } from '../Contexts/ServerContext';
import HeaderAdmin from '../Header/HeaderAdmin';

const ChooseServer = () => {
  const { selectedServer, updateSelectedServer } = useServer(); // Use o hook useServer para acessar o contexto do servidor

  // Função para atualizar o servidor selecionado no contexto
  const GoServerChange = (serverId) => {
    updateSelectedServer(serverId); // Atualize o servidor selecionado no contexto
    window.location.href = '/dashboard';
  };

  return (
    <section className='flex h-full w-full bg-basic text-white py-10'>
      <div className='container mx-auto'>
        <div className='w-11/12'>
          <h1 className='font-medium text-4xl pb-10 flex'>Select a Server</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8'>
            {serverList.map((server, index) => (
              <div key={index} className='flex w-80 h-72 bg-second rounded-xl shadow-lg drop-shadow-lg shadow-shadow hover:bg-second/80'>
                  <div className='flex flex-col bg-gradient-to-b from-main from-15% via-transparent to-transparent w-full mx-8 my-4 rounded-xl items-center p-2 py-5'>
                    <div className='w-28 h-28 mx-auto'>
                      <img src={AvatarImage} alt="" />
                    </div>
                    <div className='text-center py-3'>
                      <h2 className='font-semibold text-2xl'>{server.name}</h2>
                      <p>Owner</p>
                    </div>
                    <div className='flex justify-center w-full'>
                      <button
                        onClick={() => GoServerChange(server.id)} // Passa o id do servidor selecionado para a função GoServerChange
                        className='uppercase bg-accent rounded-lg items-center justify-center w-full h-12 text-center text-base font-bold hover:bg-accentHouver tracking-wide'>
                        Go
                      </button>
                    </div>
                  </div>
                </div>

            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseServer;
