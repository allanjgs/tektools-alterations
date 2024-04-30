import React, { useRef } from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from '../../components/ui/button';

const ButtonTokenSymbol = () => {
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    // Lógica para lidar com o arquivo CSV aqui
    console.log('Arquivo selecionado:', file);
  };

  const handleClick = () => { // Removido o parâmetro 'file' que não era utilizado
    fileInputRef.current.click();
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileUpload}
        accept="image/png, image/jpeg"
        className='flex items-center justify-center  rounded-xl w-60 h-60 hover:bg-accentHouver bg-transparent transition-all  hover:border-transparent' />
      <Button onClick={handleClick} type='button' className='flex flex-col gap-y-5 w-52 h-52 text-xl border border-dashed bg-transparent hover:border-transparent'>
        <FaCloudUploadAlt className="text-5xl" />
        Upload your token symbol
      </Button>
    </>
  )
}

export default ButtonTokenSymbol