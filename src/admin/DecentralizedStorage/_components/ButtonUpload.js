import React from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";

function ButtonUpload({ onImageSelected }) {
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onImageSelected(reader.result, file.name);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex w-full items-center">
            <label className="flex w-full items-center justify-center cursor-pointer gap-x-5 bg-transparent border hover:bg-accentHouver hover:border-transparent text-white font-bold py-2 rounded-lg tracking-wide transition duration-300">
                Upload 
                <FaCloudUploadAlt className='text-3xl'/>
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageChange} 
                    className="hidden" 
                />
            </label>
        </div>
    );
}

export default ButtonUpload;