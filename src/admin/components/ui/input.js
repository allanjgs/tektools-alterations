import React from 'react'

const Input = ({ value, onChange, type, placeholder, className }) => {
  return (
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={` w-full bg-third border border-white hover:border-white/70 px-4 py-3 rounded-lg shadow h-12 leading-tight focus:outline-none focus:shadow-outline focus:border-main focus:bg-basic  ${className}`}
      />
      )
}

      export default Input