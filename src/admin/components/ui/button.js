import React from 'react';

const Button = ({ onClick, type, children, className }) => {
  return (
    <button onClick={onClick} type={type} className={`flex uppercase bg-accent rounded-lg items-center justify-center w-36 h-12 text-center text-base font-bold hover:bg-accentHouver tracking-wide ${className}`}>
      {children}
    </button>
  );
};

export default Button;
