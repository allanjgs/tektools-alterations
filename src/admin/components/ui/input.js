import React from 'react'

const Input = ({ value, onChange, type, placeholder, className, icon: Icon }) => {
  return (
    <div className="relative flex items-center">
      {Icon && <Icon className="absolute left-3 text-gray-500" />}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`bg-third border border-white hover:border-white/70 px-4 py-3 pl-10 rounded-lg shadow h-12 leading-tight focus:outline-none focus:shadow-outline focus:border-main focus:bg-basic w-full ${className}`}
      />
    </div>
  )
}

export default Input
