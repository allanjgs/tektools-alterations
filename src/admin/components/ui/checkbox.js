import React from 'react'

const Checkbox = ({ checked, onChange, label }) => {
  return (
    <label className="flex items-center gap-x-5 text-sm">
      <span className="ml-2">{label}</span>
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={onChange} 
        className="form-checkbox h-5 w-5" 
      />
    </label>
  )
}

export default Checkbox;