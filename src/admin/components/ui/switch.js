import React from 'react';

const Switch = ({ isChecked, handleCheckboxChange, span, labelLeft, labelRight, className1, className2 }) => {
  return (
    <div className={`flex flex-row gap-x-10 font-thin text-lg tracking-wide items-center text-center w-full justify-between ${className1}`}>
      <span className={`text-base font-thin  ${className2}`}>{span}</span>
      <label className='relative inline-flex cursor-pointer select-none items-center'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='sr-only'
        />
        <span className={`text-xs font-bold  ${isChecked ? '' : ''
          }`}>{labelLeft}</span>
        <span
          className={`mx-4 flex h-8 w-14 items-center rounded-full p-1 duration-200 ${isChecked ? 'bg-accentMain' : 'bg-third'
            }`}
        >
          <span
            className={`h-6 w-6 rounded-full bg-white duration-200 ${isChecked ? 'translate-x-[28px]' : ''
              }`}
          ></span>
        </span>
        <span className={`text-xs font-bold  ${isChecked ? '' : ''
          }`}>{labelRight}</span>
      </label>
    </div>
  );
};

export default Switch;
