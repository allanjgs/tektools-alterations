import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Dropdown = ({ options, value, onChange, className, placeholder }) => {
  return (
    <div className="relative">
      <select value={value} onChange={onChange} className={`block w-full h-12 bg-third border border-white/70 hover:border-white px-4 py-3 rounded-lg shadow leading-tight focus:outline-none focus:border-main focus:bg-basic focus:shadow-outline appearance-none ${className}`}>
        <option value="" hidden>{placeholder}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
        <RiArrowDropDownLine className="text-white text-4xl" />
      </div>
    </div>
  );
};

export default Dropdown;