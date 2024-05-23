import { FaCloudUploadAlt } from "react-icons/fa";
import React, { useRef } from 'react'
import Button from '../../components/ui/button'

const ButtonUploadList = () => {
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    // Lógica para lidar com o arquivo CSV aqui
    console.log('Arquivo selecionado:', file);
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileUpload}
      />
      <Button onClick={() => fileInputRef.current.click()} type='button' className='flex gap-x-3 w-full gap-y-1 lg:w-1/2 text-xl bg-transparent border hover:border-none transition-all duration-300 '>
        Upload list
        <FaCloudUploadAlt className="text-3xl" />
      </Button>
    </>
  );
};

export default ButtonUploadList