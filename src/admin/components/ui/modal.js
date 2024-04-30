import { AiOutlineClose } from "react-icons/ai"; 
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-dark bg-opacity-50 flex items-center justify-center ">
      <div className="bg-third rounded-lg p-5">
        <button onClick={onClose} className="w-full flex mb-5 justify-end"><AiOutlineClose /></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
