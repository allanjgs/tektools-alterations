import React from 'react';

const Switch = ({ isChecked, handleCheckboxChange,span , labelLeft, labelRight }) => {
  return (
    <div className='flex flex-row gap-x-10 font-thin text-lg tracking-wide items-center pt-4 justify-between w-full'>
      <span>{span}</span>
      <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='sr-only'
        />
        <span className='label flex items-center'>{labelLeft}</span>
        <span
          className={`mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
            isChecked ? 'bg-accent' : 'bg-third'
          }`}
        >
          <span
            className={`h-6 w-6 rounded-full bg-white duration-200 ${
              isChecked ? 'translate-x-[28px]' : ''
            }`}
          ></span>
        </span>
        <span className='label flex items-center'>{labelRight}</span>
      </label>
    </div>
  );
};

export default Switch;
