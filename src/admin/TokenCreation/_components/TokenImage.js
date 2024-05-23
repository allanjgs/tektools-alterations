import React, { useRef, useState } from 'react';
import { FaCloudUploadAlt, FaTimes } from "react-icons/fa";
import Button from '../../components/ui/button';

const TokenImage = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setBackgroundImage(imageUrl);
  };

  const handleClick = () => { 
    fileInputRef.current.click();
  };

  const handleRemoveImage = () => {
    setBackgroundImage(null);
  };

  return (
    <div className="relative">
      {backgroundImage ? (
        <div
          className="bg-cover bg-center w-52 h-52"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <button onClick={handleRemoveImage} className="absolute flex right-0 items-center text-sm text-red-500 p-1 gap-2 ">
            Remove
            <FaTimes />
          </button>
        </div>
      ) : (
        <Button onClick={handleClick} className="flex flex-col items-center justify-center w-52 h-52 border border-dashed hover:border-none transition-all duration-300">
          <FaCloudUploadAlt className="text-5xl" />
          Upload your token image
        </Button>
      )}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileUpload}
        accept="image/png, image/jpeg"
      />
    </div>
  );
};

export default TokenImage;